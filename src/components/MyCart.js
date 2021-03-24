import React from 'react'
// react-redux
import { connect } from 'react-redux';
// material-ui
import useStyles from './MyCartStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';


/**
* @author Milos Tanaskovic
* @function MyCart
**/

const MyCart = ({basketProps}) => {
  console.log(basketProps);

  let productsInBasket = [];

  Object.keys(basketProps.products).forEach( function(product) {
    console.log(product)
    // console.log(basketProps.products[product].inBasket)
    if(basketProps.products[product].inBasket) {
      productsInBasket.push(basketProps.products[product])
    }
    console.log(productsInBasket);
  })
 
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      {
        productsInBasket.map((product, index) => {
          console.log(product.name);
          return(
          <CardContent className={classes.cardContent}>
            <Box component="span" m={1}>
              <Typography variant="h5" component="h2" noWrap>
                {product.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {product.price}
              </Typography>
            </Box>
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button>-</Button>
              <Button>{product.numbers}</Button>
              <Button>+</Button>
            </ButtonGroup>
            
          </CardContent>
           ) 
        })
      }
      
      <Box borderTop={1} borderColor="grey.500" />
      <CardActions className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            Total
          </Typography>
          <Typography variant="h5" component="h2">
            {basketProps.basketCost}$
          </Typography>
      </CardActions>
    </Card>
   )
  }
const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps )(MyCart)