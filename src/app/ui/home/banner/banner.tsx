'use client';

import styles from './style.module.scss';
import Image from "next/image";
import bannerImg from "../../../../../public/img/banner/bannerImage.jpeg"
import {goldman} from "@/app/ui/fonts";
import circleText from '../../../../../public/img/banner/animation.png';
import {useEffect, useRef} from "react";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {number} from "prop-types";

export default function Banner() {
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
        circle.current.style.transform = `translateY(-49%) translateX(36%) rotate(${scroll}deg)`;
    })


    const rotate = useTransform(scrollYProgress, [-100, 100], [-360, 360]);

    console.log(rotate)
    // @ts-ignore
    return (
        <section ref={target} className={styles.banner}>
            <Image className={styles.bannerBackground} src={bannerImg} alt={'containers'}/>
            <div className={styles.bannerOpacity}/>
            <div className={styles.wrapper}>
                <h2 className={`${goldman.className} ${styles.bannerTitle}`}>
                    LOREM IPSUM
                </h2>
                <div ref={circle} className={styles.bannerCircle}>
                    <div className="img-container">
                        <Image src={circleText} alt={'rotating text'} width={328} height={328}/>
                    </div>
                </div>
            </div>
        </section>
    )
}