import React from "react";
import styles from "./link.module.css";

function Link({ link, children }) {
    return (
        <a href={link}
            target="_blank"
            rel="noopener noreferrer">
            <div className={styles.linkContainer}>
                <div className={styles.image}>{children}</div>
            </div>
        </a>
    );
}

export default Link;