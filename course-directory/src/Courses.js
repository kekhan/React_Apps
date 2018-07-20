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
      console.log(this.state.courses)
      return (
        <div><h1>Courses</h1></div>
      );
 }
}


export default Courses;
