import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SearchFilter = (props) => {
  const classes = useStyles();
    return (
      <div>
        <FormControl className={classes.formControl}>
        <InputLabel>Region</InputLabel>
         <Select value={props.region} onChange={props.handleRegion}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="San Francisco">San Francisco</MenuItem>
             <MenuItem value="Emeryville">Emeryville</MenuItem>
          </Select> <br/><br/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Category</InputLabel>
            <Select value={props.category} onChange={props.handleCategory}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Home Appliance">Home Appliance</MenuItem>
              <MenuItem value="Beauty Products">Beauty Products</MenuItem>
              <MenuItem value="Clothes">Clothes</MenuItem>
              <MenuItem value="Accessories">Accessories</MenuItem>
            </Select>
        </FormControl>
      </div>
    )
}

export default SearchFilter;

// region drop down, search bar, filter of category