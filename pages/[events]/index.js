import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';

export default function EventPage() {
    const router = useRouter();
    const { events } = router.query;
    const { addItemToCart } = useCart(); // Use the custom hook to get cart functions
    const [ticketNumber, setTicketNumber] = useState(1); // State to hold the number of tickets

    useEffect(() => {
        const cart = useCart(); // Call useCart to get the context
        console.log('Cart context data:', cart);
    }, []); 

    const decrement = () => {
        if (ticketNumber > 1) {
            setTicketNumber(ticketNumber - 1);
        }
    };

    const increment = () => {
        setTicketNumber(ticketNumber + 1);
    };

    const submitOrder = () => {
        const item = { id: Math.random(), name: events, price: 20, quantity: ticketNumber };
        addItemToCart(item);
        console.log(`Added ${ticketNumber} tickets to your bag.`);
        console.log('addItemToCart(item);', addItemToCart(item));
    };

    return (
        <div>
            <section className="hero is-large has-background-white-ter">
                <div className="hero-body columns is-vcentered">
                    <div className="column has-text-right">
                        <img className="event-img" src={`/img/${events}.jpeg`} alt={`${events}`} />
                    </div>
                    <div className="column is-6">
                        <p className="title">{events}</p>
                        <p className="subtitle">
                            Events Description lorem ipsum dolor sit amet, consectetur lorem lorem ipsum dolor sit amet, consectetur lorem
                        </p>
                        <div className="columns">
                            <div className="column is-narrow">
                                <label className="column label">Number of Tickets:</label>
                                <div className="columns control number-input">
                                    <button className="button is-rounded is-danger is-small" onClick={decrement}>-</button>
                                    <input className="input is-small" type="number" id="ticketNumber" value={ticketNumber} readOnly />
                                    <button className="button is-rounded is-success is-small" onClick={increment}>+</button>
                                </div>
                                <button className="button is-rounded is-primary" onClick={submitOrder}>Add to bag</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
