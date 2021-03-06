import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Title from "./title";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useHistory } from "react-router-dom";
import { TransitionProps } from "@material-ui/core/transitions";
import Alert from "@material-ui/lab/Alert";
let accountID: string;
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  error: {
    marginTop: 20,
  },
  dialogTitle: {
    paddingLeft: 50,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "29%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
});
const validationSchema = yup.object({
  sender: yup.string().required(),
  receiver: yup.string().required("Please! provide a valid receiver Id"),
  montant: yup
    .string()
    .required("Please enter a valid amount in dollars or congolese fc"),
});
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const TopUpChart = () => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/signup");
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //const [amount, setAmount] = React.useState("");

  const userInfos = localStorage.getItem("user-infos");

  if (userInfos) {
    const userInfos_obj = JSON.parse(userInfos);

    const account_Id = userInfos_obj[Object.keys(userInfos_obj)[2]];
    accountID = account_Id;
  }

  const formik = useFormik({
    initialValues: {
      sender: accountID,
      receiver: "",
      montant: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = JSON.stringify(formik.values);
      console.log("DATA", data);
      axios
        .post("https://w-deposit.herokuapp.com/api/envoyer", values)
        .then((response) => {
          setLoading(false);
          console.log("message", response.data);
          if (response.status === 200) {
            handleClickOpen();
          }
        })
        .catch((error) => {
          if (error.response.data.msg) {
            setError(error.response.data.msg);
            console.log("response", error.response.data.msg);
          }
        });
    },
  });

  return (
    <>
      <Title>TopUp W-Deposit Account</Title>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              disabled
              id="sender"
              name="sender"
              label="sender Id"
              value={formik.values.sender}
              onChange={formik.handleChange}
              error={formik.touched.sender && Boolean(formik.errors.sender)}
              helperText={formik.touched.sender && formik.errors.sender}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
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
              disabled={loading ? false : true}
              color="secondary"
              variant="contained"
              fullWidth
              type="submit"
            >
              {loading ? "PROCEED" : "PROCESSING..."}
            </Button>
          </Grid>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle
              id="alert-dialog-slide-title"
              className={classes.dialogTitle}
            >
              TRANSACTION STATUS
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Alert severity="success">
                  Your transaction have been succesfull!<br></br>Thank you for
                  choosing W-DEPOSIT(:
                </Alert>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" fullWidth>
                CHECK TRANSACTION HISTORY
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </form>
      {error ? (
        <Alert severity="error" className={classes.error}>
          {error.toString()}
        </Alert>
      ) : null}
    </>
  );
};
export default TopUpChart;
