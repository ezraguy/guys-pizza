import React, { Component } from "react";
import "../css/main.css";
import Slice from "../images/pizzaSlice.png";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: [
        { src: Slice, id: 1, className: "deg-0" },
        { src: Slice, id: 2, className: "deg-45" },
        { src: Slice, id: 3, className: "deg-90" },
        { src: Slice, id: 4, className: "deg-135" },
        { src: Slice, id: 5, className: "deg-180" },
        { src: Slice, id: 6, className: "deg-225" },
        { src: Slice, id: 7, className: "deg-270" },
        { src: Slice, id: 8, className: "deg-315" },
      ],
    };
  }
  render() {
    let { pizza } = this.state;
    return (
      <div className="container-fluid p-0 main">
        <div className="pizza ">
          {pizza.map((slice) => {
            return (
              <img
                className={slice.className + " slice "}
                key={slice.id}
                src={slice.src}
                alt=""
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
