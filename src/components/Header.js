import React, { useState } from 'react'
// material-ui
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

// import API
import Api from '../api';

/**
* @author Milos Tanaskovic
* @function Header
**/

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  basketButton: {
    marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleMobile: {
   display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  sectionDesktop: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  
  const isBasketOpen = Boolean(anchorEl);
 
  const handleBasketOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBasketClose = () => {
    setAnchorEl(null);
  };

  const BasketId = 'primary-search-shopping-cart';
  const renderBasket = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={BasketId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isBasketOpen}
      onClose={handleBasketClose}
    >
      <MenuItem >items</MenuItem>
    </Menu>
  );

  return(
   <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.basketButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography 
           className={classes.title} 
           variant="h6" 
           noWrap>
            Melio - Health, Wellness & Fitness
          </Typography>
          <Typography 
           className={classes.titleMobile} 
           variant="h6" 
           noWrap>
            Melio
          </Typography>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>      
            <IconButton
              edge="end"
              aria-label="basket of current products"
              aria-controls={BasketId}
              aria-haspopup="true"
              onClick={handleBasketOpen}
              color="inherit"
            >
              <Badge 
               badgeContent={4} 
               color="secondary"
              >
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
          </div>
        
        </Toolbar>
      </AppBar>
      {renderBasket}
    </div>
   )
  }


export default Header