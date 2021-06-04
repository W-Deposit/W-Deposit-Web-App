import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "./Route/index";
import Login from "./screens/auth/login";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
function App() {
  let routeComponents:any
 
  const userInfos = localStorage.getItem("user-infos");
if(userInfos){
   routeComponents = Routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
}else{
routeComponents =  <Route exact path="/" component={Login}  />
// eslint-disable-next-line no-lone-blocks
{history.push("/")}
}
 
  console.log(routeComponents);
  return (
    <>
      <BrowserRouter>
        <div>{routeComponents}</div>
      </BrowserRouter>
    </>
  );
}

export default App;
