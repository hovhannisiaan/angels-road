'use client'
import styles from "./style.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from "swiper/modules";
import {goldman} from "@/app/ui/fonts";

type ReviewProps = {
    slides: {
        author: string,
        position: string,
        text: string
    }[]
}
export default function Review({slides}: ReviewProps) {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{clickable: true}}
            modules={[Pagination, Autoplay]}
            autoplay={{delay: 2500, disableOnInteraction: false}}
            loop={true}
            className={styles.reviewSwiper}
        >
            {slides.map((item, index) => {
                return (
                    <SwiperSlide className={styles.reviewSlide} key={index}>
                        <h4 className={`${goldman.className} ${styles.testimonialAuthor}`}>{item.author}</h4>
                        <p className={`${goldman.className} ${styles.testimonialVacation}`}>{item.position}</p>
                        <p className={styles.testimonialText}>{item.text}</p>
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    )
}