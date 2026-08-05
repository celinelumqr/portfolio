import styles from "./about.module.css";

function About() {
    return (
        <section className={styles.page} aria-labelledby="about-heading">
            <div className={styles.aboutBody}>
                <h2 id="about-heading" className={styles.header}>
                    About
                </h2>

                <div className={styles.content}>
                    <div className={styles.bodyText}>
                        <p className={styles.paragraph}>
                            I'm a game designer and developer with a Computer Science background, working at the intersection of narrative, systems, and gameplay programming. I'm especially interested in experiences where players understand a story through what they do, not only through what they're told.
                        </p>

                        <p className={styles.paragraph}>
                            My experience spans rapid multiplayer prototyping at Garena, production game design at Mighty Bear Games, and independent projects exploring branching narrative, puzzle mechanics, and player choice. I enjoy roles where I can move between design and implementation, collaborating with multidisciplinary teams to turn ideas into playable experiences.
                        </p>

                        <dl className={styles.details}>
                            <div className={styles.detail}>
                                <dt>Interested in</dt>
                                <dd>Game design, narrative design, and gameplay prototyping</dd>
                            </div>
                            <div className={styles.detail}>
                                <dt>Core tools</dt>
                                <dd>Unity, Roblox, Godot, Twine, C#, and C++</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
