import styles from './style.module.scss';
import Image from "next/image";
import bannerImg from "@/../public/img/banner/bannerImage.jpeg"
import {oswald} from "@/app/ui/fonts";
import circleText from '@/../public/img/banner/animation.png';
export default function Banner() {
    return (
        <section className={styles.banner}>
            <Image className={styles.bannerBackground} src={bannerImg} alt={'containers'}/>
            <div className={styles.bannerOpacity}/>
            <div className={styles.wrapper}>
                <h2 className={`${oswald.className} ${styles.bannerTitle}`}>
                    LOREM IPSUM
                </h2>
                <div className={styles.bannerCircle}>
                    <div className="img-container">
                        <Image src={circleText} alt={'rotating text'} width={328} height={328} />
                    </div>
                </div>
            </div>
        </section>
    )
}