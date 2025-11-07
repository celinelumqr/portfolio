import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contact.module.css";
import Link from "../components/link"
import Alert from "../components/alert"
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
    const form = useRef();

    const [alert, setAlert] = useState({
        show: false,
        success: false,
        message: "",
    });

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_ew1ae8w",
                "template_i7ky3qh",
                form.current,
                "8Na1GmbpvMr1zxPZL"
            )
            .then(
                () => {
                    setAlert({
                        show: true,
                        success: true,
                        message: "Message sent successfully!",
                    });
                    form.current.reset();
                    setTimeout(() => setAlert({ show: false }), 4000);
                },
                () => {
                    setAlert({
                        show: true,
                        success: false,
                        message: "Oops! Something went wrong. Please try again.",
                    });
                    setTimeout(() => setAlert({ show: false }), 4000);
                }
            );
    };

    return (
        <section className={styles.contactPage}>
            <div className={styles.contactBody}>
                <div>
                    <h2 className={styles.header}>
                        Echoes Beneath the Stars
                    </h2>
                    <p className={styles.text}>
                        Whether you want to talk about game design, storytelling, or just
                        share creative ideas under the moonlight, I'd love to hear from
                        you.
                    </p>
                </div>

                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        required
                        className={styles.formInput}
                    />
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Email"
                        required
                        className={styles.formInput}
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required
                        className={styles.formInput}
                    ></textarea>

                    <button
                        type="submit"
                        className={styles.button}
                    >
                        Send Message
                    </button>
                </form>

                <Alert
                    show={alert.show}
                    success={alert.success}
                    message={alert.message}
                />

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
        </section>
    );
}

export default Contact;