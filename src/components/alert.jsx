import React, { useEffect } from "react";
import styles from "./alert.module.css";
import { RxCross1 } from "react-icons/rx";
import { BsCheckCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const ALERT_DURATION = 5000;

function Alert(props) {
    useEffect(() => {
        if (!props.show) {
            return undefined;
        }

        const dismissTimer = setTimeout(props.onClose, ALERT_DURATION);
        return () => clearTimeout(dismissTimer);
    }, [props.show, props.onClose]);

    if (!props.show) {
        return null;
    }

    const isSuccess = props.success;

    return (
        <div className={styles.alertContainer}>
            <div
                className={`${styles.alert} ${isSuccess ? styles.success : styles.failure}`}
                role={isSuccess ? "status" : "alert"}
                aria-live={isSuccess ? "polite" : "assertive"}
                style={{ "--alert-duration": `${ALERT_DURATION}ms` }}
            >
                <div className={styles.statusIcon} aria-hidden="true">
                    {isSuccess ? <BsCheckCircle /> : <RxCross1 />}
                </div>

                <div className={styles.content}>
                    <p className={styles.title}>
                        {isSuccess ? "Message sent" : "Message couldn't be sent"}
                    </p>
                    <p className={styles.message}>{props.message}</p>
                    {!isSuccess && (
                        <a className={styles.emailLink} href="mailto:celinelqr@gmail.com">
                            Email me directly
                        </a>
                    )}
                </div>

                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={props.onClose}
                    aria-label="Dismiss notification"
                >
                    <IoMdClose />
                </button>
            </div>
        </div>
    );
}

export default Alert;
