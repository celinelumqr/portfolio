import React from "react";
import styles from "./link.module.css";

/**
 * A generic contact component
 * @module ContactComponent
 
 @prop {String} [link] : link to contact
 @prop {String} [image] : image
 @prop {boolean} [small] : if smaller box
**/

function Contact(props) {
    return (
        <a href={props.link}
            target="_blank"
            rel="noopener noreferrer">
            {!props.small ? (
                <div className={styles.contactContainer}>
                    <div className={styles.image}>{props.image}</div>
                </div>
            ) : (
                <div className={styles.contactContainerSmall}>
                    <div className={styles.imageSmall}>{props.image}</div>
                </div>
            )}
        </a>
    );
}

export default Contact;