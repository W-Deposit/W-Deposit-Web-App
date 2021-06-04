import React from "react";
import Button from "@material-ui/core/Button";
import Title from "./title";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";

import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";

const validationSchema = yup.object({
  account: yup
    .string()
    .required("Please! provide a valid W deposit Account Id"),
});

const TopUpChart = () => {
  // const classes = useStyles();
  // const [senderId, setSenderId] = React.useState("");
  //const [amount, setAmount] = React.useState("");
  const formik = useFormik({
    initialValues: {
      account: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      axios
        .post(`https://w-deposit.herokuapp.com/api/envoyer`, values)
        .then((response) => {
          console.log(response);
        });
    },
  });

  return (
    <>
      <Title>Check W-Deposit Account</Title>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="W account ID"
              id="account"
              name="account"
              type="account"
              value={formik.values.account}
              onChange={formik.handleChange}
              error={formik.touched.account && Boolean(formik.errors.account)}
              helperText={formik.touched.account && formik.errors.account}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Check account availability
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default TopUpChart;
