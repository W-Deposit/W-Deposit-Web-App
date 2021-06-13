import SignUp from "../screens/auth/signUp";
import TopUp from "../screens/sendMoney/topUp";
import Transactions from "../screens/transactions/index";
import CheckBalance from "../screens/checkAccount/index";
import About from "../screens/about/index";
import Login from "../screens/auth/login";
import MyAccount from "../screens/myAccount/index";
export const Routes = [
  {
    path: "/signup",
    name: "signup",
    title: "SIGNUP",
    exact: true,
    component: SignUp,
  },
  {
    path: "/",
    name: "login",
    title: "LOGIN",
    exact: true,
    component: Login,
  },
  {
    path: "/topUp",
    name: "topUp",
    title: "TOP_UP",
    exact: true,
    component: TopUp,
  },
  {
    path: "/checkBalance",
    name: "checkBalance",
    title: "CHECK_BALANCE",
    exact: true,
    component: CheckBalance,
  },
  {
    path: "/transactions",
    name: "transactions",
    title: "TRANSACTIONS",
    exact: true,
    component: Transactions,
  },
  {
    path: "/about",
    name: "about",
    title: "ABOUT",
    exact: true,
    component: About,
  },
];

export default Routes;
