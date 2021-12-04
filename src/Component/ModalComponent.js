import { Modal, Button } from 'react-bootstrap';
import React, { useState,useEffect } from "react";
import { useHistory } from 'react-router';

export default function ModalFn() {
  const history = useHistory();
  //For open modal
  const [show, setShow] = useState(true);
  //For close modal
  const handleClose = () => {
    setShow(false)
    history.push("/card");
  };
     useEffect(()=>{
         if(!localStorage.getItem("user")){
            history.push("/")
         }   
     },[])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank You for Shopping</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}