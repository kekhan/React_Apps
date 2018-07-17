import React, { Component } from 'react';
import propTypes from 'prop-types';
import RecipeList from './RecipeList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './App.css';

class NavBar extends React.Component {
  state = {};

  render() {

    return (
      <div className='root'>
        <AppBar style={{background:'white'}}>
          <Toolbar>
            <Typography variant="title"  className='flex'>
              Recipe Journal
            </Typography>
            <Button>ABOUT</Button>
            <Button>HELP</Button>

            <div>
              <IconButton>
                <AccountCircle className='login' />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

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
        <NavBar />
        <h1>1</h1>
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
