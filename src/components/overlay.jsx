import React, { Component } from "react";
import "../scss/overlay.scss";
import pizzaLoader from "../images/pizzaLoader.png";

class overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="overlay">
        <img src={pizzaLoader} alt="" />
        <br />
        <p className="overlay-message">Putting the pizza in the oven...</p>
      </div>
    );
  }
}
export default overlay;
