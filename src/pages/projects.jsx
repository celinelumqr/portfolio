import React, { useState } from "react";
import styles from "./projects.module.css";
import Project from "../components/project";

function Projects() {
    const [filter, setFilter] = useState("All");

    const projects = [
        
        {
            title: "Bite Club",
            tagline: "YOU TURNED MY ROOM INTO A WHAT???",
            tags: ["Unity", "C#", "Game Jam", "Programming", "Game Design"],
            thumbnail: require("../static/images/bite-club.png"),
            details: `Bite Club is a vampire boxing game where you play as Countess Darcy, returning home from college to discover that her brother, Count Drake, has turned her childhood bedroom into an underground boxing ring. To reclaim her room, Darcy must fight through Drake's best fighters before challenging him.

Combat combines rhythm-based attacks, where players hit randomly appearing numbered targets in descending order to the beat, with reaction-based directional dodging. Knockdown recovery adds another layer, requiring players to perfectly clear a round of targets to recover or prevent their opponent's revival.

Developed for GMTK Game Jam 2026 as part of a two-person team. I proposed the initial boxing concept and countdown-based attack mechanic, then collaborated with my teammate to develop the combat design. I independently handled all programming in Unity, including combat systems, enemy behaviour, UI, and knockdown recovery.`,
            links: {
                itch: "https://foraii.itch.io/bite-club"
            }
        },
        {
            title: "Mirror's Memento",
            tagline: "Who will live and who will die?",
            tags: ["Unity", "C#", "Programming", "Game Design", "Narrative Design", "Puzzle Design"],
            thumbnail: require("../static/images/mirrors-memento.png"),
            details: `Mirror's Memento is a puzzle game where you guide a young girl trapped in a mysterious dungeon of mirrored chambers. Each room contains a doppelganger that mimics your every move, forcing you to use environmental traps and subtle room differences to outwit, and destroy, your reflection in order to escape.

Developed over a full semester as part of a university game development course, the project brought together a cross-disciplinary team of programmers, artists, and musicians.

I collaborated with the team on puzzle mechanics design, contributing to discussions that shaped the game's core interactions. I also designed the narrative structure and wrote all flavour text and cutscenes.

On the programming side, I implemented core puzzle systems including switches, conveyors, and room rotation. In response to playtester feedback, I independently designed and implemented a BFS-driven hint system that searches for a solution from the current puzzle state and highlights the next significant interaction, or prompts the player to restart if the puzzle is unsolvable.`,
            links: {
                itch: "https://kleinkodes.itch.io/doppelganger"
            }
        },
        {
            title: "Scop, Sing Us a Song",
            tagline: "The fire waits. The king is gone. Your voice is all that remains.",
            tags: ["Twine", "HTML", "CSS", "JavaScript", "Game Design", "Narrative Design"],
            thumbnail: require("../static/images/scop-sing-us-a-song.png"),
            details: <>Set during Beowulf's funeral, <em>Scop, Sing Us a Song</em>{` explores impermanence through the lens of oral storytelling and memory. You play as a scop (an Old English poet) tasked with recounting stories of the fallen king before the fire burns out. What is remembered, and how it is remembered, shifts with every playthrough.

Each story choice shapes the tone of the funeral, from glorified legend to quiet lament. Two interlocking systems, "forgotten stories" and "forgotten names", explore how stories and identities survive through retelling. Tales recounted more often become more likely to appear in future playthroughs, while neglected tales gradually fade from memory. Characters whose stories go untold can even lose their names, becoming anonymous figures in the remaining text.

Designed, written, and programmed entirely in Twine with custom HTML, CSS, and JavaScript, this was the culminating project of a Digital Humanities minor, built around the theme of the permanence of impermanence as explored through `}<em>Beowulf</em>.</>,
            links: {
                itch: "https://serenecaelum.itch.io/scop-sing-us-a-song"
            }
        },
        {
            title: "Anamnesis",
            tagline: "The remembering of things from a previous existence.",
            tags: ["C++", "Game Design", "Programming"],
            thumbnail: require("../static/images/anamnesis.png"),
            details: `Anamnesis is a 2D puzzle-platformer where death becomes a tool for solving puzzles. Each time the player dies, they respawn alongside a ghost that replays their previous life's actions in real time. Ghosts persist across subsequent deaths, allowing players to coordinate with their past selves to hold switches, distract enemies, and create paths that would otherwise be inaccessible.

Designed and programmed independently in 72 hours using Ubisoft's minimalist C++ API as part of the Develop at Ubisoft program.`,
            links: {
            }
        },
        {
            title: "Golfers of the Galaxy",
            tagline: "All golfers start somewhere.",
            tags: ["C++", "Game Design", "Programming"],
            thumbnail: require("../static/images/golfers-galaxy.png"),
            details: `Golfers of the Galaxy is a 2D physics-based minigolf game set among rotating planets, each exerting its own gravitational pull. Players click and drag to aim their shots, navigating planetary rotation and gravity to reach the hole.

Designed and programmed independently in 96 hours for the Ubisoft NEXT competition, using Ubisoft's minimalist C++ API. I developed the game's physics-based mechanics and level system, including a playable level built around the interaction between gravity and planetary rotation.`,
            links: {
            }
        },
        {
            title: "Iris",
            tagline: "Who's really in control?",
            tags: ["Twine", "HTML", "CSS", "JavaScript", "Game Design", "Narrative Design"],
            thumbnail: require("../static/images/iris.png"),
            details: `Iris is a short interactive narrative in which players believe they're guiding a young girl through her escape from a mysterious facility. As the story unfolds, contradictions in the narration and interface begin to challenge the player's understanding of whose perspective they're experiencing, and who is actually in control.

Player choices lead to three distinct endings: following orders, defying them, or repeatedly making seemingly irrational decisions that gradually undermine the player's control over the story. Colour-coded text, visual glitches, timed effects, and sound cues distinguish competing perspectives and gradually reveal the truth behind the player's role.

Designed, written, and programmed independently in Twine, Iris explores player agency, control, and complicity through both its branching narrative and presentation.`,
            links: {
                itch: "https://serenecaelum.itch.io/iris"
            }
        },
        {
            title: "The Doughfather",
            tagline: "The house always crumbs out on top.",
            tags: ["Godot", "GDScript", "Programming", "Narrative Design", "Game Jam"],
            thumbnail: require("../static/images/doughfather.png"),
            details: `The Doughfather is a pachinko game where players gamble cookies to pay off their debts to the infamous "Doughfather". Drop cookies, take risks, and hope for favourable bounces as you work towards clearing what you owe.

Developed in seven days by a small team for Brackeys Game Jam 2025.2, themed "Risk it for the Biscuit". I conceived the cookie mafia premise and wrote the game's flavour text, including the opening narrative and randomised pause-menu dialogue. I also handled art integration and juice systems in Godot.`,
            links: {
                itch: "https://jiputer.itch.io/the-doughfather"
            }
        },
        {
            title: "Webster Booster",
            tagline: "Just a spider with a jetpack.",
            tags: ["Unity", "C#", "Game Jam", "Programming", "VFX"],
            thumbnail: require("../static/images/webster-booster.png"),
            details: `Webster Booster is a fast-paced arcade game where players control a jet-propelled spider hunting bugs across an arena. Chase down the elusive green bug, avoid dangerous red bugs, and loop around yellow bugs to gain speed boosts, a mechanic inspired by the GMTK Game Jam 2025 theme, "Loop".

Developed in 96 hours by a small multidisciplinary team. My contributions were focused on programming: I implemented the fuel system, interactive menu, and visual effects, including particle effects for bug kills, jetpack boosts, and completed loops.`,
            links: {
                itch: "https://noorilu.itch.io/webster-booster"
            }
        },
        {
            title: "Butter Royale",
            tagline: "Have the food fight of your life!",
            tags: ["Game Design", "Internship", "Apple Arcade"],
            thumbnail: require("../static/images/butter-royale.jpg"),
            details: `Butter Royale is a lighthearted battle royale developed by Mighty Bear Games, released on Apple Arcade in January 2020.

As a game design intern, I developed design proposals for assigned quality-of-life features, including a replay system and daily login rewards. I researched their functionality, created game design documents and mockups, and presented my proposals to senior designers for implementation consideration. I also conducted playtesting and provided player support.`,
            links: {}
        },
        {
            title: "Disney Melee Mania",
            tagline: "Cue the lights! Hear the fans roar!",
            tags: ["Game Design", "Internship", "Apple Arcade"],
            thumbnail: require("../static/images/disney-melee-mania.jpg"),
            details: `Disney Melee Mania is a 3v3 arena brawler featuring Disney and Pixar characters, each with distinct combat abilities inspired by their original appearances.

As a game design intern, I independently conceptualized power-up items and their gameplay effects, refining my proposals with feedback from senior designers. I also researched Disney and Pixar source material to identify canonical references for character abilities and animations, compiling visual references to support the design and art teams in meeting IP approval requirements.`,
            links: {}
        }
    ];

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.tags.includes(filter)
    );

    return (
        <div className={styles.projectsBody}>
            <h2 className={styles.header}>
                Projects
            </h2>

            <p className={styles.intro}>
                Projects across game design, narrative systems, and gameplay programming.
            </p>

            <div className={styles.filters}>
                {["All", "Game Design", "Narrative Design", "Programming"].map((category) => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${filter === category ? styles.activeFilter : ""
                            }`}
                        aria-pressed={filter === category}
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
