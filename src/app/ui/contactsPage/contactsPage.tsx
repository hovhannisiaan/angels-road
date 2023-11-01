import styles from "./style.module.scss";
import ContactContent from "@/app/ui/uiKit/contactContent/contactContent";
import MailSection from "@/app/ui/uiKit/mailSection/MailSection";

export default function ContactsPage() {
    return (
        <section className={styles.contactPage}>
            <div className={styles.contactContentContainer}>
                <div className="page-container">
                    <div style={{position: 'relative'}}>
                        <div className={styles.contactContentWrapper}>
                            <ContactContent width={980}/>
                        </div>
                        <div className={styles.contactMapContainer}>
                            <div className="img-container">
                                <div className={styles.contactMap}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.mailWrapper}>
                <MailSection/>
            </div>
        </section>
    )
}