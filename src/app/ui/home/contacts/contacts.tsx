import styles from "./style.module.scss";
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";
import Smm from "@/app/ui/uiKit/smm/smm";
import {oswald,poppins} from "@/app/ui/fonts";
import MailContent from "@/app/ui/uiKit/mailContent/mailContent";
import ContactContent from "@/app/ui/uiKit/contactContent/contactContent";

export default function Contacts() {
    return (
        <section className={styles.contacts}>
            <div className={styles.contentWrapper}>
                <ContactContent width={980} />
            </div>
            <div className={styles.mail}>
                <div className={styles.mailContent}>
                    <MailContent color={'var(--text-gray-dark)'}/>
                </div>
            </div>
        </section>
    )
}