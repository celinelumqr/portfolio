import styles from "./App.module.css";
import Navbar from "./components/navbar";
import Main from "./pages/main";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
    return (
        <div className={styles.appContainer}>
            <a href="#content" className={styles.skipLink}>
                Skip to content
            </a>

            <Navbar />

            <main id="content" className={styles.bodyContainer} tabIndex="-1">
                <div id="home" className={styles.section}>
                    <Main />
                </div>
                <div id="about" className={styles.section}>
                    <About />
                </div>
                <div id="experience" className={styles.section}>
                    <Experience />
                </div>
                <div id="projects" className={styles.section}>
                    <Projects />
                </div>
                <div id="contact" className={styles.section}>
                    <Contact />
                </div>
            </main>
        </div>
    );
}

export default App;


