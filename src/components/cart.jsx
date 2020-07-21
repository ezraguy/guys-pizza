import React, { Component } from "react";
import "../scss/cart.scss";
class Cart extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    const isopen = this.props.isopen;
    return <div>{isopen && <div className="cart">Im the CArt</div>}</div>;
  }
}

export default Cart;
