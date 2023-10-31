import styles from "./style.module.scss";
import SectionTitle from "@/app/ui/sectionTitle/sectionTitle";
import Smm from "@/app/ui/smm/smm";
import {oswald,poppins} from "@/app/ui/fonts";

export default function Contacts() {
    return (
        <section className={styles.contacts}>
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <SectionTitle title={'Contacts'} color={'white'} />
                </div>
                <h3 className={`${oswald.className} ${styles.subTitle}`}>Main office</h3>
                <p className={`${poppins.className} ${styles.text} ${styles.address}`}>1111 46e avenue, US Bla bla bla
                    bla  :D</p>
                <p className={`${poppins.className} ${styles.text} ${styles.contentMail}`}>info@gmail.com</p>
                <div className={styles.smmWrapper}>
                <Smm />
                </div>
            </div>
            <div className={styles.mail}>
                <div className={styles.mailContent}>
                    <p className={`${oswald.className} ${styles.mailSubscribe}`}>subscribe</p>
                    <h3 className={`${oswald.className} ${styles.mailTitle}`}>join our newsletter</h3>
                    <p className={`${poppins.className} ${styles.mailDesc}`}>Good news & event details as well straight to your incoming mail!</p>
                    <form className={styles.mailForm}>
                        <label htmlFor="" className={styles.mailLabel}>
                            <input type="text" placeholder={'Enter Your E-mail'} className={`${poppins.className} ${styles.mailInput}`}/>
                            <button className={styles.mailBtn}>
                                <svg className="icon">
                                    <use xlinkHref="#telegram" />
                                </svg>
                            </button>
                        </label>
                    </form>
                </div>
            </div>
        </section>
    )
}