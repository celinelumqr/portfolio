import React, { useEffect, useState } from "react";
import styles from "./project.module.css";

function Project(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className={styles.projectCard}
                onClick={() => setOpen(true)}
            >
                <img
                    src={props.thumbnail}
                    alt={props.title}
                    className={styles.projectImage}
                />
                <h3
                    className={styles.projectTitle}>
                    {props.title}
                </h3>
                <p className={styles.projectTagline}>
                    {props.tagline}
                </p>

                <div className={styles.projectTags}>
                    {props.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={styles.projectTag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {open && (
                <div className={styles.projectOpen}>
                    <div className={styles.projectOpenCard}>
                        <button
                            onClick={() => setOpen(false)}
                            className={styles.projectClose}
                        >
                            X
                        </button>
                        <h3 className={styles.projectCardTitle}>
                            {props.title}
                        </h3>
                        <p className={styles.projectCardDetails}>
                            {props.details}
                        </p>
                        <img
                            src={props.thumbnail}
                            alt={props.title}
                            className="rounded-md"
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Project;