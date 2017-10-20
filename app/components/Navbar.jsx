import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <header>
    <div>
      <Link to={`/`}>
      <img alt="logo" src="/logo.png" />
      </Link>
    </div>
    <nav>
      <div>
        <Link to={`/campuses/`}>Campuses</Link>
      </div>
      <div>
        <Link to={`/students/`}>Students</Link>
      </div>
    </nav>
  </header>
  )
}

export default Navbar;
