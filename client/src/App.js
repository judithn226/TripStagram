import "./App.css";
import Header from "./Components/Header";
// import Home from './Components/Home';
import SignUp from "./Components/Signup";
import LogIn from "./Components/Login";
import Places from "./Components/Places";

import { Route, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      {/* <Route exact path="/" component={Home} /> */ }

      <Route exact path="/Signup" component={SignUp} />

      <Route exact path="/Login" component={LogIn} />
      <Route exact path="/Places" component={Places} />

    </div>
  );
}

export default App;
