import styles from "./style.module.scss";
import SectionTitle from "@/app/ui/sectionTitle/sectionTitle";
import Image from "next/image";
import testimonialImg from "@/../public/img/testimonial/testimonialImage.jpeg";
import {poppins, oswald} from "@/app/ui/fonts";

export default function Advantages() {
    return (
        <section className={styles.advantages}>
            <div className="page-container">
                <div className={styles.advantagesContainer}>
                    <div className={styles.content}>
                        <div className={styles.contentContainer}>
                            <div className={styles.contentTitleWrapper}>
                                <SectionTitle title={'Advantages'} color={'white'}/>
                            </div>
                            <p className={`${poppins.className} ${styles.contentDesc}`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industrys standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book. It has
                            </p>
                        </div>
                    </div>
                    <div className={styles.testimonial}>
                        <div className={styles.testimonialOpacity}/>
                        <div className={styles.testimonialBackground}>
                            <Image src={testimonialImg} alt={'warehouse'}/>
                        </div>
                        <div className={styles.testimonialContent}>
                            <div className={styles.testimonialIcon}>
                                <div className="img-container">
                                    <svg className="icon">
                                        <use xlinkHref="#quotes"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 className={`${oswald.className} ${styles.testimonialTitle}`}>
                                what our <br/> clients say
                            </h3>
                            <div className={styles.testimonialSwiper}>
                                <blockquote className={`${poppins.className} ${styles.testimonialDesc}`}>
                                    Angels Road has been a great partner to
                                    work with, whenever we need something
                                    done the right way, and when we need
                                    someone we can trust to do the right thing.
                                </blockquote>
                                <footer className={oswald.className}>
                                    <cite
                                        className={`${styles.testimonialAuthor} ${styles.testimonialName}`}>John,</cite>
                                    <cite className={`${styles.testimonialAuthor} ${styles.testimonialPosted}`}>posted
                                        on TripAdvisor</cite>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}