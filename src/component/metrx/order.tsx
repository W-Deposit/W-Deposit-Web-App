import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./title";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

// Generate Order Data

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

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  historyLoading: {
    marginLeft: "500px",
    marginTop: 10,
  },
}));
const Orders = () => {
  const classes = useStyles();
  const [userToken, setUserToken] = useState([]);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userInfos = localStorage.getItem("user-infos");
    if (userInfos) {
      const userInfos_obj = JSON.parse(userInfos);
      setAmount(userInfos_obj[Object.keys(userInfos_obj)[3]]);

      const acount_Id = userInfos_obj[Object.keys(userInfos_obj)[2]];

      axios
        .post("https://w-deposit.herokuapp.com/api/history", {
          user: acount_Id,
        })
        .then(
          (response) => {
            setLoading(false);
            const data = response.data.dataTransaction;
            setUserToken(data);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, []);

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Operation</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <CircularProgress
            color="primary"
            style={{ fontSize: 40 }}
            className={classes.historyLoading}
          />
        ) : (
          <TableBody>
            {userToken &&
              userToken.map((o: ITransaction, index: number) => (
                <TableRow key={index}>
                  <TableCell>{o._id}</TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat("en-GB", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    }).format(new Date(o.dateTransaction))}
                  </TableCell>
                  <TableCell>{o.destinataire}</TableCell>
                  <TableCell>{o.operation}</TableCell>
                  <TableCell align="right">{o.montant}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Orders;
