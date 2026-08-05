import styles from "./experience.module.css";

function Experience() {
    const highlights = [
        { label: "Garena", value: "Game Developer · 2025" },
        { label: "Mighty Bear Games", value: "Game Design Intern · 2020–21" },
        { label: "Shipped titles", value: "2 Apple Arcade games" },
        { label: "Prototyping", value: "Roblox · Unity · C++" },
    ];

    return (
        <section className={styles.experience} aria-labelledby="experience-heading">
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>Industry experience</p>
                    <h2 id="experience-heading" className={styles.heading}>
                        From rapid prototypes to shipped games.
                    </h2>
                </div>

                <dl className={styles.highlights}>
                    {highlights.map((highlight) => (
                        <div key={highlight.label} className={styles.highlight}>
                            <dt className={styles.label}>{highlight.label}</dt>
                            <dd className={styles.value}>{highlight.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

export default Experience;
