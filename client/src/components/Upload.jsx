import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';
import SaveAltIcon from '@material-ui/icons/SaveAlt';import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const theme = {
  spacing: value => value,
}

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadDate: '',
      itemPic: null,
      userId: '',
      category: 'All',
      price: 0,
      title: '',
      description: '',
      priceNegotiable: 1,
    }
    this.saveClicked = this.saveClicked.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
}

  handleInputChange(e) {
    const target = e.target;
    const value = target.name === "priceNegotiable" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  saveClicked(e) {
    e.preventDefault();
    const item = {
      uploadDate: new Date().toISOString().slice(0, 10).replace('T', ' '),
      itemPic: this.state.itemPic,
      userId: this.state.userId,
      title: this.state.title,
      category: this.state.category,
      price: this.state.price,
      description: this.state.description,
      priceNegotiable: this.state.priceNegotiable,
    }
    axios.post('/item', {item})
    .then (res => {
      if(res.status === 200) {
        this.setState({
          uploadDate: '',
          itemPic: null,
          userId: '',
          category: 'All',
          price: 0,
          title: '',
          description: '',
          priceNegotiable: 1,
        });
        window.alert("Item Upload Successful!");
        this.props.redirectToHome();
      }
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    return (
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc'}}>
      <div>
        <section>
        <div>
          <Box p={2}>
            <Button variant="contained" color="primary" startIcon={<HomeIcon />} onClick={(e) => this.props.handleHomeButton(e)}>Home</Button>
          </Box>
          <Box textAlign="center" fontWeight="fontWeightBold" fontSize="h5.fontSize" fontFamily="fontFamily" letterSpacing={10} p={4}>Upload Item</Box>
        </div>
        <div>
          {/* <input
            accept="image/*"
            multiple
            type="file"
          /> */}
          {/* <input accept="image/*" type="file"/> */}
          <label>
            <IconButton color="primary" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
        <Box fontFamily="fontFamily" fontSize="14px" mr={3}>
          <label>User ID:
            <input name="userId" value={this.state.userId} onChange={this.handleInputChange}/>
          </label><br/><br/>
          <label>Title:
            <input name="title" value={this.state.title} onChange={this.handleInputChange}/>
          </label><br/><br/>
          <label>Category:
            <select name="category" value={this.state.category} onChange={this.handleInputChange}>
              <option value="All">All</option>
              <option value="Furniture">Furniture</option>
              <option value="Home Appliance">Home Appliance</option>
              <option value="Beauty Products">Beauty Products</option>
              <option value="Clothes">Clothes</option>
              <option value="Accessories">Accessories</option>
            </select>
          </label><br/><br/>
          <label>Price($):
            <input name="price" value={this.state.price} onChange={this.handleInputChange}/>
            </label>
          <label>  |  Price Negotiable?
            <input name="priceNegotiable" type="checkbox" checked={this.state.priceNegotiable} onChange={this.handleInputChange}/>
          </label><br/><br/>
          <label>Description:
            <input name="description" value={this.state.description} onChange={this.handleInputChange}/>
          </label>
        </Box>
        </section><br/><br/>
        <Box pb={3}>
        <Button variant="contained" color="primary" startIcon={<SaveAltIcon />} onClick={(e) => this.saveClicked(e)}>Save</Button>
        </Box>

      </div>
      </Container>
    )
  }
}

/*
const Upload = (props) => {
  return (
    <div>
      <section>
      <div>
        <button onClick={(e) => props.handleHomeButton(e)}>Home</button>
        <h3>Upload Item</h3>
        <span>Upload Picture 1/10</span><br/><br/>
      </div>
      <div>
        <label>User ID: <input name="userId"/></label><br/><br/>
        <label>Title: <input name="title"/></label><br/><br/>
        <label>Category:
          <select>
          <option value="All">All</option>
          <option value=" Furniture">Furniture</option>
          <option value=" Home Appliance">Home Appliance</option>
          <option value=" Beauty Products">Beauty Products</option>
          <option value=" Clothes">Clothes</option>
          <option value=" Accessories">Accessories</option>
        </select>
        </label><br/><br/>
        <label>Price($): <input name="price"/></label><label>  |  Price Negotiable? <input name="pricenegotiate" type="checkbox"/></label><br/><br/>
        <label>Description: <input name="description"/></label>
      </div>
      </section><br/><br/>
      <button >Save</button>

    </div>
  )
}
*/
export default Upload;