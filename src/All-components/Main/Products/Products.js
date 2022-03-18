import React, { useEffect, useState } from 'react';
import Product from './Single-products/Product';
import './products.css'

const Products = (props) => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[])
    return (
        <div>
            <h1 className='text-center py-3'>Products</h1>
            {
           
           <section>
               <div className="container product p-4">
                 
                 {
                        products.map(product=><Product product={product} key={product.id} update={props.updateCount}></Product>)
                   }
                
               </div>
           </section>
        }
        </div>
      
    );
};



export default Products;