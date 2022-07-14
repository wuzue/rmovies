import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import './navbarstyle.css'

function Navbar() {
  return (
    <React.Fragment>
    {/* // <nav className="nav1">
    //   <ul className="main-nav">
    //     <li>
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       <a href="/blogs">Blogs</a>
    //     </li>
    //     <li>
    //       <a href="/contact">Contact</a>
    //     </li>
    //   </ul>
    // </nav> */}

    <nav className="header">
        <img className="logo1" src={require('./media/logo1.png')} />
        <ul className="main-nav">
            <li><p className="menu">Menu</p></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a className="contactButton"href="/contact">Contact Us</a></li>
            {/* <a class="cta" href="#">Contact</a>*/}
            
        </ul>
    </nav>
    <div className="overlay">
            <a className="close">&times;</a>
            <div className="overlay__content">
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">About</a>
            </div>
    </div>
    <script type="text/javascript" src="mobile.js"></script>
    </React.Fragment>
  );
}

export default Navbar;