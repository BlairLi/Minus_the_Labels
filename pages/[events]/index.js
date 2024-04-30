import { useRouter } from "next/router";

export default function EventPage() {
    const router = useRouter();
    const { events } = router.query;

    return (
        <div>
            <section class="hero is-large has-background-white-ter">
                <div class="hero-body columns is-vcentered">
                    <div className="column">
                            <img className="figure-img" src={`/img/${events}.jpeg`} />
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
                                    <button className="button is-rounded is-danger is-small" onClick="decrement()">-</button>
                                    <input className="input is-small" type="number" id="ticketNumber" value="1" />
                                    <button className="button is-rounded is-success is-small" onClick="increment()">+</button>
                                </div>
                                <button className="button is-rounded is-primary" onclick="submitOrder()">Add to bag</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}