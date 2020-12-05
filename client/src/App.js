import "./App.css";
import Header from "./Components/header";
import Home from "./Components/home";
import SignUp from "./Components/signup";
import LogIn from "./Components/login";
import Places from "./Components/places";

import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />

      <Route exact path="/Signup" component={SignUp} />

      <Route exact path="/Login" component={LogIn} />
      <Route exact path="/Places" component={Places} />
    </div>
  );
}

export default App;
