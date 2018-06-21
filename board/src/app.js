
function Application(props){
	return (
		<div className="application">

		  <div className="board-header">
		      <h1>{props.title}</h1>
		   </div>

		  <div className="players">
	
		    <div className="player"> 
		          <div className="player-name">
		              <p>Kevin</p>
		          </div>
		          <div classname="player-score">
		              <div className="counter">
		                <button className="decrement"> _ </button>
		                <div className="counter-score"> 60 </div>
		                <button className="increment"> + </button>
		              </div>
		          </div>
		          
		      </div>

		      <div className="player"> 
		          <div className="player-name">
		              <p>jon</p>
		          </div>
		          <div classname="player-score">
		              <div className="counter">
		                <button className="decrement"> _ </button>
		                <div className="counter-score"> 54 </div>
		                <button className="increment"> + </button>
		              </div>
		          </div>
		          
		      </div>

		      <div className="player"> 
		          <div className="player-name">
		              <p>Marley</p>
		          </div>
		          <div classname="player-score">
		              <div className="counter">
		                <button className="decrement"> _ </button>
		                <div className="counter-score"> 62 </div>
		                <button className="increment"> + </button>
		              </div>
		          </div>
		          
		      </div>

		  </div>

		</div>
		)
}

Application.propTypes = {
	title: React.PropTypes.string.isRequired,
};

ReactDOM.render(<Application title="Score Voard" />, document.getElementById('root'));