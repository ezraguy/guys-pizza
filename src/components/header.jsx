import React from "react";
import "../scss/header.scss";
import { ReactComponent as CartSvg } from "../svg/cart.svg";

const Header = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <nav id="header" className="navbar navbar-default  ">
        <div className=" mx-auto order-0">
          <p className="navbar-brand mx-auto header-title">Poy's Pizza</p>
        </div>
        <CartSvg onClick={() => console.log("click")} className="cart" />
      </nav>
    </div>
  );
};

export default Header;
