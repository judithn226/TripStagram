import {NavLink} from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" href="/">Trippin'</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <NavLink activeClassName= "active" to="/">Home</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/places">Places</NavLink>
      </div>
    </div>
  </nav>
  );
}

export default Header;