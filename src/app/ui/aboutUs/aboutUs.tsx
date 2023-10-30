import styles from './style.module.scss';
import SectionTitle from "@/app/ui/sectionTitle/sectionTitle";
import Image from "next/image";
import aboutImage from "@/../public/img/about/aboutImg.jpeg";
import {poppins} from "@/app/ui/fonts";

export default function AboutUs() {
    return (
        <section className={styles.aboutUs}>
            <div className="page-container">
                <div className={styles.aboutUsContainer}>
                    <div className={styles.content}>
                        <div className={styles.contentTitleWrapper}>
                            <SectionTitle title={'about us'} color={'black'}/>
                        </div>
                        <p className={`${poppins.className} ${styles.contentDesc}`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
                            type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but
                            also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised
                        </p>
                        <button className={styles.contentBtn}>view more</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className="img-container">
                            <Image src={aboutImage} alt={'3 trucks'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}