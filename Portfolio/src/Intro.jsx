import React from "react";
import { IoIosMail } from "react-icons/io";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import "./Intro.css";


const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-left">
        <p className="stars">Welcome to my world</p>
        <p className="hi">Hi, I'm <span className="name">Khushboo Rajput</span></p>
        <h4>
          <span className="website">Website</span> <span className="designer">Designer</span>
        </h4>

        <p className="intro-line">
          I create beautiful and functional websites. Bringing creativity <br/>
          and technology together. Crafting designs that users love.
        </p>

        <div className="social-icon">
       <a href="mailto:khushboorajput0407@gmail.com" target="_blank" rel="noreferrer">
    <IoIosMail className="icon"/>
  </a>
        <a href="https://www.linkedin.com/in/khushboo-undefined-818b03280/" target="_blank" rel="noreferrer">
    <LiaLinkedinIn className="icon"/>
  </a>
        <a href="https://github.com/KhyaatiRajput" target="_blank" rel="noreferrer">
    <FaGithub className="icon"/>
  </a>
      </div>
      </div>
      <div className="intro-right">
        <img src="/introphoto.png" alt="photo" />
      </div>
    
    </div>
  );
};

export default Intro;
