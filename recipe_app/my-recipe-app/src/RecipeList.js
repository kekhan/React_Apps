//create the component for recip list
import React from 'react';
import PropTypes from 'prop-types';
//import {Button} from 'react-bootstrap';
import {Well} from 'react-bootstrap';
import './App.css';

const RecipeList = props =>
  <div className="recipe-list">
    <div className="list">

      <ul className="list-box">
      {

        props.recipes.map((recipe, index) =>
        <Well>
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p>ingredients</p>
            {recipe.ingredients.map((r,index) =>
              <li key={index}>{r}</li>
            )}
            <p>instructions</p>
            {recipe.instructions.map((r,index) =>
              <li key={index}>{r}</li>

            )}
          </li>
          </Well>
        )

      }
      </ul>

    </div>
  </div>;
RecipeList.propTypes ={
  recipes: PropTypes.array,
};
export default RecipeList;
