import React from 'react';
import hero from '../../assets/Images/hero.png';
import { RiSuitcaseFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import '../Css/Hero.css';

const Hero = () => {
    return (
        <div className='hero-cotainer'>
            <div className='image-container'>
                <div className='image-text'>
                    <h1>Are you a Supplier?</h1>
                    <p>Explore Matching Opportunities</p>
                    <div className="input-container">
                        <div className='input-box'>
                            <span>
                                <RiSuitcaseFill className='input-icon'/>
                                <input type="text" placeholder='search your required services' />
                            </span>
                            <span>
                                <MdLocationPin className='input-icon'/>
                                <input type="text" placeholder='search your desired location here' />
                            </span>
                            <button >search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
