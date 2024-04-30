import { useState } from 'react';

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (const item of this.items) {
            totalPrice += item.price;
        }
        return totalPrice;
    }
}

// Usage example
const cart = new ShoppingCart();

// Add items to the cart
const item1 = { name: 'Product 1', price: 10 };
const item2 = { name: 'Product 2', price: 20 };
cart.addItem(item1);
cart.addItem(item2);

// Remove an item from the cart
cart.removeItem(item1);

// Get the total price of the cart
const totalPrice = cart.getTotalPrice();
console.log('Total Price:', totalPrice);
export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    // const addItemToCart = (item) => {
    //     setCartItems((prevItems) => [...prevItems, item]);
    // };

    // const removeItemFromCart = (item) => {
    //     const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    //     setCartItems(updatedCartItems);
    // };

    const getTotalPrice = () => {
        let totalPrice = 0;
        for (const item of cartItems) {
            totalPrice += item.price;
        }
        return totalPrice;
    };

    // Usage example
    const item1 = { name: 'Product 1', price: 10 };
    const item2 = { name: 'Product 2', price: 20 };

    // addItemToCart(item1);
    // addItemToCart(item2);
    // removeItemFromCart(item1);

    const totalPrice = getTotalPrice();

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
}