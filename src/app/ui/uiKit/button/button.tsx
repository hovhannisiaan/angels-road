'use client'
import styles from './style.module.scss';
import {goldman} from "@/app/ui/fonts";
import Link from "next/link";
import React from "react";

type ButtonProps = {
    href?: string,
    onClick?: (e:  React.MouseEvent<HTMLButtonElement>) => any
    children: React.ReactNode
}

export default function Button({children, href = '', onClick}: ButtonProps) {
    if (href) {
        return (
            <Link href={href} className={`${goldman.className} ${styles.contentBtn}`}>
                {children}
            </Link>
        )
    } else {
        return (
            <button type={'button'} onClick={onClick} className={`${goldman.className} ${styles.contentBtn}`}>
                {children}
            </button>
        )
    }
}