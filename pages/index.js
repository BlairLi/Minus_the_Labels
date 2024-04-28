import NavBar from "@/components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [events, setEvents] = useState(['Event1','Event2','Event3']);

  return (
    <div>
      <NavBar />
      <main>
        <div className="background-image">
          <section className="hero is-medium">
            <div className="hero-body columns is-vcentered">
              {events.map((event) => (
                <div className="column">
                  <a href={`/${event}`}>
                    <figure>
                      <img src="https://dummyimage.com/320x480/fff/aaa" />
                    </figure>
                  </a>
                </div>
              ))
                
              }
            </div>
          </section>

        </div>


        {/* <section className="hero is-medium">
          <div className="hero-body columns is-vcentered">
            <div className="column">
              <figure>
                <img src="https://dummyimage.com/640x360/fff/aaa" />
              </figure>
            </div>
            <div className="column">
              <p className="title">
                Share questions with the class using a custom URL
              </p>
              <p className="subtitle">
                Create your own temporary URL where you can save questions and
                view them in real time.
              </p>
            </div>
          </div>
        </section> */}

      </main>
      <Footer />
    </div>
  );
}