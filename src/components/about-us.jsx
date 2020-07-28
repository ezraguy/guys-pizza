import React, { Component } from "react";
import "../scss/about-us.scss";
import Swal from "sweetalert2";
import { ReactComponent as FacebookSvg } from "../svg/facebook.svg";
import { ReactComponent as InstagramSvg } from "../svg/instagram.svg";
class NewsLetter extends Component {
  state = { email: "" };

  handleClick = () => {
    const { email } = this.state;
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (reg.test(email))
      Swal.fire({
        icon: "success",
        title: "Thank you",
        text: "soon you will receive awesome deals and discounts!",
      });
    else
      Swal.fire({
        icon: "error",
        title: "whoops...",
        text: "this is not a valid email",
      });
  };
  handleChanege = (e) => {
    let { email } = this.state;
    email = e.target.value;
    this.setState({ email });
  };
  render() {
    return (
      <div className="fatherDiv ">
        <div className="row mainRow">
          <div className="aboutUsWrap col-lg-6 col-12 ">
            <div className="aboutUs  ">
              <div data-aos="fade-right" className="ourStory container ">
                <p className="title">
                  Guy's Pizza
                  <span role="img" aria-label="pizza">
                    {" "}
                    🍕
                  </span>
                </p>
                <div className="text">
                  Cmon who doesn't like pizza?? at Guy's pizza, we do it
                  bestwith our secret family recipe and fresh ingredients. come
                  on down here at 123 Fake Street new york for a fresh slice
                  today!. 
                </div>
                <div className="row ">
                  <div className="container">
                    <FacebookSvg />
                    <InstagramSvg />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 newsLetterWrap ">
            <div data-aos="fade-left" className="newsLetter ">
              <div>
                <p className="title ">Never miss another sale!</p>
                <p className="subTitle">
                  Join our news letter and never miss out on promos and sales!
                </p>
                <div className="contact ">
                  <div className="input-group">
                    <input
                      onChange={(e) => this.handleChanege(e)}
                      type="text"
                      className="form-control emailInput"
                      placeholder="Email"
                      aria-label="Email"
                    />
                    <div className="input-group-append">
                      <button
                        onClick={this.handleClick}
                        className="btn sendEmail"
                      >
                        SEND
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsLetter;
