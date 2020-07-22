import React, { Component } from "react";
import "../scss/cart.scss";
import { connect } from "react-redux";
import { ReactComponent as Xsvg } from "../svg/x.svg";

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
  render() {
    const isopen = this.props.isopen;
    return (
      <>
        {isopen && (
          <div className="cart">
            <div className="row">
              {this.props.pizzasInCart.map((pizza, index) => {
                return (
                  <div key={index} className="cart-item">
                    <span>{pizza.name}</span>
                    <span className="price">{pizza.price}$</span>
                    <Xsvg
                      className="x-icon"
                      onClick={() => this.handleDelete(index)}
                    />
                    <hr />
                  </div>
                );
              })}
              {this.props.pizzasInCart.length > 0 && (
                <p className="total">Total:{this.state.total}$</p>
              )}
              {this.props.pizzasInCart.length === 0 && (
                <p className="ml-4">There is nothing here!</p>
              )}
            </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
