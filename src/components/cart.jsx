import React, { Component } from "react";
import "../scss/cart.scss";
import { connect } from "react-redux";
import { ReactComponent as Xsvg } from "../svg/x.svg";
import Swal from "sweetalert2";
import { swalConfig } from "../config.json";
class Cart extends Component {
  state = {
    total: 0,
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.pizzasInCart !== prevProps.pizzasInCart) {
      let total = 0;
      for (let i = 0; i < this.props.pizzasInCart.length; i++) {
        total += Number(this.props.pizzasInCart[i].price);
      }
      this.setState({ total });
    }
  };

  handleDelete = (index) => {
    this.props.removePizza(index);
  };

  handleOrder = () => {
    Swal.fire(swalConfig);
    this.props.clearPizzas();
  };
  render() {
    const isopen = this.props.isopen;
    return (
      <>
        {isopen && (
          <div className="cart container">
            {this.props.pizzasInCart.map((pizza, index) => {
              return (
                <div key={index} className="cart-item">
                  <span>{pizza.name}</span>
                  <span className="price">{pizza.price}$</span>
                  {pizza.toppings && (
                    <span className=" text-muted toppings">
                      {pizza.toppings}
                    </span>
                  )}
                  <Xsvg
                    className="x-icon"
                    onClick={() => this.handleDelete(index)}
                  />
                  <hr />
                </div>
              );
            })}
            {this.props.pizzasInCart.length > 0 && (
              <div className="totalOrder">
                <span className="total">Total:{this.state.total}$</span>
                <button
                  className="btn  submit-order"
                  onClick={this.handleOrder}
                >
                  Submit Order
                  <span role="img" className=" pizza-icon">
                    {" "}
                    🍕
                  </span>
                </button>
              </div>
            )}
            {this.props.pizzasInCart.length === 0 && (
              <p className="ml-4">There is nothing here!</p>
            )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizzasInCart: state.pizzasInCart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removePizza: (index) => {
      dispatch({ type: "REMOVE_PIZZA", index: index });
    },
    clearPizzas: () => {
      dispatch({ type: "CLEAR_PIZZAS" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
