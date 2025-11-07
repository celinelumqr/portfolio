import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaItchIo } from "react-icons/fa";
import styles from "./project.module.css";

function Project(props) {
    const [open, setOpen] = useState(false);

    const iconMap = {
        Itch: <FaItchIo size={22} />,
    };

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
                <div className={styles.projectOpen}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setOpen(false);
                    }}
                >
                    <div className={styles.projectOpenCard}>
                        <button
                            onClick={() => setOpen(false)}
                            className={styles.projectClose}
                        >
                            <IoMdClose />
                        </button>

                        <img
                            src={props.thumbnail}
                            alt={props.title}
                            className={styles.projectOpenImage}
                        />

                        <div className={styles.projectTextContainer}>
                            <h3 className={styles.projectCardTitle}>{props.title}</h3>

                            <div className={styles.projectTags}>
                                {props.tags.map((tag, i) => (
                                    <span key={i} className={styles.projectTag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className={styles.projectCardDetails}>{props.details}</p>

                            {props.links && Object.keys(props.links).length > 0 && (
                                <div className={styles.projectLinks}>
                                    {Object.entries(props.links).map(([label, url]) => (
                                        <a
                                            key={label}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectLinkIcon}
                                            title={label}
                                        >
                                            {iconMap[label] || <FaItchIo size={22} />}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}


        </>
    );
}

export default Project;