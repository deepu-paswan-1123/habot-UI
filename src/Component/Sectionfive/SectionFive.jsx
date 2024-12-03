import React from 'react';
import { MdContactPhone } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import { HiPencilAlt } from "react-icons/hi";
import { GrContactInfo } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa6";
import '../Css/SectionFive.css'

const SectionFive = () => {
    return (
        <div className='sectionive-outer-container'>
            <div className="sectionfive-inner-contianer">
                <div className="sectionfive-text">
                    <h2>How it works?</h2>
                    <div className='par-text'>
                        <p>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with</p>
                        <p>potential buyers, and build successful business relationships, sharing valuable feedback.</p>
                    </div>
                </div>
                <div className="sectionfive-icon">
                    <div className="sectionfive-box odd">
                        <MdContactPhone style={{fontSize:'30px'}}/>
                        <div className='five-text'>
                            <p>Select Your Role and</p>
                            <p>Sign Up</p>
                        </div>
                    </div>
                    <div className="sectionfive-box even">
                        <FaFileSignature style={{fontSize:'30px'}}/>
                        <div className='five-text'>
                            <p>Buyers Post Your</p>
                            <p>Requirements</p>
                        </div>
                    </div>
                    <div className="sectionfive-box odd">
                        <BsFileEarmarkImageFill style={{fontSize:'30px'}}/>
                        <div className='five-text'>
                            <p>Review,Select and </p>
                            <p>Contact the Best Suppliers</p>
                        </div>
                    </div>
                    <div className="sectionfive-box even">
                        <HiPencilAlt style={{fontSize:'30px'}}/>
                        <div className='five-text'>
                            <p>Suppliers Completer your</p>
                            <p>Profile and get notified for</p>
                            <p>oppertunities</p>
                        </div>
                    </div>
                    <div className="sectionfive-box odd">
                        <GrContactInfo style={{fontSize:'30px'}}/>
                        <div className='five-text'>
                            <p>Contact to buyers and share</p>
                            <p>your Quote for the service</p>
                        </div>
                    </div>
                    <div className="sectionfive-box even">
                        <FaHandshake style={{fontSize:'30px'}}/>
                        <div className='five-text'>
                            <p>Both the Parties can Connect</p>
                            <p>and Make Buiseness Leave to</p>
                            <p>Feedback</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionFive;
