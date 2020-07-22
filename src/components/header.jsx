import React from "react";
import "../scss/header.scss";
import { ReactComponent as CartSvg } from "../svg/cart.svg";
import { connect } from "react-redux";
import "animate.css";

const Header = ({ openCart, pizzasInCart }) => {
  return (
    <div className="container-fluid m-0 p-0">
      <nav id="header" className="navbar navbar-default  ">
        <div className=" mx-auto order-0">
          <p className="navbar-brand mx-auto header-title">Poy's Pizza</p>
        </div>
        <CartSvg onClick={() => openCart()} className="cartSvg" />
        <span className="itemsInCart animate__bounceInDown ">
          {pizzasInCart.length}
        </span>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzasInCart: state.pizzasInCart,
  };
};
export default connect(mapStateToProps)(Header);
