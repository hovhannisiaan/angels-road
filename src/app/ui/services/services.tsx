import styles from "./style.module.scss";
import SectionTitle from "@/app/ui/sectionTitle/sectionTitle";
import Image from "next/image";

export default function Services() {
    return(
        <section className={styles.services}>
            <div className="page-container">
                <div className={styles.servicesContainer}>
                    <div className={styles.titleWrapper}>
                        <SectionTitle title={'services'} color={'black'} />
                    </div>
                    <div className={styles.cardsContainer}>
                        <div className={styles.card}>
                            <div className="img-container">
                                <div className={styles.cardInner} />
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className="img-container">
                                <div className={styles.cardInner} />
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className="img-container">
                                <div className={styles.cardInner} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}