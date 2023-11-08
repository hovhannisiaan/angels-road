import styles from "./style.module.scss";
import React from "react";
import {goldman, poppins} from "@/app/ui/fonts";

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
            <h4 className={`${goldman.className} ${styles.cardTitle}`}>{title}</h4>
            <p className={`${poppins.className} ${styles.cardText}`}>{children}</p>
        </div>
    )
}