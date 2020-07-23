import React, { Component } from "react";
import "../scss/main.scss";
import pizza1 from "../images/pizza1.png";
import MarPizza from "../images/mar-pizza.png";
import ExtraTopings from "../images/extra-top-pizza.png";
import PepPizza from "../images/pep-pizza.png";
import pizzavid from "../videos/pizzaVid.mp4";
import { ReactComponent as CartSvg } from "../svg/cart.svg";
import BuildModal from "./build-pizza";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { toastConfig } from "../config.json";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      pizza: [
        {
          id: 1,
          name: "Make your own!",
          price: 35,
          src: MarPizza,
          desc: " build a master piece",
          className: "main-pizza ",
          aosAnimationDelay: 100,
        },
        {
          id: 2,
          name: "Uncle john",
          price: 19,
          src: pizza1,
          desc: "black olives, mushrooms and red bell peppers",
          className: "main-pizza",
          aosAnimationDelay: 200,
        },
        {
          id: 3,
          name: "Mr.Toppings",
          price: 30,
          src: ExtraTopings,
          desc: "Bacon,halapenjo,mushrooms ,olivs and pepronnie",
          className: "main-pizza ",
          aosAnimationDelay: 300,
        },
        {
          id: 4,
          name: "1 more slice",
          price: 20,
          src: PepPizza,
          desc: "halapenjo, pepronnie with pomodoro cheese",
          className: "main-pizza",
          aosAnimationDelay: 400,
        },
      ],
      cartItems: [],
    };
  }

  handleClick = (id, pizza) => {
    let total = this.state.total;
    if (id === 1) {
      this.props.handleModal(true);
    } else {
      this.props.addPizzaToCart(pizza, this.state.total);
      this.setState({ total: total + pizza.price });

      toast(" 🍕  was added to the cart ", toastConfig);
    }
  };

  closeModal = () => {
    this.props.handleModal(false);
  };

  render() {
    const { pizza } = this.state;
    const { showModal } = this.props;
    return (
      <div className="container-fluid p-0 main">
        {showModal && <BuildModal closeModal={this.closeModal} />}
        <div className=" p-0">
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
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-8 pizza-card mx-auto "
                  data-aos="fade-right"
                  data-aos-delay={pizza.aosAnimationDelay}
                >
                  <div className="card p-0 my-2 ">
                    <img
                      key={pizza.id}
                      src={pizza.src}
                      className={pizza.className}
                      alt="pizza"
                    />
                    <div className="card-body p-0">
                      <h5 className="card-title">{pizza.name}</h5>
                      <p className="card-text">{pizza.desc}</p>

                      <button
                        onClick={() => this.handleClick(pizza.id, pizza)}
                        className="btn  addToCart"
                      >
                        Add to cart <CartSvg className="cartIcon" />
                      </button>
                      <span className="price">{pizza.price}$</span>
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

const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPizzaToCart: (pizza, total) => {
      dispatch({ type: "ADD_PIZZA", pizza: pizza, total: total });
    },
    handleModal: (showModal) => {
      dispatch({ type: "HANDLE_MODAL", showModal: showModal });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
