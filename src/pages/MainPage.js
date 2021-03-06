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
 const [spacing, setSpacing] = useState(6);
 // store API results
 const [results, setResults] = useState([]);
 
 const fetchProducts = async () => {
   const products = await (await Api.getProducts());
    setResults(products.data.docs);
 }

  useEffect(() => {
   fetchProducts()
  }, [])
console.log(results);
  return(
    <Container className={classes.root}>
     <Typography 
      component="div" 
      style={{ height: '100vh' }} 
     >
      {/* display results from API */}
      {/* list of products */}
        <Grid container justify="center" spacing={spacing}>
          {
            results.map((product) => ( 
              <Product 
                key={product.id}
                name={product.name} 
                title={product.m1} 
                desc={product.description} 
                spec={product.urlTitle}
                price={product.price}
                inBasket={product.isGroupRestricted}
                numbers={0}
              />
            ))
          }
        </Grid> 
      {/* list of products */}
     </Typography>
    </Container>
   )
  }


export default MainPage