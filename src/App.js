import logo from './logo.svg';
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./pages/about";

function App() {
  return (
    <div className={styles.appContainer}>
      <Router>
        <div className={styles.navContainer}>
          <Navbar />
        </div>
        <div className={styles.bodyContainer}>
          <section id="about">
            <About />
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
