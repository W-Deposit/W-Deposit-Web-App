import { createMuiTheme } from "@material-ui/core/styles";
import Fonts from "./fonts";
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009DF5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#271452",
    },
  },
  overrides: {
    MuiButton: {
      text: {
        fontFamily: Fonts.Rubik,
        size: "15px",
      },
    },
  },
  typography: {
    h6: {
      fontFamily: Fonts.Roboto,
      size: "30px",
      fontWeight: 500,
      style: "normal",
      letter: "0.15px",
      lineHeight: "32px",
    },
    h5: {
      fontFamily: "Rubik",
      size: "24px",
      lineHeight: "133.4%",
    },
    h1: {},
    h2: {},
    h3: {},
    h4: {
      fontFamily: "Rubik",
      size: "24px",
      lineHeight: "133.4%",
    },
    subtitle1: {},
    subtitle2: {
      fontFamily: Fonts.WorkSans,
      size: "14px",
      fontWeight: 500,
    },
    body1: {
      fontFamily: Fonts.Rubik,
      fontWeight: 700,
      size: "15px",
    },
    body2: {
      fontFamily: Fonts.WorkSans,
      size: "16px",
    },
    overline: {
      fontFamily: "Work Sans",
      size: "12px",
      lineHeight: "266%",
    },
    button: {
      fontFamily: Fonts.Rubik,
      fontWeight: 500,
      size: "14px",
    },
    caption: {
      fontFamily: "Work Sans",
      fontWeight: 400,
      fontSize: "12px",

      lineHeight: "19.92px",
      letterSpacing: "0.4px",
      fontStyle: "normal",
    },
  },
});

export default theme;
