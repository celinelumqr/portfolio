import React from "react";
import styles from "./projects.module.css";
import Project from "../components/project";

function Projects() {
    return (
        <div className={styles.projectsContainer}>
            <div className={styles.header}>
                <h1 className={styles.headerLight}>My <span className={styles.headerBold}>Projects</span></h1>
            </div>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <Project
                        projectName="UofT ScamBusters: UofT Email Fraud Detection"
                        number="01"
                        projectDescription="Developed a machine learning model to detect fraudulent emails using Python libraries such as Pandas, NumPy, PyTorch, and Scikit-learn.
                        Used decision trees, neural networks, naive bayes, and logistic regression to compare the performance of each model on both UofT and non-UofT email data."
                        githubLink="https://github.com/UofT-ScamBusters/UofT-Email-Fraud-Detection"
                        image={require("../static/images/avatar.png")}
                        showPython={true} />
                </div>
                <div className={styles.project}>
                    <Project
                        projectName="PetPal: Bring Pawsitivity in Your Life!"
                        number="02"
                        right={true}
                        projectDescription="Developed a full-stack web application using Django and React as part of a team of three.
                        Contributed to both backend and frontend development, including coding the REST API with Django, implementing token-based authentication for secure user login, 
                        and designing a responsive UI with React. Collaborated on database design and frontend layout using Figma to ensure an efficient development pipeline."
                        githubLink="https://github.com/TeamAlligators/PetPalWeb"
                        figmaLink="https://www.figma.com/design/0w73UT6sf47n8O2RWbMT3A/PetPal?node-id=0%3A1&t=TUyck5m5TpNok3gt-1"
                        deployLink="https://pet-pal-web.vercel.app/"
                        image={require("../static/images/avatar.png")}
                        showReact={true}
                        showDjango={true}
                        showSQLite={true}
                        showHTMLCSS={true} />
                </div>
                <div className={styles.project}>
                    <Project
                        projectName="Auto-Suggest for Chatbot Creators"
                        number="03"
                        projectDescription="Collaborated with Voiceflow to create a full-stack web application using clean architecture.
                        Developed a web with an algorithm that parses through existing chatbot transcripts to auto-suggest
                        intents for chatbot creators. Delivered a solution that benefits both chatbot developers and users by reducing time and effort needed to create
                        effective chatbot intents with a user-friendly frontend."
                        githubLink="https://github.com/J-TALE/J-TALE"
                        figmaLink="https://www.figma.com/design/tjtuN40Bv3Ny9ROuWNKF51/J-TALE-project-design?node-id=0%3A1&t=Opo4bbdlv7jF5M98-1"
                        deployLink="https://jtale.netlify.app/"
                        image={require("../static/images/avatar.png")}
                        showReact={true}
                        showNode={true}
                        showMongoDB={true}
                        showExpress={true}
                        showHTMLCSS={true} />
                </div>
                <div className={styles.project}>
                    <Project
                        projectName="Mirror's Memento"
                        number="04"
                        right={true}
                        projectDescription="Worked with a total of 12 UofT CS students, music students, and Centennial College game art and animation students 
                        to develop a 3D puzzle game in Unity using C#. Designed and implemented puzzles, and created animations with state machines. Ensured the codebase was clean, reusable, and scalable."
                        itchLink="https://kleinkodes.itch.io/doppelganger"
                        image={require("../static/images/avatar.png")}
                        showCSharp={true}
                        showUnity={true} />
                </div>
                <div className={styles.project}>
                    <Project
                        projectName="Wear the Change: A Revolution in Conscious Fashion"
                        number="05"
                        projectDescription="Designed a mobile application using Figma to come up with a solution 
                        for the fashion industry to reduce waste and promote sustainable fashion.
                        Worked on surveying potential users to understand their needs and preferences to create a user-friendly interface."
                        figmaLink="https://www.figma.com/design/ZflAMpDOgKnbI9HOm6cZ6q/Wear-the-Change?node-id=0%3A1&t=zjS09j5VgTtj3Ipu-1"
                        image={require("../static/images/avatar.png")}
                        showFigma={true}
                    />
                </div>
                <div className={styles.project}>
                    <Project
                        projectName="Beats to the Step"
                        number="06"
                        right={true}
                        projectDescription="Designed a mobile app that allows you to find music with a desired BPM that
                        matches your footsteps for everyday walk or run for the hackathon, Hack the North 2022.
                        Collaborated with a team of 3 to develop the app using Dart and Firebase."
                        githubLink="https://github.com/jltng/htn-2022"
                        image={require("../static/images/avatar.png")}
                        showDart={true}
                        showFirebase={true} />
                </div>
                <div className={styles.project}>
                    <Project
                        projectName="COVID-19: How Canadians Cope with Rising Food Prices"
                        number="07"
                        projectDescription="Created choropleth maps to investigate the impact of COVID-19 on the
                        correlation between food price and its substitutes and complements.
                        Parsed the dataset and used linear regression to predict future data for COVID's impact.
                        Used Python libraries such as Pandas, NumPy, Scikit-learn, and Matplotlib."
                        githubLink="https://github.com/CS110-Project-Team/Project"
                        image={require("../static/images/avatar.png")}
                        showPython={true} />
                </div>
            </div>
        </div>
    );
}

export default Projects;