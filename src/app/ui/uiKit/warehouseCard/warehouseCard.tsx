import styles from "./style.module.scss";
import React from "react";
import clsx from "clsx";
import {goldman} from "@/app/ui/fonts";

type WarehouseCardProps = {
    icon : string,
    title : string,
    children: React.ReactNode,
    theme?: 'dark' | 'light'
}
export default function WarehouseCard({icon, title, children, theme = 'dark'} : WarehouseCardProps) {
    return (
        <div className={`${styles.card} ${clsx({
            [styles.dark] : theme === 'dark',
            [styles.light] : theme === 'light'
        })}`}>
            <div className={styles.cardIcon}>
                <div className="img-container">
                    <svg className={`icon ${clsx({
                        [styles.dark] : theme === 'dark',
                        [styles.light] : theme === 'light' 
                    })}`}>
                        <use xlinkHref={`#${icon}`} />
                    </svg>
                </div>
            </div>
            <h3 className={`${goldman.className} ${styles.cardTitle}`}>{title}</h3>
            <p className={styles.cardDesc}>{children}</p>
        </div>
    )
}