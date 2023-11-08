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
                    {/*<p className={`${oswald.className} ${styles.mailSubscribe}`}>subscribe</p>*/}
                    {/*<h3 className={`${oswald.className} ${styles.mailTitle}`}>join our newsletter</h3>*/}
                    {/*<p className={`${poppins.className} ${styles.mailDesc}`}>Good news & event details as well straight to your incoming mail!</p>*/}
                    {/*<form className={styles.mailForm}>*/}
                    {/*    <label htmlFor="" className={styles.mailLabel}>*/}
                    {/*        <input type="text" placeholder={'Enter Your E-mail'} className={`${poppins.className} ${styles.mailInput}`}/>*/}
                    {/*        <button className={styles.mailBtn}>*/}
                    {/*            <svg className="icon">*/}
                    {/*                <use xlinkHref="#telegram" />*/}
                    {/*            </svg>*/}
                    {/*        </button>*/}
                    {/*    </label>*/}
                    {/*</form>*/}
                </div>
            </div>
        </section>
    )
}