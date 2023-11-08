import styles from './style.module.scss';
import {goldman} from "@/app/ui/fonts";
import Link from "next/link";
import React from "react";

export default function Button({children, href}: {children: React.ReactNode, href: string}) {
    return (
        <Link href={href} className={`${goldman.className} ${styles.contentBtn}`}>{children}</Link>
    )
}