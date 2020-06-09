import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const theme = {
  spacing: value => value,
}

const MyProfile = (props) => {
    return (
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc'}}>
      <div>
        <Box p={2}>
          <Button variant="contained" color="primary" startIcon={<HomeIcon />} onClick={(e) => props.handleHomeButton(e)}>Home</Button>
        </Box> <br/><br/>
        <Box textAlign="center" fontWeight="fontWeightBold" fontSize="h5.fontSize" fontFamily="fontFamily" letterSpacing={10} p={4}>My Profile</Box>
        <Box component="span"><img src="https://mvpminjiprofpic.s3-us-west-1.amazonaws.com/profilePic.png" style={{width: 100, height: 100, borderRadius: 50}}/></Box>
        <Box component="div" fontFamily="fontFamily"pt={2} >Minji Gwak</Box>
        <Box component="div" fontFamily="fontFamily">Emeryville</Box>
        <Box component="div" fontFamily="fontFamily" pt={2}  pb={2}>Rate: 7.8</Box>
      </div>
      </Container>
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