//create the component for recip list
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const UserList = props =>
   <div>
      {
        props.users.map((user, index) =>

          <ol key={index} className="user">
            <li key={index}>
            <p>{index +1}</p>
              <img className="user-image" alt="icon github"src={user.owner.avatar_url}/>
              <p className="user-name">
                {user.owner.login}
              </p>
              <p className="user-score">
                {user.score}
              </p>

           </li>
          </ol>

      )
      }
  </div>;


UserList.propTypes ={
  users: PropTypes.array,
};

export default UserList;
