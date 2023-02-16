
import React from 'react';

// Estilização
import '/src/components/layout/NavBar/NavBar.css';

import { Link } from 'react-router-dom';

function Navbar (){
  return (

<nav id='navBack' className="navbar navbar-expand-lg">
  <a className="navbar-brand " href="#"><img src="src/assets/logo.svg" alt="" className="ml-2 img-fluid2"/></a>
    <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarText"
    aria-controls="navbarText"
    aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    
    <div class="collapse navbar-collapse offset-md-0  " id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        
        <li class="nav-item">
          <Link class="nav-link" to="/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/MODELOS">MODELOS</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link active" to="/LifeStyle">LIFESTYLE</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Moshelim">MOLSHEIM</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          BUGATTI UNIVERSO
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/Champagne">Champagne</Link></li>
            <li><Link class="dropdown-item" to="/Relogio">Rélogio</Link></li>
          </ul>
        </li>
      </ul>
    </div> 
</nav>
  ); 
}

export default Navbar;