import React from 'react';
import {connect} from "react-redux"
import ProductItem from './ProductItem';

const ProductList = (state) => {
    return (
       
            <div className="container border shadow-sm rounded pb-4">

                <h1>Books</h1>
                <div className="row">

                    {state.map((item) => (
                        <ProductItem key={item.id} item={item}/>
                    ))}
                </div>

            </div>
        
    );
};

const msp = (state) => {
    return {state}
}

export default  connect(msp)(ProductList);