import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
class Courses extends Component {
    state ={
      courses:[]
    }
    componentDidMount(){
      axios.get('https://www.udacity.com/public-api/v0/courses')
      .then(response => {
        this.setState({courses:response.data.courses})
      })
      .catch(error => {
        console.log('error', error);
      })
    }

    render() {
      var array = [];
      var course_len =0;
      for( var i=0; i< this.state.courses.length;i++){
        course_len++;
        if (this.state.courses[i].image.length > 0 && course_len <=10){

          var object =  <div>
            <ul key={i}>

              <li>
               <img src={this.state.courses[i].image} alt="Icon of course:" />
               <a href={this.state.courses[i].homepage}>{this.state.courses[i].title}</a>
              </li>

            </ul>
            </div>;
            array.push(object);

        }
      }
      return(
        <div>
          {array}
        </div>
      )
}
}


export default Courses;
