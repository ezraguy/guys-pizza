import React, { Component } from "react";
import Olives from "../images/olives.png";
import Bacon from "../images/bacon.png";
import Mush from "../images/mush.png";
import Pep from "../images/pep.png";
import _ from "lodash";
import "../scss/modal.scss";
import "animate.css";
import MarPizza from "../images/mar-pizza.png";
class buildModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toppingsArr: [],
      showTopping: false,
      toppings: [
        { id: 1, name: "Olives", src: Olives },
        { id: 2, name: "mushrooms", src: Mush },
        { id: 3, name: "bacon", src: Bacon },
        { id: 4, name: "pepperoni", src: Pep },
      ],
    };
  }

  renderToppings = (name) => {
    let toppingsArr = [...this.state.toppingsArr];
    let topping = _.find(this.state.toppings, (o) => {
      return o.name === name;
    });
    toppingsArr.push(topping);
    this.setState({ showTopping: true, toppingsArr });
  };

  render() {
    return (
      <div className="modal-wrap">
        <div className="buildModal animate__fadeInDown">
          <div className="toppings">
            {this.state.toppings.map((topping) => {
              return (
                <div
                  key={topping.id}
                  className="toppingName"
                  value={topping.src}
                  onClick={() => this.renderToppings(topping.name)}
                >
                  {topping.name}
                </div>
              );
            })}
          </div>
          <div onClick={this.props.closeModal} className="exitBtn">
            X
          </div>
          <h3 className="display-4">Create your very own master piece!</h3>
          <div className="buildPizza">
            {this.state.toppingsArr.map((top) => {
              return (
                <img
                  key={top.id}
                  className="toppingImg animate__fadeInDownBig "
                  src={top.src}
                  alt="topping"
                />
              );
            })}

            <img className="pizza-img" src={MarPizza} alt="" />
          </div>
          <div className="pizza-size">
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
        </div>
      </div>
    );
  }
}

export default buildModal;
