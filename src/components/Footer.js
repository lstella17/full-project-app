import React from 'react';
import './BtnNav.css';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <a href='/'>How it works</a>
            <a href='/'>Testimonials</a>
            <a href='/'>Careers</a>
            <a href='/'>Investors</a>
            <a href='/'>Terms of Service</a>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href='/'>Contact</a>
            <a href='/'>Support</a>
            <a href='/'>Destinations</a>
            <a href='/'>Sponsorships</a>
          </div>
        </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='/'>Instagram</a>
            <a href='/'>Facebook</a>
            <a href='/'>Youtube</a>
            <a href='/'>Twitter</a>
          </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a href='/' className='social-logo'>
              STELLA TRVL
              <i class='fab fa-typo3' />
            </a>
          </div>
          <small class='website-rights'>STELLA TRVL © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='/'
              target='_blank'
              aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='/'
              target='_blank'
              aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='/'
              target='_blank'
              aria-label='Youtube'>
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='Twitter'>
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='LinkedIn'>
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;