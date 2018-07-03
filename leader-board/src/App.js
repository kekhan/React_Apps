import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Camper Leader Board</h1>
        </div>
        <div className="Users">
          <div className="user">
            <div className="user-name">USER123</div>
            <div className="user-score">989</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
