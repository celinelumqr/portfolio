import React from "react";
import styles from "./alert.module.css";
import { RxCross1 } from "react-icons/rx";
import { BsCheckCircle } from "react-icons/bs";

function Alert(props) {
    if (!props.show) {
        return null;
    }
    return (
        <div className={styles.alert}>
            {props.success ? (
                <div className={styles.success}>
                    <BsCheckCircle className={styles.icon} />
                    <h4 className={styles.text}>{props.message}</h4>
                </div>
            ) : (
                    <div className={styles.failure}>
                        <RxCross1 className={styles.icon} />
                    <h4 className={styles.text}>{props.message}</h4>
                </div>
            )}
        </div>
    );
}

export default Alert;