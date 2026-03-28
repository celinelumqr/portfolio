import React, { useState } from "react";
import styles from "./projects.module.css";
import Project from "../components/project";

function Projects() {
    const [filter, setFilter] = useState("All");

    const projects = [
        
        {
            title: "Scop, Sing Us a Song",
            tagline: "The fire waits. The king is gone. Your voice is all that remains.",
            tags: ["Twine", "HTML", "CSS", "JavaScript", "Narrative Design"],
            thumbnail: require("../static/images/scop-sing-us-a-song.png"),
            details: `Set during Beowulf's funeral, Scop, Sing Us a Song explores impermanence through the lens of oral storytelling and memory. You play as a scop (an Old English poet) tasked with recounting stories of the fallen king before the fire burns out. What is remembered, and how it is remembered, shifts with every playthrough.

Each story choice shapes the tone of the funeral, from glorified legend to quiet lament. Two interlocking systems, "forgotten stories" and "forgotten names", ensure that tales told often grow stronger in memory while others fade, mechanically mirroring the fragility of legacy itself.

Designed, written, and programmed entirely in Twine with custom HTML, CSS, and JavaScript, this was the culminating project of a Digital Humanities minor, built around the theme of the permanence of impermanence as explored through Beowulf.`,
            links: {
                itch: "https://serenecaelum.itch.io/scop-sing-us-a-song"
            }
        },
        {
            title: "Iris",
            tagline: "Who's really in control?",
            tags: ["Twine", "HTML", "CSS", "JavaScript", "Narrative Design"],
            // thumbnail: require("../static/images/iris.png"),
            details: `Iris is a short interactive narrative where players assume the role of a young girl trying to escape a mysterious facility... or so they think. The game initially presents itself as a straightforward escape story, but subtle visual glitches and contradictions slowly reveal that the player is not who they think they are.

Three branching endings emerge from the player's choices, each reframing the question of agency and complicity differently. Custom styling, including colour-coded text, timed effects, and sound design, reinforces the disorientation as the truth becomes apparent.`,
            links: {
                itch: "https://serenecaelum.itch.io/iris"
            }
        },
        {
            title: "Mirror's Memento",
            tagline: "Who will live and who will die?",
            tags: ["Unity", "C#", "Programming", "Game Design", "Narrative Design", "Puzzle Design"],
            thumbnail: require("../static/images/mirrors-memento.png"),
            details: `Mirror's Memento is a puzzle game where you guide a young girl trapped in a mysterious dungeon of mirrored chambers. Each room contains a doppelganger that mimics your every move, forcing you to use environmental traps and subtle room differences to outwit, and destroy, your reflection in order to escape.

Developed over a full semester as part of a university game development course, the project brought together a cross-disciplinary team of programmers, artists, and musicians. On the technical side, I implemented core puzzle systems in Unity, including switches, conveyors, and room rotation, and developed a BFS-driven hint system to guide players through tougher levels. On the narrative side, I designed the story structure, wrote the in-level flavour text, and scripted the intro and outro cutscenes.`,
            links: {
                itch: "https://kleinkodes.itch.io/doppelganger"
            }
        },
        {
            title: "The Doughfather",
            tagline: "The house always crumbs out on top.",
            tags: ["Godot", "GDScript", "Narrative Design", "Game Jam"],
            thumbnail: require("../static/images/doughfather.png"),
            details: `The Doughfather is a quirky pachinko game where you must pay off your debts to the infamous "Doughfather." Drop your cookies, take risks, and pray for good bounces as you work to clear what you owe, one cookie at a time.

Created in 7 days for the Brackeys Game Jam 2025.2 with a small team, built around the theme "Risk it for the Biscuit." I conceived the cookie mafia theme and wrote the flavour text that gave the game its personality, from the opening hook to randomised one-liners on the pause menu. I also handled art integration and juice systems in Godot, bringing the game's sugary underbelly to life.`,
            links: {
                itch: "https://jiputer.itch.io/the-doughfather"
            }
        },
        {
            title: "Anamnesis",
            tagline: "The remembering of things from a previous existence.",
            tags: ["C++", "C#", "Game Design", "Programming"],
            thumbnail: require("../static/images/anamnesis.png"),
            details: `Anamnesis is a 2D puzzle-platformer where players solve challenges with the help of a ghost from their past life. Upon death, the player respawns alongside a spectral echo that replays their previous run in real time, forcing players to strategically plan and sacrifice each attempt to hold switches, distract enemies, and create paths for their future self.

A solo prototype built in 72 hours using Ubisoft's minimalist C++ API as part of the Develop at Ubisoft program.`,
            links: {
            }
        },
        {
            title: "Golfers of the Galaxy",
            tagline: "All golfers start somewhere.",
            tags: ["C++", "C#", "Game Design", "Programming"],
            thumbnail: require("../static/images/golfers-galaxy.png"),
            details: `Golfers of the Galaxy is a 2D physics-based minigolf game where players launch a golf ball across a system of rotating planets, each with its own gravitational pull. Players click and drag to aim and shoot, carefully planning their trajectory around planetary orbits, rotations, and shifting gravity wells.

A solo prototype built in 96 hours using Ubisoft's minimalist C++ API for the Ubisoft NEXT competition.`,
            links: {
            }
        },
        {
            title: "Webster Booster",
            tagline: "Just a spider with a jetpack.",
            tags: ["Unity", "C#", "Game Jam", "Programming", "VFX"],
            thumbnail: require("../static/images/webster-booster.png"),
            details: `Webster Booster is a fast-paced arcade game where you control a jet-propelled spider chasing bugs across a vibrant arena. Hunt down the elusive green bug, dodge red bugs, and loop around yellow ones to gain speed boosts, a mechanic designed directly around the jam's theme of "Loop."

Developed in 96 hours for the GMTK Game Jam 2025 as part of a small multidisciplinary team. I was responsible for implementing the visual effects, including particle systems for kills, jetpack boosts, and loop completions, as well as the fuel system and interactive menu.`,
            links: {
                itch: "https://noorilu.itch.io/webster-booster"
            }
        },
        {
            title: "Butter Royale",
            tagline: "Have the food fight of your life!",
            tags: ["Game Design", "Internship", "Apple Arcade"],
            thumbnail: require("../static/images/butter-royale.jpg"),
            details: `Butter Royale is a lighthearted battle royale developed by Mighty Bear Games, released exclusively on Apple Arcade in January 2020.

As a game design intern, I contributed to the design and documentation of quality-of-life features including a replay system and daily login rewards. I also conducted playtesting sessions and handled player support, collaborating closely with the design team throughout the iteration process.`,
            links: {}
        },
        {
            title: "Disney Melee Mania",
            tagline: "Cue the lights! Hear the fans roar!",
            tags: ["Game Design", "Internship", "Apple Arcade"],
            thumbnail: require("../static/images/disney-melee-mania.jpg"),
            details: `Disney Melee Mania was a 3v3 arena brawler featuring beloved Disney and Pixar characters, each reimagined with distinct, action-ready designs and signature abilities.

As a game design intern, I supported combat design by researching source material across Disney and Pixar properties to identify canonically accurate ability inspirations, a key requirement given Disney's strict licensing standards. I compiled visual references including animation screenshots to guide the design and art teams, and contributed to the early prototyping of a power-up system.`,
            links: {}
        }
    ];

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.tags.includes(filter)
    );

    return (
        <div className={styles.projectsBody}>
            <h1 className={styles.header}>
                The Forest of a Thousand Stars
            </h1>

            <div className={styles.filters}>
                {["All", "Game Design", "Narrative Design", "Programming"].map((category) => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${filter === category ? styles.activeFilter : ""
                            }`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={styles.projectsGrid}>
                {filteredProjects.map((p) => (
                    <Project
                        key={p.title}
                        title={p.title}
                        tagline={p.tagline}
                        tags={p.tags}
                        thumbnail={p.thumbnail}
                        details={p.details}
                        links={p.links}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;