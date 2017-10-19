import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <header className="flex">
    <div className="logo">
      <Link to={`/`}>
      <img alt="logo" src="/logo.png" />
      </Link>
    </div>
    <nav className="flex">
      <div className="nav-item">
        <Link to={`/campuses/`}>Campuses</Link>
      </div>
      <div className="nav-item">
        <Link to={`/students/`}>Students</Link>
      </div>
    </nav>
  </header>
  )
}

export default Navbar;
