import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const User = (props) => {
    return (
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc'}}>
        <Box p={2}>
          <Button variant="contained" color="primary" startIcon={<HomeIcon />}onClick={(e) => props.handleHomeButton(e)}>Home</Button> <br/><br/>
        </Box>
        <Box textAlign="center" fontWeight="fontWeightBold" fontSize="h5.fontSize" fontFamily="fontFamily" letterSpacing={10} p={4}>Seller Profile</Box>
        <Box component="span"><img src={props.selectedUser.profPicURL} style={{width: 100, height: 100, borderRadius: 50}}/></Box>
        <Box component="div" fontFamily="fontFamily"pt={2} >{props.selectedUser.userName}</Box>
        <Box component="div" fontFamily="fontFamily">{props.selectedUser.city}</Box>
        <Box component="div" fontFamily="fontFamily" pt={2}  pb={2}>Rating: 6.7 / 10</Box>
      </Container>
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