import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Title from "./title";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";

function preventDefault(event: { preventDefault: () => void }) {
  event.preventDefault();
}

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
  const [Raccount, setRaccount] = React.useState("");
  const [Saccount, setSaccount] = React.useState("");
  const [Amount, setAmount] = React.useState("");
  const handleChange = (event: { target: { value: any } }) => {
    this.setState({ name: event.target.value });
  };
  return (
    <>
      <Title>Top W-Deposit Account</Title>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">
              Sender W-deposit
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">W</InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">
              Receiver W-deposit
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">W</InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </Grid>

        <Grid container xs={12} className={classes.margin}>
          <Button variant="contained" color="secondary" fullWidth>
            Validate
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default TopUpChart;
