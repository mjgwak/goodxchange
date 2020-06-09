import React from 'react';
import User from './User.jsx';
import Container from '@material-ui/core/Container';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const theme = {
  spacing: value => value,
}

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

// once an item is clicked from the itemslist
const ItemExtend = (props) => {
  const selectedItem = props.itemslist;
  const userid = selectedItem.userId;
  const classes = useStyles();
  return (
    <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc'}} fontFamily="fontFamily">
      <div>
      <Box p={2}>
        <Button variant="contained" color="primary" startIcon={<HomeIcon />} type="button" onClick={(e) => {props.handleClick(e)}}>Home</Button><br/><br/>
      </Box>
      </div>
      <Box textAlign="center" fontWeight="fontWeightBold" fontSize="h5.fontSize" fontFamily="fontFamily" letterSpacing={10} p={4}>
          Item
        </Box>
      <Box textAlign="center" m={2}><img style={{width: "80%"}} src={selectedItem.itemPic}/></Box>
      <div className={classes.root} onClick={() => {
        props.userClick(userid)}}>
            <Avatar className="{classes.large}" src={selectedItem.profPicURL}/>
            <Box fontFamily="fontFamily" fontSize="14px">{selectedItem.userName}</Box>
            <Box fontFamily="fontFamily" fontSize="14px">Rating: 6.7 / 10</Box>
            <Box fontFamily="fontFamily" fontSize="14px">{selectedItem.city}</Box>
      </div>
      <div>
        <Box fontFamily="fontFamily" fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={5} pt={2}>{selectedItem.title}</Box>
        <Box component="span" fontFamily="fontFamily" fontSize="13px">{selectedItem.category}</Box>
        <Box component="span" fontFamily="fontFamily" fontSize="10px" fontWeight="200" p={3}>(Uploaded 2 min ago)</Box>
        <Box component="div" fontFamily="fontFamily" pt={3}>${selectedItem.price}</Box>
        <Box component="div" fontFamily="fontFamily" pt={2} pb={3}>{selectedItem.description}</Box>
        <Box component="span" fontFamily="fontFamily" fontSize="10px"> Chats {selectedItem.numChats}</Box>
        <Box component="span" fontFamily="fontFamily" fontSize="10px">   |   Likes {selectedItem.numLikes}</Box>
        <Box component="span" fontFamily="fontFamily" fontSize="10px">   |   Views {selectedItem.numViews}</Box>
      </div>
      <Box pt={5} pb={2}>
        <FormGroup row>
        <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
        />
        <FormControlLabel
          control={<Checkbox icon={<ChatBubbleOutlineIcon />} checkedIcon={<ChatIcon />} />}
        />
        </FormGroup>
      </Box>
    </Container>
  )
}

export default ItemExtend;

// location: geo location (google api) < --- stretch
/*
<FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label="Custom icon"
      />
      https://material-ui.com/components/checkboxes/
      */