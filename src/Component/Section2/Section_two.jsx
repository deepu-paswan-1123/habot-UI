import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import '../Css/Section_two.css';

const SectionTwo= () => {
    const button_arr=['Abu Dhabi','Dubai','Sharajh & Ajman','Fujairah','Ras AI Khaimah','Umm AI Quwain'];
    return (
        <div className='sectiontwo_container'>
            <div className='sectiontwo_leftcontainer'>
                <h2>Ready to dive into Habot?</h2>
                <p>
                    Signing up with HABOT opens the door to a world of new opportunities and potential 
                    for business growth. Gain access to a vibrant community of like-minded individuals, 
                    unlock valuable resources, and take the first step towards realizing your 
                    entrepreneurial dreams.
                </p>
                <button>Sign up Today! <span><BsArrowRight className='arrow-icon'/></span></button>
            </div>
            <div className='sectiontwo_rightcontaienr'>
                {button_arr.map((item, index) => (
                    <button key={index}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SectionTwo;
