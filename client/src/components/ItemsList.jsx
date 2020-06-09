import React from 'react';
import Item from './Item.jsx';

const ItemsList = (props) => {
  const list = props.region !== 'All' ? props.itemslist.filter(item => {
    return item.city === props.region;
  }) : props.itemslist;
  const catList = props.category !== 'All' ? list.filter(item => {
    return item.category === props.category;
  }) : list;
    return (
      <div>
        <ul>
          {
            catList.map((item) => {
              return <li key={item.itemId.toString()}><Item item={item} handleClick={props.handleClick}/></li>
            })
          }
        </ul>
      </div>
  );
}


// city (dropdown): only SF
// category: clothes, bags, home appliance, furniture

// picture of the item
// title of the item
// short description of the item

// # of likes
// # of messages

export default ItemsList;