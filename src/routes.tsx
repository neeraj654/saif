import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { Maincontainer } from "./UI/Container/Maincontainer";

// Route Views
import {Test} from "./Components/Test";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Reach from "./pages/Reach";
import Home from "./pages/Home";


export default [
  {
    path: "/test",
    exact: true,
    layout: Maincontainer,
    component: () => <Redirect to="/test" />
  },
  {
    path: "/test",
    layout: Maincontainer,
    component: Test
  },
  {
    path: "/portfolio",
    exact: true,
    layout: Maincontainer,
    component: () => <Redirect to="/Portfolio" />
  },
  {
    path: "/Portfolio",
    layout: Maincontainer,
    component: Portfolio
  },
  {
    path: "/Team",
    exact: true,
    layout: Maincontainer,
    component: () => <Redirect to="/Team" />
  },
  {
    path: "/Team",
    layout: Maincontainer,
    component: Team
  },
  {
    path: "/Reach",
    exact: true,
    layout: Maincontainer,
    component: () => <Redirect to="/Reach" />
  },
  {
    path: "/Reach",
    layout: Maincontainer,
    component: Reach
  },
  {
    path: "/",
    exact: true,
    layout: Maincontainer,
    component: () => <Redirect to="/" />
  },
  {
    path: "/",
    layout: Maincontainer,
    component: Home
  },
  /*{
    path:"/linkedin",
    exact: true,
    component: ()=>{window.location.href="http://www.linkedin.com/company/fliprindia" 
    return null}
  },
  {
    path:"/linkedin",
    component: linkedin
  }*/
]