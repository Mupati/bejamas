import React from "react";
import Logo from "../assets/img/footer-logo.svg";

const TheFooter = () => {
  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt="BEJAMAS" />
      </div>
      <p>All rights reserved &copy;</p>
    </footer>
  );
};

export default TheFooter;
