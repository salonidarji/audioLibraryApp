
import React, { useState } from 'react';
import * as Mui from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
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




export const CardComponent=({
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

  const bookTitle = book ? book.title : "A photo";
  const bookAuthor = book ? book.authors : "A photo";
  const bookPrice = book ? book.pageCount : "A photo";
  const bookImage = book ? book.imageLinks['smallThumbnail'] : "A photo";
  
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const [modalStyle] = useState(getModalStyle);

  const CardDetail=(
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      
    </div>
    );

  return (
      <>
   
         <Mui.Modal  open={open}
        onClose={handleClose}>
           { CardDetail }
         </Mui.Modal>

         <Mui.Card className={classes.root} style={{ width: 'auto', height:'25rem', align:'center' }}>
      <Mui.CardActionArea>
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
      <Mui.CardActions>
        <Mui.Button size="small" color="primary">
          Buy
        </Mui.Button>
        <Mui.Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Mui.Button>
      </Mui.CardActions>
    </Mui.Card>
     </>  
   
   
        
        
    );

}
