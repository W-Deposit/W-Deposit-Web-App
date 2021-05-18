import SignUp from "../screens/auth/signUp";
import CheckAccount from "../screens/checkAccount";
export const Routes = [
  {
    path: "/",
    name: "signup",
    title: "SIGNUP",
    exact: true,
    component: SignUp,
  },
  {
    path: "/checkAccount",
    name: "checkAccount",
    title: "CHECK_ACCOUNT",
    exact: true,
    component: CheckAccount,
  },
];

export default Routes;
