import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ state }) => {
    const { id } = useParams()
    const product = state.find((item) => item.id == id)
    return (
        <div>
            <h1>{product.title}</h1>
            <div className="row">
                <div className="col-6">
                    <img className="w-100" src={product.image} alt="" />
                </div>
                <div className="col-6">
                    <p>
                        {product.description}
                    </p>
                    <p>
                        <span className="mr-2 text-danger font-weight-bold">
                            Price:{product.price}
                        </span>
                        <button className="btn btn-primary"></button>
                    Purchase
                    <button />
                    </p>
                </div>
            </div>
        </div>
    );
};

const msp = (state) => {
    return { state }
}

export default connect(msp)(ProductDetail);