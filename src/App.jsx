import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import CustomerList from "./Customer.List";
import Contact from "./Customer.Registration";
import Details from "./Customer.Details";
import Home from "./Home";
import Navbar from "./Navbar";
import Service from "./Service";
const App =() =>{
    return (  <>
      <Navbar />
    <Switch>
      
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/about" component={CustomerList}/>
        <Route exact path="/Details"component={Details}/>
        <Redirect to ="/" />
        <Home />
        </Switch>
    </>

    );
};

export default App;