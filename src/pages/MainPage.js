import React, { useState, useEffect } from 'react'
// import component
import Product from '../components/Product';
// material-ui
import useStyles from './MainPageStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// import API
import Api from '../api';

/**
* @author Milos Tanaskovic
* @function MainPage
**/

const MainPage = (props) => {
 const classes = useStyles();
 // store API results
 const [results, setResults] = useState([]);
 
 const fetchProducts = async () => {
   const products = await Api.getProducts();
    setResults(products);
 }

  useEffect(() => {
   fetchProducts()
  }, [])
  
  console.log(results)
 

  return(
    <Container className={classes.root}>
     <Typography 
      component="div" 
      style={{ height: '100vh' }} 
     >
      {/* display results from API */}
      {/* list of products */}
        {/* <Grid container justify="center" spacing="3">
          {
            results.map((product) => (
              <Product product={product} />
            ))
          }
        </Grid> */}
      {/* list of products */}
     </Typography>
    </Container>
   )
  }


export default MainPage