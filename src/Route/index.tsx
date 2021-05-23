import SignUp from "../screens/auth/signUp";
import TopUp from "../screens/sendMoney/topUp";
import CheckBalance from "../screens/checkAccount/index";
export const Routes = [
  {
    path: "/",
    name: "signup",
    title: "SIGNUP",
    exact: true,
    component: SignUp,
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
];

export default Routes;
