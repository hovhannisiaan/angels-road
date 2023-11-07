import styles from "./style.module.scss";
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";
import Image from "next/image";
import testimonialImg from "../../../../../public/img/testimonial/testimonialImage.jpeg";
import {poppins, oswald, goldman} from "@/app/ui/fonts";
import AdvantagesCard from "@/app/ui/home/advantages/advantagesCard";
import {InteractiveMarquee} from "@/app/ui/uiKit/infiniteMarquee";

export default function Advantages() {
    return (
        <section className={styles.advantages}>
            <div className={styles.cardsWrapper}>
                <div className="page-container">
                    <div className={styles.cardsContainer}>
                        <div className={styles.advantagesTitleWrapper}>
                        <SectionTitle title={'advantages'} color={'black'}/>
                        </div>
                        <div className={styles.cards}>
                            <AdvantagesCard title={'Reliable Services'}>
                                Our commitment to excellence is evident in our long-standing relationships with
                                satisfied clients and our history of successful logistics management.
                            </AdvantagesCard>
                            <AdvantagesCard title={'Reliable Services'}>
                                Our commitment to excellence is evident in our long-standing relationships with
                                satisfied clients and our history of successful logistics management.
                            </AdvantagesCard>
                            <AdvantagesCard title={'Reliable Services'}>
                                Our commitment to excellence is evident in our long-standing relationships with
                                satisfied clients and our history of successful logistics management.
                            </AdvantagesCard>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.runningLineWrapper}>
                <InteractiveMarquee speed={2}>
                    <h3 className={`${goldman.className} ${styles.marqueeTitle}`}>
                        <span>trust</span>
                        <span>EFFICIENT</span>
                        <span>rELIABILITY</span>
                        <span>Sustainability</span>
                    </h3>
                </InteractiveMarquee>
            </div>
        </section>
    )
}