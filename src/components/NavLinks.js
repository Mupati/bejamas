import React from "react";
import { Link } from "gatsby";

const NavLinks = ({ links }) => (
  <ul>
    {links.map((link, index) => (
      <li key={index}>
        <Link to={link.path}>{link.name}</Link>
      </li>
    ))}
  </ul>
);

export default NavLinks;
