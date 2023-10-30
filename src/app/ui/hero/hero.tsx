import styles from './style.module.scss';
import Image from "next/image";
import heroImg from "../../../../public/img/hero/hero.jpeg";
import {oswald} from "@/app/ui/fonts";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroOpacity} />
            <Image className={styles.heroImage} src={heroImg} alt={'truck'} />
            <h1 className={`${oswald.className} ${styles.heroTitle}`}>
                we are
                <h2 className={styles.heroCompanyName}>
                    ANGELS ROAD inc
                </h2>
            </h1>
        </div>
    )
}