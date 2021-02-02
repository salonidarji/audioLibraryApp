
import React, { useState } from 'react';
import { Button , Modal, Card } from 'react-bootstrap';
import {CardDetail} from './CardDetail';


export const CardComponent=({
  book,
  addtoCart = true,
  removeFromCart = false,
})=>{
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const bookTitle = book ? book.title : "A photo";
  const bookAuthor = book ? book.authors : "A photo";
  const bookPrice = book ? book.pageCount : "A photo";
  const bookImage = book ? book.imageLinks['smallThumbnail'] : "A photo";
    return (
      <>
    <Card style={{ width: '18rem', height:'25rem', align:'center' }} bg="light">
    <Card.Img variant="top" src={bookImage} style={{ width: '10rem', height:'15rem'}}/>
    <Card.Body style={{color:'black'}}>
      <Card.Title>{bookTitle}</Card.Title>
      <Card.Text>
        By, {bookAuthor}
        INR{bookPrice}

      </Card.Text>
      <Button variant="success" onClick={handleShow}>Go somewhere</Button>
    </Card.Body>
  </Card>
        
  
         <Modal show={show} onHide={handleClose}>
           <CardDetail />
         </Modal>
     </>  
   
   
        
        
    );

}
