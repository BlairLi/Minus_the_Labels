import React, { useState } from 'react';

export default function Home() {
  const [events, setEvents] = useState(['Sneakers_Paradise', 'TODO_BLANCO', 'Sneakers_Paradise', 'TODO_BLANCO']);

  return (
    <div>
      <main>
        <div className="background-image">
          <section className="hero is-medium mt-6">
            <div className="hero-body">
              <div className="columns is-centered" >
                <div className="column scroll-container is-6" >
                  {events.map((event, index) => (
                    <div key={index} className="column event-item m-0 p-0">
                      <a href={`/${event}`}>
                        <img className="figure-img" src={`/img/Events/${event}.jpeg`} alt={event} />
                        {/* <div className="figure-img-info">View Event</div> */}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
