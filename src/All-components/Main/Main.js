import React from 'react';
import Products from './Products/Products';

const Main = (props) => {
    return (
        <div>
            <Products updateCount={props.countUpdate}></Products>
        </div>
    );
};

export default Main;