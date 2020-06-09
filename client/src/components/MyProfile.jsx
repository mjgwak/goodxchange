import React from 'react';

const MyProfile = (props) => {
    return (
      <div>
        <button onClick={(e) => props.handleHomeButton(e)}>Home</button> <br/><br/>
        <h3>Your Profile</h3>
        <img src="https://mvpminjiprofpic.s3-us-west-1.amazonaws.com/profilePic.png"/> <br/>
        <span>Minji Gwak</span> <br/>
        <span>Emeryville</span>
        <span>Rate: 7.8</span>
      </div>
    )
}

// User profile

// user picture
// user name
// Rate user
// owner average rating

// all items by owner
// all reviews of owner

export default MyProfile;