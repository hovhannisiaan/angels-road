import styles from "./style.module.scss";
import Image from "next/image";
import circleText from "../../../../../public/img/banner/animation.png";
import MailContent from "@/app/ui/uiKit/mailContent/mailContent";

export default function MailSection() {
    return (
        <div className={styles.mail}>
            <div className="page-container">
                <div className={styles.mailContainer}>
                    <div className={styles.mailContentWrapper}>
                        <MailContent />
                    </div>
                    <div className={styles.bannerCircle}>
                        <div className="img-container">
                            <Image src={circleText} alt={'rotating text'} width={328} height={328} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}