import React from 'react';
import Navbar from "./components/navbar";
import About from './pages/about';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Contact from './pages/contact';

function App() {
    return (
        <>
            <Navbar />
            <main>
                    <section id="about"><About /></section>
                    <section id="projects"><Projects /></section>
                    <section id="resume"><Resume /></section>
                    <section id="contact"><Contact /></section>
            </main>
        </>
    );
}

export default App;
