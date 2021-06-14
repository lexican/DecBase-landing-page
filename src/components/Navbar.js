import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import SideNavBar from "./Sidebar";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" id="header">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo"></img>
        </Link>
        <SideNavBar />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Project
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link btn login" to="/">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn sign-up" to="/">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
