import React from "react";
import "../css/header.css";
const Header = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <nav id="header" className="navbar navbar-default  ">
        <div className=" mx-auto order-0">
          <a href="#poyPizza" className="navbar-brand mx-auto header-title">
            Poy's Pizza
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
