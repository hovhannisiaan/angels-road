'use client'

import styles from "./style.module.scss";
import {goldman} from "@/app/ui/fonts";
import {motion, useAnimate, useScroll} from "framer-motion";
import {useRef} from "react";
import clsx from "clsx";

type titleProps = {
    title: string,
    color: string,
    size?: "big" | "medium" | "small"
}

export default function SectionTitle({title, color = 'black', size = 'big'}: titleProps) {
    const target = useRef(null)
    useAnimate()
    return (
        <>
            <motion.div
                initial={{translateY: -100, opacity: 0}}
                whileInView={{translateY: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8, ease: 'easeOut'}}
            >
                <h2 ref={target}
                    className={`${goldman.className} ${styles.title} ${color === "white" ? styles.white : styles.black} ${clsx([{
                        [styles.big]: size === 'big',
                        [styles.medium]: size === 'medium',
                        [styles.small]: size === 'small'
                    }])}`}
                >
                    {title}
                </h2>
            </motion.div>
            <motion.div
                initial={{translateY: -100, opacity: 0}}
                whileInView={{translateY: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8, ease: 'easeOut'}}
            >
                <div className={styles.line}></div>
            </motion.div>
        </>
    )
}
