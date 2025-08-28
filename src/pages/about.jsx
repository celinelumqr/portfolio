import React from 'react';
import "../about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Avatar / Illustration */}
        {/* <div className="about-image">
          <img src={avatar} alt="Avatar" />
        </div> */}

        {/* Text Content */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I’m <span className="highlight">Celine</span>, a recent Computer Science graduate and aspiring game developer.
          </p>
          <p>
            I’ve worked on everything from <strong>mobile games</strong> to <strong>collaborative team projects</strong> and <strong>game jams</strong>. I love creating playful, imaginative worlds that bring people joy, whether that means designing mechanics, building systems, or polishing the final details.
          </p>
          <p>
            Outside of coding, I enjoy exploring art, music, and storytelling: all things that inspire the cozy, whimsical spirit in me. My dream is to continue blending technology and creativity to craft games that feel like starlit adventures. 🌙
          </p>
          <button>View My Projects</button>
        </div>
      </div>
    </section>
  );
}