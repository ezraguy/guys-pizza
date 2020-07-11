import React, { Component } from "react";
import "../scss/modal.scss";
import "animate.css";
class buildModal extends Component {
  constructor(props) {
    super(props);
    this.state = { build: this.props.showModal };
  }
  render() {
    return <div className=" animate__backInDown buildModal ">test</div>;
  }
}

export default buildModal;
