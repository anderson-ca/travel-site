import React from 'react'
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p>
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email"
                            className='footer-input'
                            placeholder='your email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit Videos</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencers</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="socila-logo">
                            TRVL
                            <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="website-rights">TRVL © 2022</small>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            arai-label="Facebook"
                        >
                            <i className="fab facebook-f" />
                        </Link>
                        <Link
                            className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            arai-label="Instagram"
                        >
                            <i className="fab instagram" />
                        </Link>
                        <Link
                            className="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            arai-label="Youtube"
                        >
                            <i className="fab youtube" />
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            arai-label="Twitter"
                        >
                            <i className="fab twitter" />
                        </Link>
                        <Link
                            className="social-icon-link linkedin"
                            to="/"
                            target="_blank"
                            arai-label="LinkedIn"
                        >
                            <i className="fab linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
