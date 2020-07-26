import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cart from './components/cart'
import Overlay from './components/overlay';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  constructor(props) {
    super(props)
    Aos.init();
  }


  render() {
    return (
      <div className="App" >
        <ToastContainer />
        <Overlay />
        <Cart />
        <Header />
        <Main />
      </div>
    )
  }


};


export default App;
