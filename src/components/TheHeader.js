import React from "react";
import { Link } from "gatsby";
// import NavLinks from "./NavLinks";
import Logo from "../assets/img/Logo.svg";
import Burger from "../assets/img/burger.svg";

const TheHeader = () => {
  return (
    <header>
      <ul>
        <li className="hide-on-laptop">
          <img src={Burger} alt="MENU" />
        </li>
        <li className="hide-on-mobile">
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className="hide-on-mobile">
          <Link to="/products" activeClassName="active">
            Products
          </Link>
        </li>
        <li>
          <img src={Logo} alt="BEJAMAS" height="41" />
        </li>
        <li className="hide-on-mobile">
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
        <li className="hide-on-mobile">
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default TheHeader;
