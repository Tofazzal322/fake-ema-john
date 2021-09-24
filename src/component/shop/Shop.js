import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProfucts] = useState([])

    useEffect(() => {
    //   console.log(" Api called")
    fetch("./products.json")
      .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setDisplayProfucts(data);
            });
  }, []);

  // Local Storage data load
    useEffect(() => {
    //   console.log( "localStorage called")
    if (products.length) {
        const saveCart = getStoredCart();
        console.log(saveCart)
      const storedCart = [];
        for (const keys in saveCart) {
        //   const key =keys.length
          const addedProduct = products.find(product => product.key === keys);
        //   console.log(addedProduct)
            if (addedProduct) {
                const quantity = saveCart[keys];
                addedProduct.quantity = quantity;
            storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  ///////////////////
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
    };
    
    const userSearch = (event) => {
        const userInput = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(userInput.toLowerCase()))
        setDisplayProfucts(matchProduct)
        // console.log(matchProduct.length)

        
    }
    
    return (
        <div>
            <div className="search-field">
                <input
                    type="text"
                    onChange={userSearch}
                    placeholder=" Search Product's" />
            </div>
            <div>
            <div className="shop-container">
                <div className="product-container">
                        {
                            displayProducts.map((product) => (
                    <Product
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>
                            ))
                        }
                </div>
                <div className="cart-container">
                <Cart cart={cart}></Cart>
                </div>
            </div>
            </div>
        </div>
        
    );
    
};

export default Shop;