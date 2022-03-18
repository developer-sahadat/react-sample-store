import React from 'react';
import ModalDetails from './ModalDetails';
import './product.css'

const Product = (props) => {
    const {title, image, price, description}=props.product
   
    return (
        <div className='product-card  '>
        
            
            <img src={image} className=''  alt="" />
            
            <h6 className='mt-4'>Title:{title.slice(0,20)}</h6>
            <h6>Price: <span>$</span>{price}</h6>
            <p>Description: {description.slice(0,90)}</p>
             <div className='d-flex  align-items-center'>
             <button onClick={props.update} className="btn-primary me-2 px-4 py-1">Add to cart</button>
                <ModalDetails product={props.product}></ModalDetails>
             </div>
        </div>
    );
};

export default Product;