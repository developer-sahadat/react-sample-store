import React from 'react';
import './product.css'

const Product = (props) => {
    const {title, image, price, description}=props.product
    console.log(props.product);
    return (
        <div className='product-card  '>
        
            
            <img src={image} className=''  alt="" />
            
            <h6 className='mt-4'>Title:{title.slice(0,20)}</h6>
            <h6>Price: <span>$</span>{price}</h6>
            <p>Description: {description.slice(0,90)}</p>
                 <button className="btn-primary me-2 px-4 py-1">Add to cart</button>
                <button className="btn-primary px-4 py-1">Details</button>
         
        </div>
    );
};

export default Product;