import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Overlay from './components/overlay';
import Aos from 'aos';
import 'aos/dist/aos.css';


class App extends Component {
  constructor(props) {
    super(props)
    Aos.init();
  }


  render() {
    return (
      <div className="App" >
        {/* <Overlay /> */}
        <Header />
        <Main />
      </div>
    )
  }


};


export default App;
