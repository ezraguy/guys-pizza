import React, { Component } from "react";
import Olives from "../images/olives.png";
import Bacon from "../images/bacon.png";
import Mush from "../images/mush.png";
import Pep from "../images/pep.png";
import _ from "lodash";
import "../scss/modal.scss";
import "animate.css";
import { ReactComponent as CartSvg } from "../svg/cart.svg";
import MarPizza from "../images/mar-pizza.png";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { toastConfig } from "../config.json";

class buildModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toppingsArr: [],
      showTopping: false,
      toppings: [
        { id: 1, name: "Olives", src: Olives },
        { id: 2, name: "Mushrooms", src: Mush },
        { id: 3, name: "Bacon", src: Bacon },
        { id: 4, name: "Pepperoni", src: Pep },
      ],
      toppingsCopy: [],
    };
    this.state.toppingsCopy = [...this.state.toppings];
  }

  componentDidMount = () => {
    this.state.toppings.forEach((picture) => {
      const img = new Image();
      img.src = picture.src;
    });
  };

  renderToppings = (name, id) => {
    this.hideBtn(id);
    let toppingsArr = [...this.state.toppingsArr];
    let topping = _.find(this.state.toppings, (o) => {
      return o.name === name;
    });
    toppingsArr.push(topping);
    this.setState({ showTopping: true, toppingsArr });
  };

  hideBtn = (id) => {
    let toppings = [...this.state.toppings];
    toppings = _.filter(toppings, function (o) {
      return o.id !== id;
    });
    this.setState({ toppings });
  };

  handleClick = (topping) => {
    const toppingsArr = [...this.state.toppingsArr];
    let toppings = " ";
    for (let i = 0; i < toppingsArr.length; i++) {
      toppings += toppingsArr[i].name + " ";
    }

    const customPizza = {
      id: 1,
      name: "Make it your own",
      toppings: [toppings],
      price: 35,
    };
    this.props.addPizzaToCart(customPizza);
    this.setState({ toppingsArr });
    toast(" 🍕  was added to the cart ", toastConfig);
  };

  handleClear = () => {
    let toppingsArr = [...this.state.toppingsArr];
    let toppings = [...this.state.toppings];
    toppingsArr = [];
    toppings = [...this.state.toppingsCopy];
    this.setState({ toppingsArr, toppings });
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
                  onClick={() => this.renderToppings(topping.name, topping.id)}
                >
                  {topping.name}
                </div>
              );
            })}
          </div>
          <div onClick={this.props.closeModal} className="exitBtn">
            X
          </div>
          <div className="modal-title">Create your very own master piece!</div>
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
          <button onClick={() => this.handleClick()} className="btn addToCart ">
            Add to cart <CartSvg className="cartIcon" />
          </button>
          <button onClick={this.handleClear} className="btn btn-secondary">
            Clear pizza
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPizzaToCart: (customPizza) => {
      dispatch({ type: "ADD_PIZZA", pizza: customPizza });
    },
  };
};

export default connect(null, mapDispatchToProps)(buildModal);
