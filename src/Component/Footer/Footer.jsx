import React from 'react';
import habotimage from '../../assets/Images/Group 4.jpg'
import { IoLogoInstagram } from "react-icons/io5";
import '../Css/Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-inner-container">
                <div className="footer-left">
                    <div className='footer-img'>
                        <img src={habotimage} alt="habotimg"/>
                        <h2>habot</h2>
                    </div>
                    <p>&#xA9; <span>R Singhania</span></p>
                </div>
                <div className="footer-middle">
                    <div className="footer-address">
                        <h4>Company</h4>
                        <ul>
                            <li>About</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="footer-address">
                        <h4>Terms</h4>
                        <ul>
                            <li>Data Privacy</li>
                            <li>Terms</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                    <div className="footer-address">
                        <h4>Related</h4>
                        <ul>
                            <li>Find Buyer</li>
                            <li>Feedback</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-icon">
                        <IoLogoInstagram />
                    </div>
                    <div className="footer-icon">
                        <IoLogoInstagram />
                    </div>
                    <div className="footer-icon">
                        <IoLogoInstagram />
                    </div>
                    <div className="footer-icon">
                        <IoLogoInstagram />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
