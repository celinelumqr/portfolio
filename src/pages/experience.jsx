import styles from "./experience.module.css";

function Experience() {
    const roles = [
        {
            company: "Garena",
            title: "Game Developer (GRIT Trainee)",
            dates: "Feb 2025–Aug 2025",
            description:
                "Prototyped social multiplayer game concepts in Roblox and Unity through rapid two-week development sprints, contributing across game design and programming.",
        },
        {
            company: "Mighty Bear Games",
            title: "Game Design Intern",
            dates: "Jul 2020–Jun 2021",
            description:
                "Contributed to game design, documentation, playtesting, and early prototyping across two shipped Apple Arcade titles.",
        },
    ];

    return (
        <section className={styles.experience} aria-labelledby="experience-heading">
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>Professional experience</p>
                    <h2 id="experience-heading" className={styles.heading}>
                        Experience
                    </h2>
                    <p className={styles.summary}>
                        Roles across rapid prototyping and production game design.
                    </p>
                </div>

                <div className={styles.roles}>
                    {roles.map((role) => (
                        <article key={role.company} className={styles.role}>
                            <div className={styles.roleHeader}>
                                <div>
                                    <h3 className={styles.title}>{role.title}</h3>
                                    <p className={styles.company}>{role.company}</p>
                                </div>
                                <p className={styles.dates}>{role.dates}</p>
                            </div>
                            <p className={styles.description}>{role.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;