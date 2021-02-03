import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBStzC5ssz8JFJU5ILziipOnsPFyOrdj1c",
    authDomain: "audiobookapp-b4755.firebaseapp.com",
    databaseURL: "https://audiobookapp-b4755-default-rtdb.firebaseio.com",
    projectId: "audiobookapp-b4755",
    storageBucket: "audiobookapp-b4755.appspot.com",
    messagingSenderId: "228671165603",
    appId: "1:228671165603:web:5a391c459134c62c7edb16",
    measurementId: "G-X6VL519LLS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 const database=firebase.database();

const googleAuthProvider= new firebase.auth.GoogleAuthProvider();
// database.ref('users').push({
//     name:"saloni",
//     email:"saloni@gmail.com"
// });



// database.ref().set({
//     user:{
//     name:"saloni",
//     email:"saloni@gmail.com"
//     }
    
// });

database.ref('users').on('value' ,(snapshot)=>{
    const val = snapshot.val();
    console.log("user data:",val);
    const users=[];
    snapshot.forEach((childsnapshot)=>{
        users.push({
            id:childsnapshot.key,
            ...childsnapshot.val()
        })
    })
    console.log("User converted:" ,users);

});

export {firebase , googleAuthProvider, database as default};