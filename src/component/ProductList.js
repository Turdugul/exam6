import React from 'react';
import {connect} from "react-redux"
import ProductItem from './ProductItem';

const ProductList = ({products}) => {
    console.log(products)
    return (
       
            <div className="container border shadow-sm rounded pb-4">

                <h1 className="h1-text">Books</h1>
                <div className="row">

                    {products.map((item) => (
                        <ProductItem key={item.id} item={item}/>
                    ))}
                </div>

            </div>
        
    );
};

const msp = ({products}) => {
    return {products}
}

export default  connect(msp)(ProductList);