import styles from "./style.module.scss";
import Image from "next/image";
import testimonialImg from "../../../../../public/img/testimonial/testimonialImage.jpeg";
import {goldman, poppins} from "@/app/ui/fonts";
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";

export default function Testimonial() {
    return (
        <section className={styles.testimonial}>
            <div className={styles.testimonialContent}>
                <div className={styles.testimonialTitleWrapper}>
                <SectionTitle title={'what our clients says'} color={'white'} size={'small'}/>
                </div>
                <h4 className={styles.testimonialAuthor}>MARK S.</h4>
                <p className={styles.testimonialVacation}>(Logistics Manager)</p>
                <p className={styles.testimonialText}>&quot;Angels Road Inc has been an absolute lifesaver for my small
                    business. The team&apos;s local pick-up and delivery services have been punctual and reliable, allowing
                    me to keep my promises to my own customers. Thanks to Angels Road, I can focus on growing my
                    business with confidence.&quot;</p>
            </div>
        </section>
    )
}