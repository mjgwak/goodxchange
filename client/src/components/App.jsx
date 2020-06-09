import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ItemsList from './ItemsList.jsx';
import SearchFilter from './SearchFilter.jsx';
import ItemExtend from './ItemExtend.jsx';
import Upload from './Upload.jsx';
import User from './User.jsx';
import MyProfile from './MyProfile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      allitems: [{
        "itemId": 1,
        "uploadDate": "2020-06-14T07:00:00.000Z",
        "itemPic": " https://picsum.photos/200",
        "userId": 14,
        "category": " Beauty Products",
        "price": 3414,
        "numLikes": 139,
        "numViews": 412,
        "numChats": 181,
        "title": " suscipit",
        "description": " repellendus vel ipsam",
        "priceNegotiable": 1
    }],
      filtered: [],
      clickedItem: {},
      region: "All",
      category: "All",
      showUpload: false,
      userClicked: false,
      userId: null,
      selectedUser: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHomeButton = this.handleHomeButton.bind(this);
    this.handleRegion = this.handleRegion.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.uploadButton = this.uploadButton.bind(this);
    this.userClick = this.userClick.bind(this);
    this.redirectToHome = this.redirectToHome.bind(this);
    this.myProfileClicked = this.myProfileClicked.bind(this);
  }

  componentDidMount() {
    axios.get('/allitems')
      .then((res) => {
        console.log(res.data)
        this.setState({
          allitems:res.data,
          page: 1
        })
      })
  }

  handleHomeButton(e) {
    e.preventDefault();
    this.setState({
      clickedItem: this.state.allitems,
      page: 1
    })
  }

  handleClick(id) {
   let itemFiltered = this.state.allitems.find((item) => {
    return item.itemId === id;
   })
   this.setState({
     itemClicked: !this.state.itemClicked,
     clickedItem: itemFiltered,
     page: 2,
     region: "All",
     category: "All"
   })
  }

  handleRegion(e) {
    this.setState({
      region: e.target.value
    })
  }

  handleCategory(e){
    this.setState({
      category: e.target.value
    })
  }

  uploadButton() {
    this.setState({
      uploadClicked: !this.uploadClicked,
      region: "All",
      category: "All",
      page: 3
    })
  }

  userClick(userId) {
    axios.get(`/user?userId=${userId}`)
      .then((res) => {
        this.setState({
          userClicked: true,
          userId: userId,
          page: 4,
          selectedUser: res.data[0]
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  redirectToHome() {
    this.setState({
      page: 1,
    })
  }

  myProfileClicked(e) {
    e.preventDefault();
    this.setState({
      page: 5
    })
  }

render() {
  if (this.state.page === 2) {
   return (
    <ItemExtend itemslist={this.state.clickedItem} handleClick={this.handleHomeButton} userClick={this.userClick}/>
   )
  } else if (this.state.page === 3){
    return (
      <Upload handleHomeButton={this.handleHomeButton} redirectToHome={this.redirectToHome}/>
    )
  } else if (this.state.page === 4) {
    return (
      <User selectedUser={this.state.selectedUser} handleHomeButton={this.handleHomeButton} />
    )
  } else if (this.state.page === 5) {
    return (
      <MyProfile handleHomeButton={this.handleHomeButton}/>
    )
  } else {
    return (
      <div>
        <h1>
          GoodXchange
        </h1>
        <button type="button" onClick={this.handleHomeButton}>Home</button>
        <button type="button" onClick={this.uploadButton}>Upload</button>
        <button type="button" onClick={this.myProfileClicked}>My Profile</button><br/><br/>
        <SearchFilter region={this.state.region} handleRegion={this.handleRegion} category={this.state.category} handleCategory={this.handleCategory}/>
        <ItemsList region={this.state.region} itemslist={this.state.allitems} handleClick={this.handleClick} category={this.state.category}/>
      </div>
    )
  }
}

}

export default App;