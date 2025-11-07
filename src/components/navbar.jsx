import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <span className={styles.navbarLeft}>
                <a href='#main'>
                    <img
                        src={require("../static/images/moonforest-logo.png")}
                        className={styles.navbarLogo}
                        alt="logo"
                    />
                </a>
                <a href='#main' className={styles.navbarBrand}>
                    MOONFOREST
                </a>
            </span>
            <span className={styles.navbarRight}>
                <a href='#main' className={styles.navbarLink}>
                    Home
                </a>
                <a href='#about' className={styles.navbarLink}>
                    About
                </a>
                <a href='#projects' className={styles.navbarLink}>
                    Projects
                </a>
                <a href='#contact' className={styles.navbarLink}>
                    Contact
                </a>
            </span>
        </nav>
    );
}

export default Navbar;