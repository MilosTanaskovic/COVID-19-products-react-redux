import React, { useState } from 'react'
// import component
import Products from '../components/Products';
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
 // store API results
 const [results, setResults] = useState([1,2,3,4,5,6,7]);

  return(
    <Container>
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
     <CssBaseline /> 
     <Typography 
      component="div" 
      style={{ height: '100vh' }} 
     >
      {/* display results from API */}
      {/* list of products */}
        <Grid container justify="center" spacing="3">
          {
            results.map((pruduct) => (
              <Products pruduct={pruduct} />
            ))
          }
        </Grid>
      {/* list of products */}
     </Typography>
    </Container>
   )
  }


export default MainPage