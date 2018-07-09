import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
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

ReactDOM.render(<App initialRecipes={RECIPES}/>, document.getElementById('root'));
registerServiceWorker();
