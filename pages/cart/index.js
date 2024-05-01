import { useState, useEffect } from 'react';

export default function CartPage({ item, updateQuantity, removeFromCart }) {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeItemFromCart = (item) => {
        setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem !== item));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    useEffect(() => {
        console.log('item:', item);
    }, [item]);

    return (
        <div>
            <section className="hero is-medium">
                <div className="hero-body">
                    <p className="title">Shopping Cart</p>
                </div>
            </section>
            {/* <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeItemFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul> */}
            <button onClick={() => addItemToCart({ name: 'Product 1', price: 10 })}>Add Product 1</button>
            <button onClick={() => addItemToCart({ name: 'Product 2', price: 20 })}>Add Product 2</button>
            <p>Total Price: ${getTotalPrice()}</p>
            <div className="cart-item">
                {/* <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} /> */}
                {/* <span>{item.name}</span> */}
                <input 
                    type="number" 
                    // value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} 
                />
                {/* <span>${item.price}</span> */}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
}
