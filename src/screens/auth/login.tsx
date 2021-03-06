import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import * as yup from "yup";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { green } from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    main: {
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);",
      marginTop: 80,
      padding: "200px",
    },
    fields: {
      paddingBottom: 10,
    },
    title: {
      fontWeight: "bold",
      marginBottom: 10,
    },
    buttonSuccess: {},
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "29%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
    alertData: {
      marginTop: 10,
    },
    button: {
      color: "#fff",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);
const validationSchema = yup.object({
  email: yup.string().required("Please! provide a valid email format").email(),
  password: yup.string().required("Password is required!"),
});

const Login = () => {
  const classes = useStyles();

  const [data, setData] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<number>();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  const history = useHistory();
  async function LoginAuth(data: any) {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
    const Response = await fetch(`https://w-deposit.herokuapp.com/api/login `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(JSON.stringify(data));

    const jsonData = await Response.json();

    Object.entries(jsonData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
      setData(`${value}`);
    });

    console.log(jsonData);
    if (Response.status === 200) {
      localStorage.setItem("user-infos", JSON.stringify(jsonData));
      history.push("/signup");
    }
  }

  useEffect(() => {
    clearTimeout(timer.current);
    if (localStorage.getItem("user-infos")) {
      history.push("/signup");
    } else {
      history.push("/");
    }
  }, [history]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      LoginAuth(values);
    },
  });
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} className={classes.main}>
          <Typography variant="h6" color="primary" className={classes.title}>
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              className={classes.fields}
              fullWidth
              variant="outlined"
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              className={classes.fields}
              fullWidth
              variant="outlined"
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              className={buttonClassname}
              disabled={loading}
              variant="contained"
              color="secondary"
              fullWidth
              type="submit"
            >
              Login
              {loading && "Loading..."}
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </form>

          {data ? (
            <Alert severity="error" className={classes.alertData}>
              {data}
            </Alert>
          ) : null}
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};
export default Login;
