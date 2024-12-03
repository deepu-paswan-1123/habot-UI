import React from 'react';
import Header from './Header';
const MobileHeader = ({isMobileMenuOpen}) => {
    return (
        <div  className={`mobileheader-container ${
            isMobileMenuOpen && 'slide-down' 
        }`}>
            <ul className='mobileheader-name'>
                <li><a href="#">Find Suppliers</a></li>
                <li>
                    <select name="" id="">
                        <option value="">Find Service Tags</option>
                        <option value="">Home</option>
                        <option value="">Home</option>
                        <option value="">Home</option>
                    </select>
                </li>
                <li>
                    <button>Login/Sign Up</button>
                </li>
            </ul>
        </div>
    );
}

export default MobileHeader;
