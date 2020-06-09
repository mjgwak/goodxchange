import React from 'react';
import User from './User.jsx';
import ItemExtend from './ItemExtend.jsx';

const Item = (props) => {
    return (
      <div onClick={() => props.handleClick(props.item.itemId)}>
        {/* <img src={props.item.itemPic}/> */}
        <span>{props.item.title}</span><span>  |  {props.item.category}</span><br/>
        {/* <span>Uploaded min ago</span><br/> */}
        <span>${props.item.price}</span>
        <span> | # of Likes: {props.item.numLikes}</span>
        <span> | # of Chats: {props.item.numChats}</span>
      </div>
    )
}

export default Item;