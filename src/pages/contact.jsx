import React, { useCallback, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import Link from "../components/link";
import Alert from "../components/alert";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [alert, setAlert] = useState({
        show: false,
        success: false,
        message: "",
    });

    const dismissAlert = useCallback(() => {
        setAlert((currentAlert) => ({ ...currentAlert, show: false }));
    }, []);

    const sendEmail = async (event) => {
        event.preventDefault();
        setIsSending(true);

        try {
            await emailjs.sendForm(
                "service_ew1ae8w",
                "template_i7ky3qh",
                form.current,
                "8Na1GmbpvMr1zxPZL"
            );

            setAlert({
                show: true,
                success: true,
                message: "Thanks, I'll get back to you soon.",
            });
            form.current.reset();
        } catch (error) {
            console.error("EmailJS submission failed:", error);
            setAlert({
                show: true,
                success: false,
                message: "Please try again or use the email link below.",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
            className={styles.contactPage}
            aria-labelledby="contact-heading"
        >
            <div className={styles.contactBody}>
                <div>
                    <h2 id="contact-heading" className={styles.header}>
                        Contact
                    </h2>
                    <p className={styles.text}>
                        If you'd like to discuss game design, interactive storytelling,
                        or a potential collaboration, I'd be happy to hear from you.
                    </p>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className={styles.form}
                    aria-busy={isSending}
                >
                    <label className={styles.formField}>
                        <span className={styles.formLabel}>Name</span>
                        <input
                            type="text"
                            name="from_name"
                            autoComplete="name"
                            required
                            className={styles.formInput}
                        />
                    </label>

                    <label className={styles.formField}>
                        <span className={styles.formLabel}>Email</span>
                        <input
                            type="email"
                            name="from_email"
                            autoComplete="email"
                            required
                            className={styles.formInput}
                        />
                    </label>

                    <label className={styles.formField}>
                        <span className={styles.formLabel}>Message</span>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            className={styles.formInput}
                        />
                    </label>

                    <button
                        type="submit"
                        className={styles.button}
                        disabled={isSending}
                    >
                        {isSending ? "Sending..." : "Send message"}
                    </button>
                </form>

                <Alert
                    show={alert.show}
                    success={alert.success}
                    message={alert.message}
                    onClose={dismissAlert}
                />

                <div className={styles.links}>
                    <Link
                        href="mailto:celinelqr@gmail.com"
                        label="Email Celine"
                    >
                        <CiMail size={24} aria-hidden="true" />
                    </Link>
                    <Link
                        href="https://github.com/celinelumqr"
                        label="Celine on GitHub"
                        external
                    >
                        <FaGithub size={22} aria-hidden="true" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/celinelum/"
                        label="Celine on LinkedIn"
                        external
                    >
                        <FaLinkedin size={22} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Contact;
