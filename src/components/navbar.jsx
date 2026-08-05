import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar} aria-label="Primary navigation">
            <div className={styles.navbarInner}>
                <a href="#home" className={styles.name}>
                    Celine Lum
                </a>
                <div className={styles.navigation}>
                    <a href="#about" className={styles.navbarLink}>
                        About
                    </a>
                    <a href="#experience" className={styles.navbarLink}>
                        Experience
                    </a>
                    <a href="#projects" className={styles.navbarLink}>
                        Work
                    </a>
                    <a href="#contact" className={styles.navbarLink}>
                        Contact
                    </a>
                </div>

                <a
                    href={`${process.env.PUBLIC_URL}/resume.pdf`}
                    className={styles.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume <span aria-hidden="true">↗</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
