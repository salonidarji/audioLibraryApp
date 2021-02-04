
import React, { useState } from 'react';
import * as Mui from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import database from "../firebase";
import store from '../store';
import { history } from '../Routes';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    justifyContent:'center',
    alignSelf:"center"
    
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));





const CardComponent=({
  book
}
)=>{

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bookTitle = book.title ? book.title : "title";
  const bookAuthor = book.authors ? book.authors : "Robert";
  const bookPublisher = book.publisher ? book.publisher : "john";
  const bookPrice = book.pageCount ? book.pageCount : "510";
  const bookPreview = book.previewLink ? book.previewLink : "N/A";
  const bookImage = book.imageLinks ? book.imageLinks['smallThumbnail'] : "A photo";
  
  const userId = store.getState().auth.user.uid;
  console.log("uid in buy:",store.getState().auth.user.uid);

  const onBuy=()=>{

    database.ref(`users/${userId}/userBooks`).set({
          
           bookTitle:bookTitle
       });

       handleClose();
       history.push('/profile');

  
  }
  


  return (
      <>
   
         <Mui.Dialog  open={open}
        onClose={handleClose}>
          <Mui.DialogContent>
      <Mui.Typography component="h2" variant="body1" color="textPrimary" id="simple-modal-title">{bookTitle}</Mui.Typography>

          <Mui.CardMedia
          className={classes.media}
          image={bookImage}
          title={bookTitle}
          style={{ width: '10rem', height:'10rem'}}
        />
      <Mui.Typography component="div">
       <h6>Publisher: <Mui.Typography variant="body2" color="textSecondary"> {bookPublisher}</Mui.Typography></h6>
       <h6>Author: <Mui.Typography variant="body2" color="textSecondary"> {bookAuthor}</Mui.Typography></h6>
       <h6>Price: <Mui.Typography variant="body2" color="textSecondary"> INR-{bookPrice}</Mui.Typography></h6>
       <h6>Preview : <Mui.Link href={bookPreview}>{bookPreview}</Mui.Link></h6>
       </Mui.Typography>
       </Mui.DialogContent>
       <Mui.DialogActions>
       <Mui.Button size="small" variant="contained" color="primary" onClick={onBuy}>
          Buy
        </Mui.Button>
       </Mui.DialogActions>
       
       
      
           
         </Mui.Dialog>

         <Mui.Card className={classes.root} onClick={handleOpen} style={{ width: 'auto', height:'25rem', align:'center' }}>
      <Mui.CardActionArea >
        <Mui.CardMedia
          className={classes.media}
          image={bookImage}
          title={bookTitle}
          style={{ width: '10rem', height:'10rem'}}
        />
        <Mui.CardContent>
          <Mui.Typography gutterBottom variant="h6" component="h2">
            {bookTitle}
          </Mui.Typography>
          <Mui.Typography variant="body2" color="textSecondary" component="p">
          By, {bookAuthor}
        
          </Mui.Typography>
          <Mui.Typography variant="body2" color="textSecondary" component="p">
          INR: {bookPrice}
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.CardActionArea>
     
    </Mui.Card>
     </>  
   
     
    );

}


export default CardComponent;