import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../sass/header/Header.css";
import I1 from "../../../public/Logo.jpeg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <header className="head">
        <nav className="navbar navbar-expand-lg d-flex">
          <div className="container-fluid gap-5">
            <img className="logoImg" src={I1} alt="" />
            <div className="head-txt">
              <Link className="head-link" to="/">
                <p>Portfolio</p>
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link className="head-link" to="/About">
                    <p>About</p>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
