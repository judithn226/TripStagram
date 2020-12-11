import "./App.css";
import Header from "./Components/header";
import Home from "./Components/Home";
import SignUp from "./Components/signup";
import LogIn from "./Components/login";
import Places from "./Components/places";


import { Route } from "react-router-dom";

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

// // Redirect to search results component upon submit of search terms from search bar embedded in a global navbar
// export default class Search extends Component {
//   constructor () {
//     super();
//     this.state = {
//       fireRedirect: false
//     }
//   }
  
//   componentWillRecieveProps(nextProps) {
//     this.setState({ fireRedirect: false })
//   }
  
//   submitForm = (e) => {
//     e.preventDefault()
//     this.setState({ fireRedirect: true })
//   }
  
//   render () {
//     const { fireRedirect } = this.state
    
//     return (
//       <div>
//         <form onSubmit={this.submitForm}>
//           <button type="submit">Submit</button>
//         </form>
//         {fireRedirect && (
//           <Redirect to='/search-results'/>
//         )}
//       </div>
//     )
    
//   }
// }
export default App;
