import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

/**
* @author Milos Tanaskovic
* @function Products
**/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const Products = ({pruduct}) => {
  const classes = useStyles();

  return(
    <Grid key={pruduct} item>
      <Paper className={classes.paper} />
    </Grid>
   );
  }


export default Products