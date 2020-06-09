import React from 'react';

const User = (props) => {
    return (
      <div>
        <button onClick={(e) => props.handleHomeButton(e)}>Home</button> <br/><br/>
        <h3>Seller Profile</h3>
        <img src={props.selectedUser.profPicURL}/> <br/>
        <span>{props.selectedUser.userName}</span> <br/>
        <span>{props.selectedUser.city}</span>
      </div>
    )
}

// User profile

// user picture
// user name
// Rate user
// owner average rating
// owner satisfaction %
// owner response rate %

// all items by owner
// all reviews of owner

export default User;