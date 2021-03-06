import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cart from './components/cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './components/about-us';
class App extends Component {
  constructor(props) {
    super(props)
    Aos.init();
  }


  render() {
    return (
      <div className="App" >
        <ToastContainer />
        <Cart />
        <Header />
        <Main />
        <AboutUs />
      </div>
    )
  }


};


export default App;
