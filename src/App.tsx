import React from "react";
import "./App.css";

import {Route,BrowserRouter as Router} from 'react-router-dom';
import routes from "./routes";

const App: React.FC = () => {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={(props: any) => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            }}
          />
        );
      })}
    </div>
  </Router>
    // <>
    
    // <BrowserRouter>
    // <Switch>
    // <Route exact path="/" component={Home} />
    // <Route exact path="/Reach" component={Reach} />
    // <Route exact path="/Team" component={Team} />
    // <Route exact path="/Portfolio" component={Portfolio} />
    // <Route exact path="/Test" component={Test}/>

    // <Route exact path="/linkdin" component={()=>{ 
    //   window.location.href="http://www.linkedin.com/company/fliprindia"
    //   return null
    //   }} />
    //   <Route exact path="/facebook" component={()=>{ 
    //   window.location.href="https://www.facebook.com/fliprindia/"
    //   return null
    //   }} />
    //   <Route exact path="/twitter" component={()=>{ 
    //   window.location.href="Link: https://www.twitter.com/flipr_india"
    //   return null
    //   }} />
    // </Switch>
    // </BrowserRouter>
    // </>
  );
}

export default App;
