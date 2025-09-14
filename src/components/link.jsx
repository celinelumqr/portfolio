import React from "react";
import styles from "./link.module.css";

function Link(props) {
    return (
        <a href={props.link}
            target="_blank"
            rel="noopener noreferrer">
            {!props.small ? (
                <div className={styles.linkContainer}>
                    <div className={styles.image}>{props.image}</div>
                </div>
            ) : (
                <div className={styles.linkContainerSmall}>
                    <div className={styles.imageSmall}>{props.image}</div>
                </div>
            )}
        </a>
    );
}

export default Link;