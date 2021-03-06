import React, { useEffect, useState } from "react";
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

const Deposits = () => {
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const userInfos = localStorage.getItem("user-infos");
    if (userInfos) {
      const userInfos_obj = JSON.parse(userInfos);
      setAmount(userInfos_obj[Object.keys(userInfos_obj)[3]]);

      const account_Id = userInfos_obj[Object.keys(userInfos_obj)[2]];

      axios
        .post("https://w-deposit.herokuapp.com/api/history", {
          user: account_Id,
        })
        .then(
          (response) => {
            const data = response.data.dataTransaction;

            console.log("FUCK", data);
          },
          (error) => {
            console.log(error);
          }
        );

      setAmount(account_Id);
    }
  }, [amount]);
  return (
    <>
      <Title>Recent Deposits</Title>

      <div>
        <Typography component="p" variant="h6">
          W-ID:${amount}
        </Typography>
        <Typography component="p" variant="h4"></Typography>
      </div>
    </>
  );
};
export default Deposits;
