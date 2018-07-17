import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
const clientId="lyszn9cytfoogtkiaq5j06plw2kudy";

class App extends Component {
  state = {
    users:[]
  };
  componentDidMount(){
    axios.get('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc')
      .then(response => {
        this.setState({users:response.data.items})
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <div className="Header">
          <h1>Camper Leader Board</h1>
        </div>
        <div className="Users">
          <div className="user">
            <div className="user-image">image</div>
            <div className="user-name">
              Name
            </div>
            <div className="user-score">
              Score
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
