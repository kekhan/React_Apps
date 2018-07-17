import React, { Component } from 'react';
import UserList from './UserList';
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
          <h1>GitHub Leader Board</h1>
        </div>
        <div className="Users">
            <UserList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
