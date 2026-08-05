import styles from "./main.module.css";

function Main() {
    return (
        <div className={styles.landing}>
            <div className={styles.landingText}>
                <p className={styles.eyebrow}>
                    Game Designer <span aria-hidden="true">·</span>{" "}
                    Narrative Designer <span aria-hidden="true">·</span>{" "}
                    Programmer
                </p>

                <h1 className={styles.name}>Celine Lum</h1>

                <p className={styles.statement}>
                    I create games where story, mechanics, and player choice shape each other.
                </p>

                <p className={styles.summary}>
                    My work spans gameplay systems, interactive narrative, rapid prototyping,
                    and production game design.
                </p>

                <div className={styles.actions}>
                    <a href="#projects" className={styles.primaryAction}>
                        View projects
                    </a>
                    <a href="#contact" className={styles.secondaryAction}>
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Main;
