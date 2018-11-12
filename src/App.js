import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Canvas something="canvas" />
        {/* 
        Other images worth noting for pulling stargate colors from...
        https://media.giphy.com/media/mMZZZQOgFvFWU/giphy.gif,
        https://www.color-hex.com/palettes/1131.png,
        https://www.color-hex.com/palettes/16733.png */}
      </div>
    );
  }
}

export default App;
