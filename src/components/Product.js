import React from 'react'

// material-ui
import useStyles from './ProductStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// react-redux
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
/**
* @author Milos Tanaskovic
* @function Products
**/

const Product = (props) => {
  console.log(props);
  const {key, name, title, desc, spec, price} = props;
  
  const classes = useStyles();

  return(
    <Grid key={key} item>

      <Card className={classes.card}>
        <CardContent>
          {/* title */}
          <Typography 
            className={classes.title} 
            color="primary" 
            noWrap 
            gutterBottom
          >
            {name}
          </Typography>
          {/* description */}
          <Typography className={classes.pos} color="textSecondary">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
           {desc}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {spec}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Typography className={classes.price} color="textSecondary">
            {price}$
          </Typography>
          <Button 
            size="small" 
            variant="contained" 
            color="primary" 
            onClick={props.addBasket}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>

    </Grid>
   );
  }


export default connect(null, { addBasket })(Product);