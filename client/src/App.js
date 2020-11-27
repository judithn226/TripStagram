import './App.css';
import SignUp from './Components/signup'
import LogIn from './Components/login'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Header from './Components/Header'

function App() {
  return(
  <Router>
  <div>
  <Header />
  <Route exact path = "/signup" component={(props)=><SignUp {...props}/>} />
  <Route exact path = "/login" component={(props)=><LogIn {...props}/>} />
  </div>
  </Router>

  );}

export default App;
