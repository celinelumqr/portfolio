import styles from "./App.module.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

function App() {
    return (
        <div className={styles.appContainer}>
            <Router>
                <div className={styles.navContainer}>
                    <Navbar />
                </div>
                <div className={styles.bodyContainer}>
                    <section id="main">
                        <Main />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <section id="resume">
                        <Resume />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </div>
            </Router>
        </div>
    );
}

export default App;
