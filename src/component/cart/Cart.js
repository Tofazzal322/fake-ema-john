import React from 'react';
import './cart.css'

const Cart = (props) => {
    const { cart } = props;

    // method 1
    const total = cart.reduce((previous, product) => previous + product.price,0);

    // method 2
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer,0);

    // method 3
    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price;
    // }

    const shipping = 15;
    const tax = (total + shipping) / 10;
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart">
            <h3 className="order"> Order Summary</h3>
            <h5 className="order"> Items Ordered:  {props.cart.length} </h5>
            <h4 className="order"> Total <span className="order"> {total.toFixed(2)} </span> </h4>
            <p> Shipping: <span className="order"> {shipping}</span> </p>
            <p> Tax: <span className="order"> {tax.toFixed(2)}</span> </p>
            <p> Grand Total: <span className="order"> {grandTotal.toFixed(2)}</span> </p>
        </div>
    );
};

export default Cart;