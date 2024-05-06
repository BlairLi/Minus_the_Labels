import { useEffect, useState } from 'react';
import {itemTotal} from '../contexts/cartHelpers';

const NavBar = () => {
    const [itemLength, setItemLength] = useState(0);

    useEffect(() => {
      const total = itemTotal();
      setItemLength(total);
    }, [itemLength]);

    return (
      <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-center mt-4">
              <h2 className="menuItem pd-0">
                  <span className="">
                      <div className="columns">
                        <img  className="column" src="/img/logos/MTLS logo.svg" alt="logo" style={{width:'5rem', height: '5rem'}} />
                          {/* Minus The Labels */}
                        <img className="column" src="/img/logos/MTLS logo.svg" alt="logo" style={{width:'5rem', height: '5rem'}} />
                        <div className="column alternate-font">
                            Minus The Labels
                        </div>
                        <div className="column alternate2-font">
                            Minus The Labels
                        </div>
                      </div>
                  </span>
              </h2>
            </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a  href="/cart" >
                <div style={{position: "relative"}}>
                  <img src="/img/cart.svg" alt="cart" style={{ width: "5rem", height: "5rem" }} />
                  {itemLength > 0 ? <div className="notification-dot"></div> : <></>}
                </div>
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  };
  
  export default NavBar;
  