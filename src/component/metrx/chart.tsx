import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./title";
import axios from "axios";
interface resulsts {
  _id: string;
  dateTransaction:string
}
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

      axios.post("https://w-deposit.herokuapp.com/api/history", {
        user: acount_Id
       
      })
      .then((response) => {
        const data = response.data.dataTransaction
        setUserToken(data)
        console.log("FUCK",data);

      }, (error) => {
        console.log(error);
      });






      
    }
   
  }, []);

  return (
    <React.Fragment>
      <Title>Current merchant balance</Title>
      <Typography component="p" variant="h4">
        ${amount}
      </Typography>
      {/* {userToken && userToken.map((resulsts)=>{
        <Typography variant="h6" color="initial" key={resulsts._id}>{resulsts.client}</Typography>
      })} */}
      <Typography color="textSecondary" className={classes.depositContext}>
       
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
