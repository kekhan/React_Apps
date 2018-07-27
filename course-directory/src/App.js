import React, { Component } from 'react';
import Header from './Header';
import Courses from './Courses';
import Home from './Home';
import About from './About';
import axios from 'axios';
import './App.css';
import {
  Route,
  BrowserRouter
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/courses" component={Courses} />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
