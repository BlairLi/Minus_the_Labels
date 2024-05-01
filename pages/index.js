import { useState } from "react";

export default function Home() {
  const [events, setEvents] = useState(['Event1','Event2','Event3','Event4']);

  return (
    <div>
      <main>
        {/* <div className="background-image"> */}
        <div className="">
          <section className="hero is-medium">
            <div className="hero-body columns is-vcentered no-gap">
              {events.map((event) => (
                <div className="column">
                  <a href={`/${event}`}>
                      <img className="figure-img" src={`/img/${event}.jpeg`} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}