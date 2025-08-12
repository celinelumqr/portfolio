import React from 'react';
import Navbar from "./components/navbar";
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
    return (
        <>
            <Navbar />
            <main>
                    <section id="home"><Home /></section>
                    <section id="about"><About /></section>
                    <section id="projects"><Projects /></section>
                    <section id="contact"><Contact /></section>
            </main>
        </>
    );
}

export default App;
