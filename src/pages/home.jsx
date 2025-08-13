import React from 'react';
import moonImg from "../assets/moon.png";

const Home = () => {
    return (
        <section className="hero" id="home">
            <div className="star" style={{ top: "20%", left: "30%", width: "3px", height: "3px" }}></div>
            <div className="star" style={{ top: "40%", left: "60%", width: "4px", height: "4px" }}></div>
            <div className="star" style={{ top: "10%", left: "80%", width: "2px", height: "2px" }}></div>
            <div className="star" style={{ top: "70%", left: "50%", width: "3px", height: "3px" }}></div>
            <img src={moonImg} alt="Moon" className="moon" />
            
            <h1>Welcome to Moonforest</h1>
            <p>Hi! I’m Celine, a game developer who loves creating playful worlds.</p>
            <button>See My Work</button>
        </section>
    );
};

export default Home;
