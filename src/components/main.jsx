import React, { Component } from "react";
import "../scss/main.scss";
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
          name: "Make your own!",
          price: "15$",
          src: pizza1,
          desc: " build a master piece",
          className: "main-pizza ",
          aosAnimationDelay: 100,
        },
        {
          id: 2,
          name: "Uncle john",
          price: "15$",
          src: pizza1,
          desc: "black olives mushrooms and red bell peppers",
          className: "main-pizza",
          aosAnimationDelay: 200,
        },
        {
          id: 3,
          name: "margarita",
          price: "15$",
          src: pizza1,
          desc:
            " all-time classic fresh tomato sauce and sizzling mozzarella cheese ",
          className: "main-pizza ",
          aosAnimationDelay: 300,
        },
        {
          id: 4,
          name: "margarita",
          price: "15$",
          src: pizza1,
          desc:
            " all-time classic fresh tomato sauce and sizzling mozzarella cheese ",
          className: "main-pizza",
          aosAnimationDelay: 400,
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
        <div className="pizzas container-fluid">
          <div className="row">
            {pizza.map((pizza) => {
              return (
                <div
                  key={pizza.id}
                  className="col-xl-3 col-md-4 pizza-card "
                  data-aos="fade-right"
                  data-aos-delay={pizza.aosAnimationDelay}
                >
                  <div className="card mx-auto p-0 my-2 ">
                    <img
                      key={pizza.id}
                      src={pizza.src}
                      className={pizza.className + "card-img-top"}
                      alt="pizza"
                    />
                    <div className="card-body p-0">
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
