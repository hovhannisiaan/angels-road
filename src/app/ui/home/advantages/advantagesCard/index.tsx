import styles from "./style.module.scss";
import React from "react";

type advantageCardProps = {
    title: string,
    children: React.ReactNode;
}

export default function AdvantagesCard({title, children} : advantageCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.cardIcon}>
                <svg className="icon">
                    <use xlinkHref="#guard" />
                </svg>
            </div>
            <h4 className={styles.cardTitle}>{title}</h4>
            <p className={styles.cardText}>{children}</p>
        </div>
    )
}