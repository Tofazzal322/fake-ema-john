import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
        .then(data =>setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart) ;
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                           handleAddToCart = {handleAddToCart} 
                        >
                            
                            </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} ></Cart>
                </div>


            </div>
        </div>
    );
};

export default Shop;