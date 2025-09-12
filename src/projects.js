export const projects = [
  {
    title: "Butter Royale",
    description: "A family-friendly food fight battle royale, developed by Mighty Bear Games and released on Apple Arcade.",
    longDescription: "During my internship at Mighty Bear Games, I contributed to the design team of *Butter Royale*, a whimsical battle royale game available on iOS, iPadOS, macOS, and tvOS through Apple Arcade. My work focused on designing quality-of-life features to improve player retention, such as a replay system and limited-time event mechanics. While the game was retired from Apple Arcade in 2022, it remains a valuable experience where I learned about live game development, collaboration across teams, and player-centered design.",
    image: "/images/butter-royale.jpeg", 
    role: "Game Designer (Intern)",
    tech: ["Game Design", "Live Ops", "Apple Arcade"],
    links: [
      { label: "Apple Arcade Page (archived)", url: "https://apps.apple.com/us/app/butter-royale/id1464623715" }
    ]
  },
  {
    title: "Disney Melee Mania",
    description: "A 3v3 multiplayer online battle arena (MOBA) featuring Disney and Pixar characters, developed by Mighty Bear Games for Apple Arcade.",
    longDescription: "As part of my internship with Mighty Bear Games, I contributed to the design team for *Disney Melee Mania*, a fast-paced multiplayer online battle arena released exclusively on Apple Arcade. My role involved designing unique character abilities (including concepts for Frozone and Moana), as well as a power-up system that was prototyped internally. While not all designs made it into the final game due to licensing priorities, this experience gave me valuable insight into designing around beloved IPs, balancing gameplay for live service titles, and working within the constraints of collaborative, cross-disciplinary teams.",
    image: "/images/disney-melee-mania.jpeg",
    role: "Game Designer (Intern)",
    tech: ["Game Design", "Character Design", "Live Ops", "Apple Arcade"],
    links: [
      { label: "Apple Arcade Page (archived)", url: "https://apps.apple.com/us/app/disney-melee-mania/id1544934886" }
    ]
  },
  {
    title: "Mirror's Memento",
    description: "A puzzle game about outsmarting your own doppelganger in a mysterious dungeon.",
    longDescription: "Developed as part of a university course on game design, *Mirror's Memento* is a puzzle game where players must outwit their doppelganger to escape each room. Every move the protagonist makes is mirrored by the doppelganger in a parallel room, and progress requires using traps and environmental quirks to eliminate the copy without dying yourself. \n\nI contributed to both design and development, creating puzzle mechanics such as light switches, room rotations, and conveyor belts. I also implemented an AI hint system that analyzes the player's current state and computes the next optimal move toward victory. Beyond programming, I wrote the full narrative lore, all flavor text and level names, and scripted the intro/outro cutscenes in Unity.",
    image: "/images/mirrors-memento.png",
    role: "Game Designer & Programmer",
    tech: ["Unity", "C#", "Puzzle Design", "Narrative Design"],
    links: [
      { label: "Play on Itch.io", url: "https://kleinkodes.itch.io/doppelganger" }
    ]
    },
    {
        title: "Anamnesis",
        description: "A puzzle-platformer where past-life ghosts replay your actions to help solve environmental challenges.",
        longDescription: "Originally created as part of the *Develop at Ubisoft* program, *Anamnesis* is a 2D puzzle-platformer centered on the concept of 'remembering' past lives. Each time the player dies, they respawn alongside a ghostly apparition that replays their previous actions in real-time. Players must use these ghosts strategically to press switches, hold platforms, distract enemies, and solve puzzles that require precise timing and planning. \n\nThe prototype was initially coded in C++ over a single weekend using Ubisoft’s custom API. To expand on the idea, I rebuilt the game in Unity, refining mechanics, improving controls, and adding level content. This project was an exercise in both rapid prototyping and full-cycle development, from concept to a playable Unity build.",
        image: "/images/anamnesis.png", 
        role: "Programmer & Designer",
        tech: ["Unity", "C#", "C++ (prototype)", "Game Design"],
        links: [
            { label: "Play Prototype", url: "https://your-prototype-link.com" }, 
            { label: "Play Unity Build", url: "https://your-unity-build-link.com" }
        ]
    },
    {
        title: "Golfers of the Galaxy",
        description: "A physics-based minigolf game set among rotating planets with unique gravity fields.",
        longDescription: "Created for the *Ubisoft Next 2025 Programming Competition*, *Golfers of the Galaxy* is a 2D physics-based minigolf game where players launch a golf ball across a solar system of rotating planets, each with its own gravitational pull. Success requires mastering timing, trajectory, and momentum to sink the ball into the goal without losing it in space.\n\nThe original prototype was developed in C++ over one weekend using Ubisoft’s custom API. After the competition, I rebuilt the game in Unity to refine the physics, expand the level design, and create a more polished experience. While the project didn’t advance in the competition, it provided valuable experience with physics programming, prototyping under time constraints, and adapting designs across different engines.",
        image: "/images/golfers-galaxy.png",
        role: "Programmer & Designer",
        tech: ["Unity", "C#", "C++ (prototype)", "Physics Programming"],
        links: [
            { label: "Play Unity Build", url: "https://your-itch-link.com" }, 
            { label: "Prototype (C++)", url: "https://your-prototype-link.com" } 
        ]
    },
    {
        title: "Webster Booster",
        description: "A 2.5D arcade bug-chasing game where players hunt green bugs, avoid hazards, and zip around with web-powered boosts.",
        longDescription: "*Webster Booster* was created in 48 hours for the 2025 GMTK Game Jam. It’s a fast-paced arcade-style game where players must follow arrows to hunt down green bugs while dodging red ones. Looping around yellow bugs grants a speed boost, adding another layer of strategy to movement and positioning.\n\nMy contributions focused on visual effects, UI systems, and interactivity. I created all VFX in Unity’s particle system (combo effects, boosts, jetpack states, prey death, hazard collisions/respawns). I also built the interactive main menu (which doubles as a movement test area) and designed the fuel bar system, which depletes during movement and refills when all enemies in a wave are cleared.",
        image: "/images/webster-booster.png",
        role: "Programmer & VFX Designer",
        tech: ["Unity", "C#", "Particle System", "UI"],
        links: [
            { label: "Play on Itch.io", url: "https://noorilu.itch.io/webster-booster" }
        ]
    },
    {
        title: "The Doughfather",
        description: "A cookie-themed pachinko game where you risk your biscuits to pay off a debt.",
        longDescription: "Created in one week for the 2025 Brackeys Game Jam, *The Doughfather* is a 2.5D pachinko-inspired game with a quirky cookie theme. Players drop cookies into a pachinko board, trying their luck to pay off an ever-growing debt, all while navigating humorous flavor text and playful narrative beats.\n\nMy contributions included writing the full narrative and flavor text (premise, intro, win/lose screens, and pause menu quips), integrating art assets into the game, and building the cookie spawning/dragging system (click the jar to spawn a cookie, drag to move it, release to drop it). I also added polish features such as camera shake on bucket drops and invisible walls to prevent cookies from flying off the board.",
        image: "/images/doughfather.png", 
        role: "Programmer & Narrative Designer",
        tech: ["Godot", "GDScript", "Narrative Design", "2.5D"],
        links: [
            { label: "Play on Itch.io", url: "https://your-itch-link.com" } 
        ]
    }
];