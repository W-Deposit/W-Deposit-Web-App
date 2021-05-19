import SignUp from "../screens/auth/signUp";
import TopUp from "../screens/sendMoney/topUp";
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
];

export default Routes;
