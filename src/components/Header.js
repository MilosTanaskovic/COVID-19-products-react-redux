import React, { useState } from 'react'
// import component
import MyCart from './MyCart';
// react-redux
import { connect } from 'react-redux'
// material-ui
import useStyles from './HeaderStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import './Header.css';

/**
* @author Milos Tanaskovic
* @function Header
**/

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

      { isBasketOpen && (
        <Menu
          className={classes.menu}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={BasketId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isBasketOpen}
          onClose={handleBasketClose}
        >    
          <MyCart />   
        </Menu>

      ) }
    </div>
   )
  }

export default Header