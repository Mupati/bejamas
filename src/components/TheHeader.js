import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../assets/img/Logo.svg";
import Burger from "../assets/img/burger.svg";
import Close from "../assets/img/close.svg";

const TheHeader = () => {
  const [isMenuOpen, openMenu] = useState(false);
  return (
    <>
      <header>
        <ul>
          <li className="hide-on-laptop" onClick={() => openMenu(!isMenuOpen)}>
            <img src={isMenuOpen ? Close : Burger} alt="MENU" />
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

      {isMenuOpen && (
        <ul id="mobile-nav">
          <li>
            <Link to="/" activeClassName="mobile-active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" activeClassName="mobile-active">
              Products
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="mobile-active">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="mobile-active">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default TheHeader;
