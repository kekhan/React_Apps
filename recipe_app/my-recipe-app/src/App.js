import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Recipe Journal</h1>
        </div>
        <div className="intro-content">

        </div>
        <div className="main-content">
          <div className="recipe">
           <div className="recipe-name">
           </div>
           <div className="recipe-ingredients"></div>
           <div className="recipe-instructions"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
