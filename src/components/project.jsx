import React, { useEffect, useId, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaItchIo } from "react-icons/fa";
import styles from "./project.module.css";

function Project({ title, tagline, tags, thumbnail, details, links }) {
    const [open, setOpen] = useState(false);
    const titleId = useId();
    const triggerRef = useRef(null);
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);

    const iconMap = {
        itch: <FaItchIo size={22} aria-hidden="true" />,
    };

    useEffect(() => {
        if (!open) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        const triggerElement = triggerRef.current;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
                return;
            }

            if (event.key !== "Tab") {
                return;
            }

            const focusableElements = dialogRef.current?.querySelectorAll(
                'button, a[href], [tabindex]:not([tabindex="-1"])'
            );

            if (!focusableElements?.length) {
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
            triggerElement?.focus();
        };
    }, [open]);

    return (
        <>
            <article className={styles.projectCard}>
                <button
                    ref={triggerRef}
                    type="button"
                    className={styles.projectTrigger}
                    onClick={() => setOpen(true)}
                    aria-label={`View details for ${title}`}
                >
                    <img
                        src={thumbnail}
                        alt={title}
                        className={styles.projectImage}
                    />
                    <span className={styles.projectTitle}>{title}</span>
                    <span className={styles.projectTagline}>{tagline}</span>

                    <span className={styles.projectTags}>
                        {tags.map((tag) => (
                            <span key={tag} className={styles.projectTag}>
                                {tag}
                            </span>
                        ))}
                    </span>
                </button>
            </article>

            {open && (
                <div
                    className={styles.projectOpen}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setOpen(false);
                        }
                    }}
                >
                    <div
                        ref={dialogRef}
                        className={styles.projectOpenCard}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                    >
                        <button
                            ref={closeButtonRef}
                            type="button"
                            onClick={() => setOpen(false)}
                            className={styles.projectClose}
                            aria-label={`Close ${title} details`}
                        >
                            <IoMdClose aria-hidden="true" />
                        </button>

                        <img
                            src={thumbnail}
                            alt={title}
                            className={styles.projectOpenImage}
                        />

                        <div className={styles.projectTextContainer}>
                            <h3 id={titleId} className={styles.projectCardTitle}>{title}</h3>

                            <div className={styles.projectTags}>
                                {tags.map((tag) => (
                                    <span key={tag} className={styles.projectTag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className={styles.projectCardDetails}>{details}</p>

                            {links && Object.keys(links).length > 0 && (
                                <div className={styles.projectLinks}>
                                    {Object.entries(links).map(([label, url]) => {
                                        const normalizedLabel = label.toLowerCase();
                                        const accessibleLabel = normalizedLabel === "itch"
                                            ? `View ${title} on itch.io`
                                            : `Open ${title} ${label} link`;

                                        return (
                                            <a
                                                key={label}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.projectLinkIcon}
                                                aria-label={accessibleLabel}
                                            >
                                                {iconMap[normalizedLabel] || <FaItchIo size={22} aria-hidden="true" />}
                                            </a>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Project;
