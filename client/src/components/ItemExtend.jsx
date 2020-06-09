import React from 'react';
import User from './User.jsx';

// once an item is clicked from the itemslist
const ItemExtend = (props) => {
  const selectedItem = props.itemslist;
  const userid = selectedItem.userId;
  return (
    <div>
      <div>
        <button type="button" onClick={(e) => {props.handleClick(e)}}>Home</button><br/><br/>
      </div>
      <h3>Item</h3>
      <div><img src={selectedItem.itemPic}/></div>
      <div onClick={() => {
        props.userClick(userid)}}>
        <span class="userPicture"><img src={selectedItem.profPicURL}/></span>
        <span>{selectedItem.userName}</span>
        <span>   |   Rating: 6.7 / 10</span><br/>
        <span>{selectedItem.city}</span>
      </div>
      <div>
        <h3>{selectedItem.title}</h3>
        <span>{selectedItem.category}</span>
        <span>   |   Uploaded 2 min ago</span><br/><br/>
        <span>{selectedItem.description}</span><br/><br/>
        <span>Chat {selectedItem.numChats}</span>
        <span>   |   Likes {selectedItem.numLikes}</span>
        <span>   |   Views {selectedItem.numViews}</span><br/>
      </div>
      <button>LIKE</button>
      <span>${selectedItem.price}</span>
      <button>Contact Seller</button>
    </div>
  )
}

export default ItemExtend;

// location: geo location (google api) < --- stretch
