import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import './product.css';

const Product = (props) => {
    const { name, img, price, stock, star, starCount, seller, } = props.product;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const rating = <FontAwesomeIcon icon={faStar} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="description">
                
                    <h1 className="product-name">This {name} </h1>
                    <h5><small>By: {seller} </small></h5>
                    <h4>Price: {price} </h4>
                    <p> only <span className="stock">{stock}</span> left in stock- order soon </p>
                <div className="button-section">
                    <div >
                        <button
                            onClick={ ()=> props.handleAddToCart(props.product)}
                            className="button">
                            <small>{shoppingCart} </small> add to cart</button>
                    </div>
                    <div>
                        <p className="star"> {rating} {rating} {rating} {rating} {rating} {star} </p>
                        <p> Review: {starCount} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;