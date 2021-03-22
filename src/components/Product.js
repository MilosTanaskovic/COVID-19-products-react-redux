import React from 'react'

// material-ui
import useStyles from './ProductStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/**
* @author Milos Tanaskovic
* @function Products
**/

const Products = ({product}) => {
  const classes = useStyles();

  return(
    <Grid key={product} item>

      <Card className={classes.card}>
        <CardContent>
          {/* title */}
          <Typography 
            className={classes.title} 
            color="primary" 
            noWrap 
            gutterBottom
          >
            COVID-19 PCR afdfdsafafdadsad
          </Typography>
          {/* description */}
          <Typography className={classes.pos} color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur adipisci sapiente minima veritatis dignissimos facere soluta praesentium fuga. Provident dicta eveniet officiis velit sed veniam eum, ea ducimus vel ipsam.
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae officiis autem quis reiciendis aut aspernatur ducimus, itaque porro at, cumque suscipit rerum ipsum nobis id dolore impedit repellat repudiandae neque?
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            1 marcador
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Typography className={classes.price} color="textSecondary">
            152E
          </Typography>
          <Button size="small" variant="contained" color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>

    </Grid>
   );
  }


export default Products