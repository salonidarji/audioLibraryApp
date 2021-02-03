import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute=({isAuthenticated,
component: Component,
...rest
})=>{
    console.log("isAuthenticcated: ", isAuthenticated);
    return (<Route {...rest} component={(props)=>(
        
        isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to="/" />
        )
    )} />
    
    );
        };

        const mapStateToProps=(state)=>{
    
            if(state.auth.user){
                return {
                    isAuthenticated:!!state.auth.user.uid
                }
            }
            else{
                return {
                    isAuthenticated:false
                }
            }
            
        };

export default connect(mapStateToProps)(PrivateRoute);