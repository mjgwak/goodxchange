import React from 'react';
import User from './User.jsx';
import ItemExtend from './ItemExtend.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Favorite from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '10px',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Item = (props) => {
  const classes = useStyles();
    return (
      <div className={classes.root} onClick={() => props.handleClick(props.item.itemId)}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
               <img className={classes.img} src={props.item.itemPic}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {props.item.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {props.item.category}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                     <Favorite/> {props.item.numLikes}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">${props.item.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
}

export default Item;


// const Item = (props) => {
//   const classes = useStyles();
//     return (
//       <div onClick={() => props.handleClick(props.item.itemId)}>
//         {/* <img src={props.item.itemPic}/> */}
//         <span>{props.item.title}</span><span>  |  {props.item.category}</span><br/>
//         {/* <span>Uploaded min ago</span><br/> */}
//         <span>${props.item.price}</span>
//         <span> | # of Likes: {props.item.numLikes}</span>
//         <span> | # of Chats: {props.item.numChats}</span>
//       </div>
//     )
// }