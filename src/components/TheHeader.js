import React from "react";
import { Link } from "gatsby";
// import NavLinks from "./NavLinks";
import Logo from "../assets/img/Logo.svg";

const TheHeader = () => {
  // const leftLinks = [
  //   {
  //     path: "/",
  //     name: "Home",
  //   },
  //   {
  //     path: "/products",
  //     name: "Products",
  //   },
  // ];
  // const rightLinks = [
  //   {
  //     path: "/blog",
  //     name: "Blog",
  //   },
  //   {
  //     path: "/contact",
  //     name: "Contact",
  //   },
  // ];
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/">
        <img src={Logo} alt="BEJAMAS" />
      </Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </header>
  );
};

export default TheHeader;
