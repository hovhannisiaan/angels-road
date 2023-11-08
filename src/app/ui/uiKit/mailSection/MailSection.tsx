'use client'

import styles from "./style.module.scss";
import Image from "next/image";
import circleText from "../../../../../public/img/banner/animation.svg";
import MailContent from "@/app/ui/uiKit/mailContent/mailContent";
import {useRef} from "react";
import {useMotionValueEvent, useScroll} from "framer-motion";

export default function MailSection() {
    const target = useRef(null);
    const circle = useRef(null)
    const {scrollYProgress} = useScroll({
        target,
        offset: ['start end', "end start"],

    })

    let scroll: number = 0;


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        scroll = latest * 360;
        // @ts-ignore
        circle.current.style.transform = `translateY(-49%) rotate(${scroll}deg)`;
    })
    return (
        <div className={styles.mailContainer}>
            <div className={styles.mailContentWrapper}>
                <MailContent color={"var(--text-white)"}/>
            </div>
            <div ref={circle} className={styles.bannerCircle}>
                <div className="img-container">
                    <Image src={circleText} alt={'rotating text'} width={328} height={328}/>
                </div>
            </div>
        </div>
    )
}