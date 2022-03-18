import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

const ModalDetails = (props) => {
console.log(props);
const {title, image, price, description}=props.product

    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
        <button className="btn-primary px-4 py-1" onClick={handleShow}>
        Details
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <div className='d-flex justify-content-md-between align-items-center'>
              <img src={image} className='w-50' alt="" />
                <div>
                <Modal.Title>Title:{title}</Modal.Title>
                <hr />
                <p>Price: {price}</p>
                </div>
              </div>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <button className="btn-secondary" onClick={handleClose}>
              Close
            </button>
            <button className="btn-primary " onClick={handleClose}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
   
    )

};

export default ModalDetails;