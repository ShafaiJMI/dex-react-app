import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './bootstrap.min.css';

function Nav() {
    return (
      <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-white">
      <Link className='navbar-brand' to="/"><img src="/media/logo.jpeg" className="img-fluid"  height="95" width="145" /></Link>
      <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <Link className='nav-link' to="/about">ABOUT US</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              WHAT WE DO
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className='dropdown-item' to="/project">Show All</Link></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              RESOURCES
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">MEDIA</a></li>
              <li><a className="dropdown-item" href="#">UPDATES</a></li>
              <li><a className="dropdown-item" href="#">BLOGS</a></li>
            </ul>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
  </nav>
      );
  }
  
  function Foofooter(){
    return (
      <footer className="">
    <div className="bg-dark py-3 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <p className="">To know more about our products and solutions</p>
          </div>
          <div className="col-md-3">
            <button className="btn btn-dark border rounded-0 border-secondary"><Link className='nav-link' to="/contact">GET IN TOUCH</Link></button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-dark border border-secondary border-start-0 border-end-0 py-5 text-white">
      <div className="container">
        <a href="" className="link-light">Certificates</a>
        <a href="" className="link-light">Terms & Conditions</a>
        <a href="" className="link-light">Privacy Policy</a>
        </div>
    </div>
    <div className="bg-dark py-2 text-white">
      <div className="container">
        <p>© 2022 DEXTERONIX Technologies Pvt Ltd.</p>
      </div>
    </div>
  </footer>
      );
  }

function Layout(){
    return (
        <>
        <Nav />
        <Outlet />
        <Foofooter />
        </>
    );
}

export const PageHeader = (props) => (
<section className="bg-dark bg-gradient">
<div className="text-md-center py-5 text-white">
  <h1>{props.title}</h1>
</div>
</section>
);

export default Layout;