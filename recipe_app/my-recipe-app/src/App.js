import React, { Component } from 'react';

import './App.css';
const RECIPES =[
  {
    name: "waffles",
    ingredients: ["1 egg","milk","flour"],
    instructions: ["add ingredients to bowl and mix","heat iron to 450","pour 1/2 cup into iron"],
  },
  {
    name: "PanCake",
    ingredients: ["1 egg","milk","flour"],
    instructions: ["add ingredients to bowl and mix","heat iron to 450","pour 1/2 cup into iron"],
  }
]
function Header(props){
  return(
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}
Header.propTypes ={
  title: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
}

function ListOfRecipes(props){
  return(
    <div className="ordered-list">
      <ol>
        <li onClick= {function(){props.onChange()}}>
          {props.name}
        </li>
      </ol>
    </div>
  )
}
ListOfRecipes.propTypes ={
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

function Recipe(props){
  return(
    <div className="recipe">
      <div className="recipe-name">
        <h2>{props.name}</h2>
      </div>

    </div>
  );
}
Recipe.propTypes ={
  name: React.PropTypes.string.isRequired,
  ingredients: React.PropTypes.string.isRequired,
  instructions:  React.PropTypes.string.isRequired,
}

class App extends Component {
  propTypes:{
    title: React.PropTypes.string.isRequired,
    initialRecipes: PropTypes.array,
  }

  getDefaultProps: function(){
    return{
      title: "Recipe Journal",
    }
  }

  getInitialState: function(){
    return{
      recipes: this.props.initialRecipes,
    }
  }
  getListOfIngredients: function(){
    let list =[];
    for(let i=0;i<this.state.recipes.length;i++){
      let children =[];
      for(let j=0; j<this.state.recipes[i].ingredients.length; j++ ){
        children.push(<li>{this.state.recipes[i].ingredients[j]}</li>)
      }
      for(let j=0; j<this.state.recipes[i].instructions.length; j++ ){
        children.push(<li>{this.state.recipes[i].instructions[j]}</li>)
      }
      list.push(<ul>{children}</ul>)
    }
    return list;
  }
  getListOfInstructions: function(){
    // need to get index of recipe click
    let list =[];
    for(let i=0;i<this.state.recipes.length;i++){
      let children =[];
      for(let j=0; j<this.state.recipes[i].instructions.length; j++ ){
        children.push(<li>{this.state.recipes[i].instructions[j]}</li>)
      }
      list.push(<ul>{children}</ul>)
    }
    return list;
  }
  render() {
    return (
      <div className="App">
        <Header title={this.props.title}/>
        {
          this.state.recipes.map(function(recipe, index){
            return(
              <ListOfRecipes name={recipe.name} />
            )
          })
        }
          <div className="recipes">
          {
            this.state.recipes.map(function(recipe, index){
              return(
                <Recipe name={recipe.name} />
              )
            })
          }
          </div>
          < div className="ingredients">
            <p>Ingredients</p>
            {this.getListOfIngredients()}
          </div>
          < div className="instructions">
            <p>Instructions</p>
            {this.getListOfInstructions()}
          </div>
      </div>
    );
  }
}

export default App;
