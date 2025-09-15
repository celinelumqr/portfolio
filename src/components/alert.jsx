import React from "react";
import styles from "./alert.module.css";

/**
 * A generic alert component
 * @module AlertComponent
 
 @prop {boolean} [show] : show alert
 @prop {String} [text] : alert message
 @prop {boolean} [success] : alert success
**/

function Alert(props) {
    if (!props.show) {
        return null;
    }
    return (
        <div className={styles.alert}>
            {props.success ? (
                <div className={styles.success}>
                    <h4 className={styles.text}>{props.message}</h4>
                </div>
            ) : (
                <div className={styles.failure}>
                    <h4 className={styles.text}>{props.message}</h4>
                </div>
            )}
        </div>
    );
}

export default Alert;