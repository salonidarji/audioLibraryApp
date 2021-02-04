import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import BaseComponent from './BaseComponent';
import { connect } from 'react-redux';
import database from '../firebase';

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

const ProfileComponent=({userId,userName,userEmail})=> {
  const classes = useStyles();
  let bookTitle="";
  database.ref(`users/${userId}`).once('value',snapshot=>{
    console.log(snapshot.val().userBooks.bookTitle);
    bookTitle= snapshot.val().userBooks ? snapshot.val().userBooks.bookTitle : "N/A";
  })
  
  return (
   <BaseComponent title="Profile Page" description="Welcome to Website">
    
    <Grid container
  spacing={0}
  direction="column"
  alignItems="center"
  
  style={{ minHeight: '60vh' }}>
      {/* <Avatar>H</Avatar>
      <Avatar className={classes.purple}>OP</Avatar> */}

      <Avatar size="lg" className={classes.orange}>{userName.charAt(0)}</Avatar> {userName}
      <div> contact detail: 
      <h6>{userEmail}</h6>
      </div>
      <br/>
      <p>my books:
      {
        bookTitle !== "" ? bookTitle : "N/A"
      }
      </p>
    </Grid>
    </BaseComponent>
  );
}

const mapStateToProps=state=>({
  userId: state.auth.user.uid,
  userName: state.auth.user.displayName,
  userEmail: state.auth.user.email
})

export default connect(mapStateToProps)(ProfileComponent);