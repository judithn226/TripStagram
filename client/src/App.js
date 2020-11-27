import './App.css';
import SignUp from './Components/signup'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import navbar from './Components/header'

function App() {
  return(
  <Router>
  <div>
  <navbar>
  <Route exact path = "/signup" component={(props)=><SignUp {...props}/>} />
  </navbar>
  </div>
  </Router>

  );}

export default App;
