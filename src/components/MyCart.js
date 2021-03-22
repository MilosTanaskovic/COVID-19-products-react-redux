import React from 'react'

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

const MyCart = (props) => {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Box component="span" m={1}>
          <Typography variant="h5" component="h2" noWrap>
            dfsf
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
        </Box>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>-</Button>
          <Button>2</Button>
          <Button>+</Button>
        </ButtonGroup>
        
      </CardContent>
      <Box borderTop={1} borderColor="grey.500" />
      <CardActions className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            Total
          </Typography>
          <Typography variant="h5" component="h2">
            120$
          </Typography>
      </CardActions>
    </Card>
   )
  }


export default MyCart