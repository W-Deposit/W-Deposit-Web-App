import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "./Route/index";
function App() {
  const routeComponents = Routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
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
