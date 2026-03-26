import styles from "./about.module.css";
import { IoGameController } from "react-icons/io5";
import { FaCode, FaPenFancy } from "react-icons/fa";
import { useEffect, useState } from "react";

function About() {
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

    return (
        <div className={styles.page}>
            <div className={styles.aboutBody}>
                <h1 className={styles.header}>
                    Dreamer Beneath the Moon
                </h1>

                {isMobile && (
                    <div className={styles.aboutImage}>
                        <img
                            className={styles.avatar}
                            src={require("../static/images/avatar.png")}
                            alt="avatar"
                        />
                    </div>
                )}

                <div className={styles.content}>
                    <div className={styles.bodyText}>
                        <p className={styles.paragraph}>
                            I'm a game developer who believes games are more than just entertainment, they're stories we live inside. Whether it's through tight mechanics or immersive narratives, I strive to create experiences that linger with players long after the credits roll.
                        </p>
                        <p className={styles.paragraph}>
                            I recently graduated from the University of Toronto with a degree in Computer Science, where I combined technical foundations with my passion for storytelling. Along the way, I've explored game design and programming through internships, collaborative group projects, fast-paced game jams, and solo experiments, many of which you'll find showcased here.
                        </p>
                        <p className={styles.paragraph}>
                            My focus is on narrative design and gameplay mechanics, weaving together story and system so they feel inseparable. To me, the best games don't just tell you a tale, they let you discover it, shape it, and carry it with you.
                        </p>
                    </div>

                    {!isMobile && (
                        <div className={styles.aboutImage}>
                            <img
                                className={styles.avatar}
                                src={require("../static/images/avatar.png")}
                                alt="avatar"
                            />
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default About;
