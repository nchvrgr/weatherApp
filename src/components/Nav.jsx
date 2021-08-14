import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="navv">

      <div>
        <Link style={{textDecoration: 'none'}} to="/">
        <h1 id="titulo">Weather App</h1>
      </Link>
      </div>
      <div className="flexButtons">
        <Link style={{textDecoration: 'none'}} to='/'>
          <span className="a">Home</span>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/cards'>
          <span className="a">Cards</span>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/about'>
          <span className="a">About</span>
        </Link>
      </div>
     



    </div>
  );
};

export default Nav;
