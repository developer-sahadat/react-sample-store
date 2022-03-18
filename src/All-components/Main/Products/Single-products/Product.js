import React from 'react';
import './product.css'

const Product = (props) => {
    const {title, image, price, description}=props.product
    console.log(props.product);
    return (
        <div className='product-card p-4 '>
        
           <img src={image} className='img-fluid h-75 w-100'  alt="" />
            <h6 className='mt-4'>Title:{title.slice(0,20)}</h6>
            <h6>Price: <span>$</span>{price}</h6>
            <p>Description: {description.slice(0,90)}</p>
         
        </div>
    );
};

export default Product;