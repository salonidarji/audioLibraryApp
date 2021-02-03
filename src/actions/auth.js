import {firebase, googleAuthProvider} from '../firebase';

export const login =(user)=>({
    type:'LOGIN',
    ...user
})

export const logout=()=>({
    type:'LOGOUT'
})
export const startLogin=()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLogOut=()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}

