import styles from "./style.module.scss";
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";
import Image from "next/image";
import missionsImage from "@/../public/img/testimonial/testimonialImage.jpeg";
import {poppins} from "@/app/ui/fonts";

export default function Mission() {
    return (
        <section className={styles.mission}>
            <div className="page-container">
                <div className={styles.missionContainer}>
                    <div className={styles.missionHeader}>
                        <div className={styles.missionTitleWrapper}>
                            <SectionTitle title={'our missons'} color={'white'}/>
                        </div>
                        <p className={`${poppins.className} ${styles.missionDesc}`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industrys standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type and scrambled it to make a type specimen book. It has
                        </p>
                    </div>
                    <p className={`${poppins.className} ${styles.missionText}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                        the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised ummy text
                        ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised
                    </p>
                    <div className={styles.missionImage}>
                        <Image src={missionsImage} alt={'angels road address'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}