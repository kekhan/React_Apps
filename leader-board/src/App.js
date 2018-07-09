import React, { Component } from 'react';
function User(props){
  return(
    <div className="user">
      <div className="user-name">{props.name}</div>
      <div className="user-score">{props.score}</div>
    </div>
  )
}
User.propTypes ={
  name: React.PropTypes.string,
  score: React.PropTypes.number,
};
User.defaultProps = {
  name: "Person1",
  score: 23,

};
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Camper Leader Board</h1>
        </div>
        <div className="Users">
          <User />
        </div>
      </div>
    );
  }
}

export default App;
