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

        <div className={styles.projectContainer}>
            <div className={styles.projectDetailsRight}>
                <div className={styles.framework}>
                    {props.showExpress && (
                        <div className={styles.frameworkItemAmber}>
                            <p>Express</p>
                        </div>
                    )}
                    {props.showMongoDB && (
                        <div className={styles.frameworkItemGreen}>
                            <p>MongoDB</p>
                        </div>
                    )}
                    {props.showDart && (
                        <div className={styles.frameworkItemIndigo}>
                            <p>Dart</p>
                        </div>
                    )}
                    {props.showFirebase && (
                        <div className={styles.frameworkItemAmber}>
                            <p>Firebase</p>
                        </div>
                    )}
                    {props.showSQLite && (
                        <div className={styles.frameworkItemIndigo}>
                            <p>SQLite</p>
                        </div>
                    )}
                    {props.showFigma && (
                        <div className={styles.frameworkItemRose}>
                            <p>Figma</p>
                        </div>
                    )}
                    {props.showCSharp && (
                        <div className={styles.frameworkItemIndigo}>
                            <p>C#</p>
                        </div>
                    )}
                    {props.showUnity && (
                        <div className={styles.frameworkItemRose}>
                            <p>Unity</p>
                        </div>
                    )}
                </div>
                <div className={styles.projectDescription}>
                    <p className={styles.description}>{props.projectDescription}</p>
                </div>
                <div className={styles.links}>
                    {props.figmaLink && (
                        <div className={styles.continuous}>
                            <a href={props.figmaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}>
                                Figma
                            </a>
                        </div>
                    )}
                    {props.githubLink && (
                        <div className={styles.continuous}>
                            <a href={props.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}>
                                Github
                            </a>
                        </div>
                    )}
                    {props.deployLink && (
                        <div className={styles.continuous}>
                            <a href={props.deployLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}>
                                Deploy
                            </a>
                        </div>
                    )}
                    {props.itchLink && (
                        <div className={styles.continuous}>
                            <a href={props.itchLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}>
                                Itch.io
                            </a>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </>
    );
}

export default Project;