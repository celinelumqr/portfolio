import React from "react";
import styles from "./link.module.css";

function Link({ href, label, external = false, children }) {
    return (
        <a
            href={href}
            aria-label={label}
            className={styles.link}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
        >
            {children}
        </a>
    );
}

export default Link;
