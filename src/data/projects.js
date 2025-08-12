export const projects = [
  {
    title: "Mobile Game #1",
    description: "A puzzle-based mobile game I helped design during my internship.",
    image: "/images/mobile-game1.png",
    role: "Game Designer",
    tech: ["Unity", "C#", "Android"],
    links: [
      { label: "Play", url: "https://example.com" },
      { label: "GitHub", url: "https://github.com" }
    ]
  },
  {
    title: "Game Jam Project",
    description: "A fun project created in 48 hours during a game jam.",
    longDescription:
      "This project was built in Unity during the 2023 Global Game Jam. I handled programming the core gameplay loop, integrating art, and balancing game difficulty.",
    image: "/images/gamejam.png",
    screenshots: [
      "/images/gamejam-screen1.png",
      "/images/gamejam-screen2.png"
    ],
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // embed link
    role: "Programmer & Designer",
    tech: ["Unity", "C#"],
    links: [
      { label: "Itch.io", url: "https://itch.io" }
    ]
  }
  // ... Add the rest later
];