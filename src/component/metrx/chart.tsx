import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./title";
import axios from "axios";
function preventDefault(event: { preventDefault: () => void }) {
  event.preventDefault();
}
let user: any;

const loadUserInfos = async (w_account: any) => {};

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Deposits = () => {
  const classes = useStyles();

  const [userToken, setUserToken] = useState([]);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const userInfos = localStorage.getItem("user-infos");
    if (userInfos) {
      const userInfos_obj = JSON.parse(userInfos);
      setAmount(userInfos_obj[Object.keys(userInfos_obj)[3]]);

      const acount_Id = userInfos_obj[Object.keys(userInfos_obj)[2]];
      axios
        .post(
          "https://w-deposit.herokuapp.com/api/history",
          JSON.stringify({ user: acount_Id })
        )
        .then((res) => {
          console.log(res);
        });
    }
  }, []);

  return (
    <React.Fragment>
      <Title>Current merchant balance</Title>
      <Typography component="p" variant="h4">
        ${amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {userToken}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Deposits;
