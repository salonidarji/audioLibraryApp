import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import BaseComponent from './BaseComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
   
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function ProfileComponent() {
  const classes = useStyles();

  return (
   <BaseComponent title="Profile Page" description="Welcome to Website">
    
    <div className={classes.root}>
      {/* <Avatar>H</Avatar>
      <Avatar className={classes.purple}>OP</Avatar> */}

      <Avatar className={classes.orange}>N</Avatar>
    </div>
    </BaseComponent>
  );
}
