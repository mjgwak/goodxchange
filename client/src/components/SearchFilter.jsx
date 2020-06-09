import React from 'react';

const SearchFilter = (props) => {
    return (
      <div>
        <select value={props.region} onChange={props.handleRegion}>
          <option value="All">All</option>
          <option value=" San Francisco">San Francisco</option>
          <option value=" Emeryville">Emeryville</option>
        </select> <br/><br/>
        <select value={props.category} onChange={props.handleCategory}>
          <option value="All">All</option>
          <option value=" Furniture">Furniture</option>
          <option value=" Home Appliance">Home Appliance</option>
          <option value=" Beauty Products">Beauty Products</option>
          <option value=" Clothes">Clothes</option>
          <option value=" Accessories">Accessories</option>
        </select>
      </div>
    )
}

export default SearchFilter;

// region drop down, search bar, filter of category