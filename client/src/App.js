import "./App.css";
import aboutUs from "./Components/aboutUs"
import homeWrapper from "./Components/homeWrapper";
import SignUp from "./Components/signup";
import LogIn from "./Components/login";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Search from "./Components/search";
import SearchResult from "./Components/searchResult";

function App() {
  return (
    <Router>
        <div>
       <Switch>
      <Route exact path="/searchResult" component={SearchResult}/>

      <Route exact path="/aboutUs" component={aboutUs}/>
     
      <Route exact path="/" component={homeWrapper} />

      <Route exact path="/Signup" component={SignUp} />

      <Route exact path="/Login" component={LogIn} />
      </Switch>
     
    </div>
     </Router>
  );
}

export default App;
