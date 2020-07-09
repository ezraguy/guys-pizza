import React, { Component } from "react";
import "../css/main.css";
import pizza1 from "../images/pizza1.png";
import pizzavid from "../videos/pizzaVid.mp4";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: [
        {
          id: 1,
          name: "margarita",
          price: "15$",
          src: pizza1,
          className: "main-pizza",
        },
      ],
    };
  }

  render() {
    const { pizza } = this.state;

    return (
      <div className="container-fluid p-0 main">
        <div className="container-fluid p-0">
          <video
            autoPlay
            muted
            className="pizza-video"
            loop
            src={pizzavid}
          ></video>
        </div>

        <div className="container pizza-header">
          <p>Order one of our amazing pizza's Today!</p>
        </div>
        <div className="pizza mx-auto">
          {pizza.map((pizza) => {
            return (
              <img
                key={pizza.id}
                src={pizza.src}
                className={pizza.className}
                alt="pizza"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
