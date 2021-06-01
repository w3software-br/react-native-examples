import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import Conversor from "./componentes/Conversor"

class App extends Component {
  render() {
    return ( // You can return only one div
      <div className="linha">
        <div className="App">
          <h3 className="title">This is just a test</h3>
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        </div>
      </div>
    );
  }
}

export default App;
