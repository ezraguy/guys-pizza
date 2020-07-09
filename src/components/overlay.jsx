import React, { Component } from "react";
import "../css/overlay.css";
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
      </div>
    );
  }
}
export default overlay;
