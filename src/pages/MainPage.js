import React, { useState } from 'react'

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

// import API
import Api from '../api';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '600px',
    marginTop: '40px',
    marginBottom: '40px',
    margin: '0 auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }

}));

/**
* @author Milos Tanaskovic
* @function MainPage
**/

const MainPage = (props) => {
 const classes = useStyles();

  return(
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Products"
        inputProps={{ 'aria-label': 'search products' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
   )
  }


export default MainPage