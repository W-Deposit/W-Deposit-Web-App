import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Title from "./title";
import axios from "axios";

export type ITransaction = {
  _id: string;
  dateTransaction: string;
  client: string;
  destinataire: string;
  montant: string;
  operation: string;
};
function preventDefault(event: { preventDefault: () => void }) {
  event.preventDefault();
}

const Deposits = () => {
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    const userInfos = localStorage.getItem("user-infos");
    if (userInfos) {
      const userInfos_obj = JSON.parse(userInfos);
      const token_bear = userInfos_obj[Object.keys(userInfos_obj)[0]];

      axios
        .get("https://w-deposit.herokuapp.com/api/me", {
          headers: {
            token: token_bear, //the token is a variable which holds the token
          },
        })
        .then(
          (response) => {
            const responseData = response.data.wdeposit;
            setAmount(JSON.stringify(responseData));
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, []);

  return (
    <React.Fragment>
      <Title>Current merchant balance</Title>
      <Typography component="p" variant="h4">
        ${amount.toString()}
      </Typography>
      {/* {userToken && userToken.map((resulsts)=>{
        <Typography variant="h6" color="initial" key={resulsts._id}>{resulsts.client}</Typography>
      })} */}

      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Deposits;
