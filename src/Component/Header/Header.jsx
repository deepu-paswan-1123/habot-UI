import React,{useState} from 'react';
import habotimage from '../../assets/Images/habot logo.png'
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import MobileHeader from './MobileHeader';
import '../Css/Header.css';


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle menu

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle menu state
    };

    return (
        <div>
        <div className='header-container'>
            <div className="logo">
                <img src={habotimage} alt="" />
            </div>
            <div>
                <ul className='header-name'>
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
            {isMobileMenuOpen ? (
                <RxCross2 className='menuicon cross' onClick={toggleMenu} />
            ) : (
                <IoMenuOutline className='menuicon' onClick={toggleMenu} />
            )}


        </div>
            {isMobileMenuOpen && <MobileHeader isMobileMenuOpen={isMobileMenuOpen}/>}
        </div>
    );
}

export default Header;
