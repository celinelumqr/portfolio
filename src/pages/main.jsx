import styles from "./main.module.css";
import Link from "../components/link"
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Main() {
    return (
        <div className={styles.landing}>
            <img
                className={styles.landingAvatar}
                src={require("../static/images/avatar.png")}
                alt="home"
            />
            <div className={styles.landingText}>
                <h1 className={styles.landingTagline}>
                    Worlds Etched in Starlight
                </h1>
                <p className={styles.landingRoles}>
                    Game Developer | Programmer | Storyteller
                </p>
                <div className={styles.links}>
                    <Link
                        link="mailto:celinelqr@gmail.com">
                        <CiMail size={40} />
                    </Link>
                    <Link
                        link="https://github.com/celinelumqr">
                        <FaGithub size={40} />
                    </Link>
                    <Link
                        link="https://www.linkedin.com/in/celinelum/">
                        <FaLinkedin size={40} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main