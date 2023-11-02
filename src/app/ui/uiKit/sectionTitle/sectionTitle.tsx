'use client'

import styles from "./style.module.scss";
import {goldman} from "@/app/ui/fonts";
import {motion, useAnimate, useScroll} from "framer-motion";
import {useRef} from "react";

export default function SectionTitle({title, color = 'black'}: { title: string; color: string }) {
    const target = useRef(null)

    useAnimate()
    return (
        <>
            <motion.div
                initial={{translateX: -100, opacity: 0}}
                whileInView={{translateX: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8, ease: 'easeOut'}}
            >
                <h2 ref={target}
                    className={`${goldman.className} ${styles.title} ${color === "white" ? styles.white : styles.black}`}>
                    {title}
                </h2>
            </motion.div>
            <motion.div
                initial={{translateX: 100, opacity: 0}}
                whileInView={{translateX: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8, ease: 'easeOut'}}
            >
            <div className={styles.line}></div>
            </motion.div>
        </>
    )
}
