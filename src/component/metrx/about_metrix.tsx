import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./title";

function preventDefault(event: { preventDefault: () => void }) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function AboutUs() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h3" color="initial">
        W-DEPOSIT<br></br>
      </Typography>
      <Typography component="p" variant="body2">
        is a mobile and web platform ,based in DR.Congo , which allow users from
        diffrent countires ,to send and receive money Or pay thier local
        services through their mobile.
      </Typography>
    </React.Fragment>
  );
}
