import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* -------------------- */}
         
            <nav  className="navbar navbar-expand-lg bg-dark">
  <div  className="container-fluid new-side">
    <Link  className="navbar-brand fw-bold brand-color" to="#">POPULAR QUIZ</Link>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNav">
      <ul  className="navbar-nav ms-auto">
        <li  className="nav-item">
         <Link  className="nav-link text-white" aria-current="page" to="/home">Home</Link>
        </li>
        <li  className="nav-item">
         <Link  className="nav-link text-white" to="/Statictis">Statictis</Link>
        </li>
        <li  className="nav-item">
         <Link  className="nav-link text-white" to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            {/* ---------------- */}

        </div>
    );
};

export default Header;