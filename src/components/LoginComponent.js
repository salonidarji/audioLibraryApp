import React from 'react'
import * as Mui from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { startLogin } from "../actions/auth";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        
      },
      justifyContent:"center"
    },
  }));

 
const LoginComponent=({startLogin})=> {
    const classes = useStyles();
    return (
        <div>
            <Mui.Container component="div" fixed style={{justifyContent:"center"}}>
            <form className={classes.root} noValidate autoComplete="off">
            {/* <Mui.TextField id="email" label="User Id" variant="outlined" type="email" required/><br/>
            <Mui.TextField id="password" label="Password" variant="outlined" type="password" required /><br/> */}
            <Mui.Button variant="contained" color="primary" onClick={startLogin}>
            Google Login
            </Mui.Button>
            </form>
            </Mui.Container>
        </div>
    )
}

const mapDispatchToProps =(dispatch)=>({
    startLogin: ()=> dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(LoginComponent);