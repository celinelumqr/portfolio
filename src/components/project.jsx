import React, { useEffect, useState } from "react";
import styles from "./project.module.css";

function Project(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isImageOnRight = isMobile ? false : props.right;

    return (
        <div className={styles.projectContainer}>
            {!isImageOnRight && (
                <div className={styles.projectImage}>
                    <img
                        src={props.image}
                        class={styles.image}
                        alt="project"
                    />
                </div>)
            }
            {!isImageOnRight && (
                <div className={styles.projectDetailsLeft}>
                    <div className={styles.projectName}>
                        <p className={styles.number}>{props.number}</p>
                        <p className={styles.title}>{props.projectName}</p>
                    </div>
                    <div className={styles.framework}>
                        {props.showHTMLCSS && (
                            <div className={styles.frameworkItemRose}>
                                <p>HTML/CSS</p>
                            </div>
                        )}
                        {props.showReact && (
                            <div className={styles.frameworkItemBlue}>
                                <p>React</p>
                            </div>
                        )}
                        {props.showPython && (
                            <div className={styles.frameworkItemPurple}>
                                <p>Python</p>
                            </div>
                        )}
                        {props.showDjango && (
                            <div className={styles.frameworkItemPurple}>
                                <p>Django</p>
                            </div>
                        )}
                        {props.showNode && (
                            <div className={styles.frameworkItemLime}>
                                <p>Node</p>
                            </div>
                        )}
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
            )
            }
            {isImageOnRight && (
                <div className={styles.projectDetailsRight}>
                    <div className={styles.projectName}>
                        <p className={styles.number}>{props.number}</p>
                        <p className={styles.title}>{props.projectName}</p>
                    </div>
                    <div className={styles.framework}>
                        {props.showHTMLCSS && (
                            <div className={styles.frameworkItemRose}>
                                <p>HTML/CSS</p>
                            </div>
                        )}
                        {props.showReact && (
                            <div className={styles.frameworkItemBlue}>
                                <p>React</p>
                            </div>
                        )}
                        {props.showPython && (
                            <div className={styles.frameworkItemPurple}>
                                <p>Python</p>
                            </div>
                        )}
                        {props.showDjango && (
                            <div className={styles.frameworkItemPurple}>
                                <p>Django</p>
                            </div>
                        )}
                        {props.showNode && (
                            <div className={styles.frameworkItemLime}>
                                <p>Node</p>
                            </div>
                        )}
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
            )
            }
            {isImageOnRight && (
                <div className={styles.projectImage}>
                    <img
                        src={props.image}
                        class={styles.image}
                        alt="project"
                    />
                </div>)
            }
        </div>
    );
}

export default Project;