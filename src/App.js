import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import LoginRender from "./components/login/LoginRender";
import HomePage from "./components/homePage/HomePage";
import {BrowserRouter, Route , Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/loginRegister" component={LoginRender} />
          <Route exact path="/loged" component={Dashboard} />
        </Switch>  
      </BrowserRouter>
    </div>
  )
}     


export default App;
