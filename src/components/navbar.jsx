import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import styles from "./navbar.module.css";

function Navbar() {
    return (
        <nav id={styles.navigationBar}>
            <span id={styles.navItemLeft}>
                <a href='#about'>
                    <img
                        src={require("../static/images/moonforest-logo.png")}
                        className={styles.navIcon}
                        alt="logo"
                    />
                </a>
                <a href='#about' className={styles.navLogo}>
                    moonforest
                </a>
            </span>

            <span id={styles.navItem}>
                <a href='#about' className={styles.navLink}>
                    About
                </a>
                <a href='#projects' className={styles.navLink}>
                    Projects
                </a>
                <a href='#resume' className={styles.navLink}>
                    Resume
                </a>
                <a href='#contact' className={styles.navLink}>
                    Contact
                </a>
            </span>
        </nav>
    );
}

export default Navbar;