'use client'
import styles from "./style.module.scss";
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";
import React, {useRef} from "react";
import 'swiper/css';
import 'swiper/css';

import Review from "@/app/ui/home/testimonial/review";
import ZeroToValue from "@/app/ui/uiKit/zeroToValue";

const slides = [
    {
        author: 'MARK S.',
        position: '(Logistics Manager)',
        text: '"Angels Road Inc has been an absolute lifesaver for my small business. The team\'s local pick-up and delivery services have been punctual and reliable, allowing me to keep my promises to my own customers. Thanks to Angels Road, I can focus on growing my business with confidence."'
    },
    {
        author: 'MARK S.',
        position: '(Logistics Manager)',
        text: '"Angels Road Inc has been an absolute lifesaver for my small business. The team\'s local pick-up and delivery services have been punctual and reliable, allowing me to keep my promises to my own customers. Thanks to Angels Road, I can focus on growing my business with confidence."'
    },
    {
        author: 'MARK S.',
        position: '(Logistics Manager)',
        text: '"Angels Road Inc has been an absolute lifesaver for my small business. The team\'s local pick-up and delivery services have been punctual and reliable, allowing me to keep my promises to my own customers. Thanks to Angels Road, I can focus on growing my business with confidence."'
    }
]
export default function Testimonial() {
    return (
        <section className={styles.testimonial}>
            <div className={styles.testimonialContent}>
                <div className={styles.testimonialTitleWrapper}>
                    <SectionTitle title={'what our clients says'} color={'white'} size={'small'}/>
                </div>
                <Review slides={slides}/>
                <ZeroToValue/>
            </div>
        </section>
    )
}