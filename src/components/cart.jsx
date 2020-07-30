import React, { Component } from "react";
import "../scss/cart.scss";
import { connect } from "react-redux";
import { ReactComponent as Xsvg } from "../svg/x.svg";
import { ReactComponent as RemoveSvg } from "../svg/remove.svg";
import Swal from "sweetalert2";
import { swalConfig } from "../config.json";
import "animate.css";
import { removePizza, clearPizzas } from "../actions/pizzaActions";
import { handleCart } from "../actions/cartActions";
import Overlay from "./overlay";
class Cart extends Component {
  state = {
    total: 0,
    showOverlay: false,
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
    this.setState({ showOverlay: true });
    this.props.clearPizzas();
    setTimeout(() => {
      this.setState({ showOverlay: false });
      Swal.fire(swalConfig);
    }, 3500);
  };

  closeCart = () => {
    this.props.handleCart(false);
  };
  render() {
    const showCart = this.props.showCart;
    return (
      <>
        {showCart && (
          <div className="cart container animate__bounceInDown ">
            <Xsvg className="x-icon" onClick={this.closeCart} />
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
                  <RemoveSvg
                    className="remove-icon"
                    onClick={() => this.handleDelete(index)}
                  />
                  <hr />
                </div>
              );
            })}
            {this.props.pizzasInCart.length > 0 && (
              <div className="totalOrder my-2">
                <span className="total">Total:{this.state.total}$</span>
                <button
                  className="btn  submit-order"
                  onClick={this.handleOrder}
                >
                  Submit Order
                  <span role="img" className=" pizza-icon" aria-label="pizza">
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
        {this.state.showOverlay && <Overlay />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizzasInCart: state.pizzasInCart,
    showCart: state.showCart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removePizza: (index) => {
      dispatch(removePizza(index));
    },
    clearPizzas: () => {
      dispatch(clearPizzas());
    },
    handleCart: (showCart) => {
      dispatch(handleCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
