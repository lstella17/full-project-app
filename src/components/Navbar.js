import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import { Button } from './Button';
import './BtnNav.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
            STELLA TRVL
            <i class='fab fa-typo3' />
          </a>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <a href='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href='/weekends' className='nav-links' onClick={closeMobileMenu}>
                  Weekends
                </a>
              </li>
              <li className='nav-item'>
                <a href='/summer2022' className='nav-links' onClick={closeMobileMenu}>
                  Summer 2022
                </a>
              </li>
              <li className='nav-item'>
                <a href='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                  Sign in
                </a>
              </li>
              <li>
                <a href='/sign-up'className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </a>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
      </nav>
    </>
  );
}

export default Navbar;
