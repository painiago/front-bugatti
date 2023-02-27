
import React from 'react';

// Estilização
import '../../layout/NavBar/NavBar.css';

import { Link } from 'react-router-dom';

function Navbar (){
  return (

<nav id='navBack' className="navbar navbar-expand-lg">
  <a className="navbar-brand " href="#"><img src="src/assets/logo.svg" alt="" className="ml-2 img-fluid2"/></a>
    <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarText"
    aria-controls="navbarText"
    aria-expanded="false"
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    
    <div className="collapse navbar-collapse offset-md-0  " id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        
        <li className="nav-item">
          <Link className="nav-link" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/MODELOS">MODELOS</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link active" to="/LifeStyle">LIFESTYLE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Moshelim">MOLSHEIM</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          BUGATTI UNIVERSO
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/Champagne">Champagne</Link></li>
            <li><Link className="dropdown-item" to="/Relogio">Rélogio</Link></li>
          </ul>
        </li>
      </ul>
    </div> 
</nav>
  ); 
}

export default Navbar;