import styles from "./style.module.scss";
import MailSection from "@/app/ui/uiKit/mailSection/MailSection";
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";
import Smm from "@/app/ui/uiKit/smm/smm";
import Button from "@/app/ui/uiKit/button/button";

export default function ContactsPage() {
    return (
        <div className={styles.contactPage}>
            <section className={styles.contactContentContainer}>
                <div className="page-container">

                    <div className={styles.contactTitleWrapper}>
                        <SectionTitle title={'contacts'} color={'white'}/>
                    </div>
                    <div className={styles.contactContent}>
                        <div className={styles.contactMap}>

                        </div>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactInfoCard}>
                                <div className={styles.contactInfoHeader}>
                                    <div className={styles.contactInfoIcon}>
                                        <svg className="icon">
                                            <use xlinkHref="#mail"/>
                                        </svg>
                                    </div>
                                    <h3 className={styles.contactInfoTitle}>
                                        e-mail:
                                    </h3>
                                </div>
                                <a href={'mailto:'} className={styles.contactInfoText}>
                                    info@angelsroad@com
                                </a>
                                <div className={styles.contactInfoSmm}>
                                    <Smm/>
                                </div>
                            </div>
                            <div className={styles.contactInfoCard}>
                                <div className={styles.contactInfoHeader}>
                                    <div className={styles.contactInfoIcon}>
                                        <svg className="icon">
                                            <use xlinkHref="#location"/>
                                        </svg>
                                    </div>
                                    <h3 className={styles.contactInfoTitle}>
                                        Main office:
                                    </h3>
                                </div>
                                <p className={styles.contactInfoText}>
                                    123 Main Street Your City, State, Zip Code
                                </p>
                            </div>
                            <div className={styles.contactInfoCard}>
                                <div className={styles.contactInfoHeader}>
                                    <div className={styles.contactInfoIcon}>
                                        <svg className="icon">
                                            <use xlinkHref="#phone"/>
                                        </svg>
                                    </div>
                                    <h3 className={styles.contactInfoTitle}>
                                        phone:
                                    </h3>
                                </div>
                                <a href='tel: ' className={styles.contactInfoText}>
                                    (123) 456-7890544
                                </a>
                            </div>
                        </div>
                    </div>
                    <Button href={'asdninsad'}>
    open map
                    </Button>
                </div>
            </section>

            <div className={styles.contactsParallax} />

            <div className={styles.mailWrapper}>
                <MailSection/>
            </div>
        </div>
    )
}