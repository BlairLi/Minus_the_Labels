import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { addItem, updateItem, removeItem } from '../../contexts/cartHelpers';


export default function EventPage() {
    const router = useRouter();
    const { events } = router.query;
    const [ticketNumber, setTicketNumber] = useState(1); // State to hold the number of tickets
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Countdown function
    useEffect(() => {
        const targetDate = new Date("2025-01-01T00:00:00"); // Set your target countdown date
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (difference < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
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
        addItem(item.name, item.quantity);
        alert(`Added ${item.quantity} tickets for ${item.name} to your bag.`);
    };

    return (
        // <div>
        <div className="background-image">
            <section className="hero is-medium">
                <div className="hero-body columns is-vcentered mt-6">
                    <div className="column has-text-right">
                        <img className="event-img" src={`/img/Events/${events}.jpeg`} alt={`${events}`} />
                    </div>
                    <div className="column is-6">
                        <p className="title">{events}</p>
                        <div id="timer" className="p-1 timer-dashed">
                            {/* <span>{timeLeft.days}</span> days,
                            <span>{timeLeft.hours}</span> hours,
                            <span>{timeLeft.minutes}</span> minutes,
                            <span>{timeLeft.seconds}</span> seconds */}
                            <span className="">{timeLeft.hours}</span> : 
                            <span> {timeLeft.minutes}</span> :
                            <span> {timeLeft.seconds}</span>
                        </div>
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
