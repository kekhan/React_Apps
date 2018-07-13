import React, { Component } from 'react';
import propTypes from 'prop-types';

import './App.css';
import RecipeList from './RecipeList';
class App extends Component {
  state = {
    recipes:
    [
      {
        name:"Waffles",
        ingredients: [
          "1 egg",
          "3/4 cups milk",
        ],
        instructions:["mix ingredients in medium bowl",
        "heat iron","pour 1/4 cup batter in iron"],
      },
      {
        name:"Chicken Soup",
        ingredients: ["1 large Chicken breast","carrots","noodles","salt"],
        instructions:["cut chicken in cubes"," add salt","bowl water","4"],
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Recipe Journal</h1>
        </div>
        <div className="intro-content">
          <RecipeList recipes={this.state.recipes}/>
        </div>
        <div className="main-content">
          <div className="recipes">
          <div className="recipe">
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
