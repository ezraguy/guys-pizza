import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Overlay from './components/overlay';

class App extends Component {
  state = { isloaded: false }

  // componentDidMount = () => {
  //   let { isloaded } = this.state;
  //   isloaded = true;
  //   this.setState({ isloaded })
  // }
  render() {
    return (
      <div className="App" >
        <Overlay />
        <Header />
        <Main />
      </div>
    )
  };
}

export default App;
