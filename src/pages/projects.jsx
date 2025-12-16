import React, { useState } from "react";
import styles from "./projects.module.css";
import Project from "../components/project";

function Projects() {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            title: "Butter Royale",
            tagline: "Have the food fight of your life!",
            tags: ["Game Design", "Internship", "Apple Arcade"],
            thumbnail: require("../static/images/butter-royale.jpg"),
            details: `Butter Royale is a battle royale video game developed by Mighty Bear Games for iOS, iPadOS, macOS, and tvOS. Players engage in a lighthearted food fight across a suburban landscape as a storm of butter gradually draws them closer.

As part of my game design internship, I conducted playtesting and player support, and designed quality-of-life features that improved player retention. While I didn't work on code directly, I collaborated closely with the design team using Notion for design documentation and iteration.

Originally released as an Apple Arcade exclusive in January 2020, Butter Royale was retired from the App Store in December 2022.`,
            links: {}
        },
        {
            title: "Disney Melee Mania",
            tagline: "Cue the lights! Hear the fans roar!",
            tags: ["Game Design", "Combat Design", "Internship", "Apple Arcade"],
            thumbnail: require("../static/images/disney-melee-mania.jpg"),
            details: `Disney Melee Mania was a 3v3 arena brawler featuring beloved Disney and Pixar characters, each reimagined with distinct, action-ready designs. Every champion had their own set of signature abilities and unlockable cosmetics.

During my time on the project, I designed combat abilities for various Disney heroes and prototyped an early power-up system. My focus was on creating engaging, readable, and well-balanced mechanics that captured each character's essence.

The game was released as an Apple Arcade exclusive on December 17, 2021, and was retired from the platform in December 2024.`,
            links: {}
        },
        {
            title: "Mirror's Memento",
            tagline: "Who will live and who will die?",
            tags: ["Unity", "C#", "Programming", "Game Design", "Narrative Design", "Puzzle Design"],
            thumbnail: require("../static/images/mirrors-memento.png"),
            details: `Mirror's Memento is a puzzle game where you guide a young girl trapped in a mysterious dungeon filled with mirrored puzzle rooms. Each chamber contains a doppelganger that mimics your every move, forcing you to use environmental traps and subtle room differences to outwit - and destroy - your reflection in order to progress.

I implemented the puzzle systems in Unity, including switches, conveyors, and room rotation mechanics, and developed a BFS-driven hint system to support players through tougher levels. Beyond programming, I designed the narrative structure, wrote flavor text, and scripted cutscenes to weave story and gameplay together seamlessly.`,
            links: {
                itch: "https://kleinkodes.itch.io/doppelganger"
            }
        },
        {
            title: "Anamnesis",
            tagline: "The remembering of things from a previous existence.",
            tags: ["Unity", "C++", "C#", "Game Design", "Programming"],
            thumbnail: require("../static/images/anamnesis.png"),
            details: `Anamnesis is a 2D single-player puzzle-platformer where players solve challenges with the help of a ghost from their past life. Upon death, the player respawns at the start of the level alongside a spectral echo that replays their previous actions in real time. To succeed, players must strategically plan and sacrifice each run - holding switches, distracting enemies, or creating paths for their future self.

Originally prototyped in 72 hours using Ubisoft's minimalist C++ API for the Develop at Ubisoft program, the game was later rebuilt in Unity as a full standalone title. This process involved reworking the core mechanics, implementing refined level design, and enhancing visual feedback for clarity and immersion.`,
            links: {
                itch: "https://serenecaelum.itch.io/anamnesis"
            }
        },
        {
            title: "Golfers of the Galaxy",
            tagline: "All golfers start somewhere.",
            tags: ["Unity", "C++", "C#", "Game Design", "Programming"],
            //thumbnail: require("../static/images/golfers-galaxy.png"),
            details: `Golfers of the Galaxy is a 2D physics-based minigolf game where players launch a golf ball across a system of rotating planets, each with its own gravitational pull. Players click and drag to aim and shoot, carefully planning their trajectory to account for planetary orbits, rotations, and gravity wells that constantly shift the ball's path.

Developed initially in 96 hours using Ubisoft's minimalist C++ API for the Ubisoft NEXT competition, the game was later rebuilt in Unity as a complete standalone experience. This rebuild allowed for more refined physics systems, level design, and visual polish, capturing both the whimsy and challenge of navigating an interstellar course.`,
            links: {
                itch: "https://serenecaelum.itch.io/golfers-of-the-galaxy"
            }
        },
        {
            title: "Webster Booster",
            tagline: "Just a spider with a jetpack.",
            tags: ["Unity", "C#", "Game Jam", "Programming", "VFX"],
            thumbnail: require("../static/images/webster-booster.png"),
            details: `Webster Booster is a fast-paced arcade action game where you control a jet-propelled spider chasing bugs across a vibrant arena. Use directional arrows to hunt down the elusive green bug, all while dodging red bugs and racing against the clock. Loop around yellow bugs to gain speed boosts and keep the chase alive!

Developed in Unity within 96 hours for the GMTK Game Jam 2025, this project focused on quick iteration and creative polish. I implemented the visual effects, fuel system, and interactive menu that gave the game its dynamic feel and energetic pacing.`,
            links: {
                itch: "https://noorilu.itch.io/webster-booster"
            }
        },
        {
            title: "The Doughfather",
            tagline: "The house always crumbs out on top.",
            tags: ["Godot", "GDScript", "Narrative Design", "Game Jam"],
            thumbnail: require("../static/images/doughfather.png"),
            details: `The Doughfather is a quirky cookie-themed pachinko game where you must pay off your debts to the infamous "Doughfather". Drop your cookies, take risks, and pray for good bounces as you work to clear what you owe - one cookie at a time.

Created in 7 days for the Brackeys Game Jam 2025.2, I led the narrative design and integrated art and juice systems in Godot, bringing the game's sugary underbelly to life with personality and polish.`,
            links: {
                itch: "https://jiputer.itch.io/the-doughfather"
            }
        },
        {
            title: "Scop, Sing Us a Song",
            tagline: "The fire waits. The king is gone. Your voice is all that remains.",
            tags: ["Twine", "HTML", "CSS", "JavaScript", "Narrative Design"],
            //thumbnail: require("../static/images/scop-sing-us-a-song.png"),
            details: `Set during Beowulf's funeral, Scop, Sing Us a Song explores the theme of impermanence through the lens of oral storytelling and memory. You play as a scop (an Old English poet) tasked with recounting stories of the fallen king before the fire burns out. What is remembered, and how, shifts with every playthrough. Each story choice shapes the tone of the funeral, from glorified legend to quiet lament. Mechanically, "forgotten stories" and "forgotten names" systems ensure that tales told often grow stronger in memory, while others fade - mirroring the fragility of legacy itself.

I designed, wrote, and programmed the entire experience in Twine, using custom HTML, CSS, and JavaScript to reinforce its themes of repetition, choice, and decay.`,
            links: {
                itch: "https://serenecaelum.itch.io/scop-sing-us-a-song"
            }
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
                {["All", "Game Design", "Programming", "Narrative Design"].map((category) => (
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