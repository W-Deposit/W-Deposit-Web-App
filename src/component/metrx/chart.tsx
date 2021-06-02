import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./title";
let data: any;
function preventDefault(event: { preventDefault: () => void }) {
  event.preventDefault();
}

const loadUserInfos = async (w_account: any) => {
  const Response = await fetch(`https://w-deposit.herokuapp.com/api/history `, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: w_account }),
  });
  console.log("Account", w_account);
  const jsonData = await Response.json();

  console.log("VANESSA", JSON.stringify(jsonData));
};

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Deposits = () => {
  const classes = useStyles();
  const [userToken, setUserToken] = useState("");
  const [amount, setAmount] = useState("");
  useEffect(() => {
    const userInfos = localStorage.getItem("user-infos");
    if (userInfos) {
      const userInfos_obj = JSON.parse(userInfos);

      setAmount(userInfos_obj[Object.keys(userInfos_obj)[3]]);
      loadUserInfos(userInfos_obj[Object.keys(userInfos_obj)[2]]);
      console.log(userInfos_obj[Object.keys(userInfos_obj)[2]]);
      setUserToken(data);
    }
  }, []);
  return (
    <React.Fragment>
      <Title>Current merchant balance</Title>
      <Typography component="p" variant="h4">
        ${amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
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
