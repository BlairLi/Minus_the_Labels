import { getCart, removeItem, updateItem } from '../../contexts/cartHelpers';
import { useState, useEffect } from 'react';
import StripeContainer from '../../components/StripeContainer';

export default function CartPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getCart());
    }, []);

    const removeTickets = (productId) => {
        removeItem(productId);
        setItems(getCart());
    };

    const handleQuantityChange = (item, val) => {
        if (val >= 1) {
            updateItem(item, val);
            setItems(getCart());
        }
    };

    const showItems = (items) => {
        return (
            <div>
                <div className='columns'>
                    <div className='column'></div>
                    <div className='column'>Event Name</div>
                    <div className='column'>Ticket Number</div>
                    <div className="column">Update Quantity</div>
                </div>
                {items.map((product, i) => (
                    <div className='columns' key={i}>
                        <div className='column ml-3'>
                            <img style={{ width: "12rem", height: "12rem", objectFit: 'cover' }} src={`/img/Events/${product.item}.jpeg`} alt={product.item} />
                        </div>
                        <div className='column'>{product.item}</div>
                        <div className='column'>
                            <input
                                type="number"
                                value={product.count}
                                onChange={(e) => handleQuantityChange(product.item, parseInt(e.target.value))}
                                min="1"  // Ensure no negative numbers
                                style={{ width: '20%' }}
                            />
                        </div>
                        <div className="column">
                            <button className="button is-rounded is-danger" onClick={() => removeTickets(product.item)}>Remove Ticket</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <a href='/'>Continue shopping</a>
        </h2>
    );

    return (
        <div className=''>
        {/* <div className='background-image'> */}
            <section className="hero is-small mt-6">
                <div className="hero-body mt-6">
                    <p className="title">Shopping Cart</p>
                </div>
                <div className="columns">
                    <div className="column is-four-fifths">
                        {items.length > 0 ? showItems(items) : noItemsMessage()}
                    </div>
                    
                    <div className='column'>
                        <h2 className='mb-4'>Your cart summary</h2>
                        <hr />
                
                        <StripeContainer/>
                        <button className="button is-rounded is-primary mt-4">
                            <a href='https://buy.stripe.com/test_bIY3eqeVc0Tkeze3ch'>Checkout</a>
                        </button>
                        {/* TODO Checkout */}
                        {/* <Checkout products={items} setRun={setRun} run={run} /> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
