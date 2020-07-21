import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cart from './components/cart'

class App extends Component {
  constructor(props) {
    super(props)
    Aos.init();
  }
  state = {
    isCartOpen: false,
    cartitems: []
  }

  openCart = () => {
    this.setState({ isCartOpen: !this.state.isCartOpen })
  }


  render() {
    return (
      <div className="App" >
        {/* <Overlay /> */}
        <Header openCart={this.openCart} />
        <Main />
        <Cart isopen={this.state.isCartOpen} />
      </div>
    )
  }


};


export default App;
