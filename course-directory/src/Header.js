//create the component for recip list
import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import './App.css';

const Header = props =>
<header>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/About">About</Link></li>
    <li><Link to="/Courses">Courses</Link></li>
  </ul>
</header>


Header.propTypes ={
  courses: PropTypes.array,
};

export default Header;
