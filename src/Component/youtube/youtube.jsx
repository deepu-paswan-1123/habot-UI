import React, { useState } from "react";
import youtube from "../../assets/Images/youtube.jpg";
import youtubeicon from "../../assets/Images/youtubeicon.png";
import { FaCircleCheck } from "react-icons/fa6";
import "../Css/youtube.css";

const Youtube = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active h3

  const handleClick = (index) => {
    setActiveIndex(index); // Set the active h3 index
  };
  return (
    <div className="youtube-container">
      <div className="inneryoutube-contianer">
        <div className="youtubeleft-container">
          <img src={youtube} alt="youtubeimg" />
          <div className="youtubeiconimage">
            <img src={youtubeicon} alt="" />
          </div>
        </div>
        <div className="youtuberight-outer-container">
          <div className="youtuberight-container">
            <div className="heading-container">
              <h3
                className={activeIndex === 0 ? "hover-effect" : ""}
                onClick={() => handleClick(0)}
              >
                Buyer
              </h3>
              <div className="heading-hover"></div>
            </div>
            <div className="heading-container">
              <h3
                className={activeIndex === 1 ? "hover-effect" : ""}
                onClick={() => handleClick(1)}
              >
                Supplier
              </h3>
              <div className="heading-hover"></div>
            </div>
          </div>
          <div className="youtube-text">
            <p><FaCircleCheck className="youtube-text-icon"/><span>Post your Requirment.</span></p>
            <p><FaCircleCheck className="youtube-text-icon"/><span>Sit back for multiple suppliers to contact you.</span></p>
            <p><FaCircleCheck className="youtube-text-icon"/><span>Choose among the suppliers based on the ratings and reveiws.</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
