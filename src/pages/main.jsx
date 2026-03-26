import styles from "./main.module.css";
import Link from "../components/link"
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaCode, FaPenFancy } from "react-icons/fa";

function Main() {
    return (
        <div className={styles.landing}>
            <img
                className={styles.landingAvatar}
                src={require("../static/images/moonforest-logo.png")}
                alt="home"
            />
            <div className={styles.landingText}>
                <h1 className={styles.landingTagline}>
                    Celine Lum
                </h1>
                <p className={styles.landingRoles}>
                    Worlds Etched in Starlight
                </p>
                <div className={styles.skills}>
                    <div className={styles.skillItem}>
                        <IoGameController className={styles.skillIcon} />
                        <span>Game Design</span>
                    </div>
                    <div className={styles.skillItem}>
                        <FaPenFancy className={styles.skillIcon} />
                        <span>Narrative Design</span>
                    </div>
                    <div className={styles.skillItem}>
                        <FaCode className={styles.skillIcon} />
                        <span>Programming</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main