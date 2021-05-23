import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Title from "./title";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const validationSchema = yup.object({
  sender: yup.string().required("Please! provide a valid W deposit Account Id"),
  receiver: yup.string().required("Please! provide a valid receiver Id"),
  montant: yup
    .string()
    .required("Please enter a valid amount in dollars or congolese fc"),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    depositContext: {
      flex: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

const TopUpChart = () => {
  const classes = useStyles();
  const [senderId, setSenderId] = React.useState("");
  const [receiverId, setReceiverId] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const formik = useFormik({
    initialValues: {
      sender: "",
      receiver: "",
      montant: "",
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
      <Title>Top W-Deposit Account</Title>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Sender Id Or Phone"
              id="sender"
              name="sender"
              type="sender"
              value={formik.values.sender}
              onChange={formik.handleChange}
              error={formik.touched.sender && Boolean(formik.errors.sender)}
              helperText={formik.touched.sender && formik.errors.sender}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Receiver Id Or Phone"
              id="receiver"
              name="receiver"
              type="receiver"
              value={formik.values.receiver}
              onChange={formik.handleChange}
              error={formik.touched.receiver && Boolean(formik.errors.receiver)}
              helperText={formik.touched.receiver && formik.errors.receiver}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Amount to be sent"
              id="montant"
              name="montant"
              type="montant"
              value={formik.values.montant}
              onChange={formik.handleChange}
              error={formik.touched.montant && Boolean(formik.errors.montant)}
              helperText={formik.touched.montant && formik.errors.montant}
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
              Proceed
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default TopUpChart;
