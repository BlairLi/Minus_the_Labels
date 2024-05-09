import { useEffect, useState } from 'react';
import { itemTotal } from '../contexts/cartHelpers';

const LogoImage = ({ path, letter }) => (
    <img className='p-0' src={`${path}/${letter}.png`} alt={`logo ${letter}`} style={{width:'3rem', height: '2.3rem'}} />
);

const NavBar = () => {
    const [itemLength, setItemLength] = useState(0);
    const logoPath = '/img/logos';
    const letters = ['M', 'I', 'N', 'U', 'S1', 'T', 'H', 'E1', 'L1', 'A', 'B', 'E2', 'L2', 'S2'];

    useEffect(() => {
        const total = itemTotal();
        setItemLength(total);
    }, []);  // Removed itemLength from dependency array to prevent re-render loop

    return (
        <>
            <div className="logoNav is-fullhd">
                <div className="columns is-full is-centered m-0">
                  <div className='column p-0' />
                  <div className='columns is-vcentered'>
                    <img className='column p-1' src="/img/logos/MTLS logo.svg" alt="logo" style={{ width: '4rem', height: '4rem' }} />
                  </div>
                  <div className='column p-2'>
                    <div className="navbar-end">
                      {/* <a href="/cart"> */}
                      <a href="https://buy.stripe.com/test_cN2eX800i6dE76M28e">
                        <div style={{ position: "relative" }}>
                          <img src="/img/cart.svg" alt="cart" style={{ width: "3rem", height: "3rem" }} />
                          {itemLength > 0 && <div className="notification-dot" />}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className='column' />
                  <div className='column is-three-quarters'>
                    <div className='menuItem'>
                      {letters.map(letter => (
                          <LogoImage key={letter} path={logoPath} letter={letter} />
                      ))}
                    </div>
                  </div>
                  {/* <div className='column' /> */}
                </div>
            </div>
        </>
    );
};

export default NavBar;
