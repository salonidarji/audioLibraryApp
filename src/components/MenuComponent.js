import React from 'react';
import {Link} from 'react-router-dom';
import  * as Mui  from "@material-ui/core";

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { fade, makeStyles } from '@material-ui/core/styles';


export const MenuComponent =()=> {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout=()=>{
    setAuth(false);
    setAnchorEl(null);
  }

        return (

        <div className={classes.root}>
        <Mui.AppBar position="static">
        <Mui.Toolbar>
           
            <Mui.Typography className={classes.title} variant="h6" component={Link} to="/" noWrap>
            Audio-Library
            </Mui.Typography>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <Mui.InputBase
                placeholder="Search…"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            </div>

            {auth && (
            <div>
              <Mui.IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </Mui.IconButton>
              <Mui.Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Mui.MenuItem onClick={handleClose} component={Link} to="/profile">Profile</Mui.MenuItem>
                <Mui.MenuItem onClick={onLogout}>Logout</Mui.MenuItem>
              </Mui.Menu>
            </div>
          )}
        </Mui.Toolbar>
        </Mui.AppBar>
        <br></br>
        </div>
);
   
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      color:'#FFFFFF'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  