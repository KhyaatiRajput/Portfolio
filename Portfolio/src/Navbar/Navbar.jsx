import React, { useState, useRef, useEffect } from "react";
import { BsSoundwave } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const audioRef = useRef(null);

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="/logo.svg" alt="Logo" />
      </div>

      <div className="nav-menu">
        <a href="#home" className="menu-link">Home</a>
        <a href="#skill" className="menu-link">Skill</a>
        <a href="#project" className="menu-link">Project</a>
        <a href="#contact" className="menu-link">Contact</a>
      </div>

      <div className="nav-right">
        <button onClick={toggleSound} className="icon-btn">
          <BsSoundwave size={20} color={isPlaying ? "black" : "white"} />
        </button>
        <audio ref={audioRef} src="/music.wav" loop />
      </div>
    </nav>
  );
};

export default Navbar;
