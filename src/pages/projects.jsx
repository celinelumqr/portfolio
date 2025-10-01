import React from "react";
import styles from "./projects.module.css";
import Project from "../components/project";

function Projects() {
    return (
        <div className={styles.projectsBody}>
            <div className={styles.header}>
                <h1 className={styles.headerText}>
                    The Forest of a Thousand Stars
                </h1>
            </div>
            <div className={styles.filters}>
                <button className={styles.filterButton}>
                    All
                </button>
                <button className={styles.filterButton}>
                    Game Design
                </button>
                <button className={styles.filterButton}>
                    Programming
                </button>
                <button className={styles.filterButton}>
                    Narrative Design
                </button>
            </div>
            <div className={styles.projectsGrid}>
                <Project
                    title="Butter Royale"
                    tagline="A narrative-driven puzzle game"
                    tags={["Unity", "Narrative Design", "PC"]}
                    image={require("../static/images/avatar.png")}
                    showPython={true}
                />
            </div>
        </div>
    );
}

export default Projects;