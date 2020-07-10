import React, { Component } from "react";
import "../css/main.css";
import pizza1 from "../images/pizza1.png";
import pizzavid from "../videos/pizzaVid.mp4";
import { ReactComponent as CartSvg } from "../svg/cart.svg";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: [
        {
          id: 1,
          name: "Uncle john",
          price: "15$",
          src: pizza1,
          desc: "black olives mushrooms and red bell peppers",
          className: "main-pizza",
        },
        {
          id: 2,
          name: "margarita",
          price: "15$",
          src: pizza1,
          desc:
            " all-time classic fresh tomato sauce and sizzling mozzarella cheese ",
          className: "main-pizza",
        },
        {
          id: 3,
          name: "margarita",
          price: "15$",
          src: pizza1,
          desc:
            " all-time classic fresh tomato sauce and sizzling mozzarella cheese ",
          className: "main-pizza ",
        },
        {
          id: 4,
          name: "margarita",
          price: "15$",
          src: pizza1,
          desc:
            " all-time classic fresh tomato sauce and sizzling mozzarella cheese ",
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
            muted={true}
            playsinline
            loop
            autoPlay
            playsInline
            src={pizzavid}
            className="pizza-video"
          ></video>
        </div>

        <div className="container pizza-header text-center">
          <p>Order one of our amazing pizza's Today!</p>
        </div>
        <div className="pizzas container-fluid  ">
          <div className="row">
            {pizza.map((pizza) => {
              return (
                <div className=" col-xl-3 col-lg-4 col-md-6  pizza-card ">
                  <div
                    className="card  mx-auto p-0 m-3"
                    style={{ width: "19rem" }}
                  >
                    <img
                      key={pizza.id}
                      src={pizza.src}
                      className={pizza.className + "card-img-top"}
                      alt="pizza"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{pizza.name}</h5>
                      <p className="card-text">{pizza.desc}</p>
                      <a href="#a" className="btn btn-primary addToCart">
                        Add to cart <CartSvg className="cart" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
