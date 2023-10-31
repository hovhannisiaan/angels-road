import styles from './style.module.scss';
import {poppins, oswald} from "@/app/ui/fonts";

export default function MailContent() {
    return (
        <>
            <p className={`${oswald.className} ${styles.mailSubscribe}`}>subscribe</p>
            <h3 className={`${oswald.className} ${styles.mailTitle}`}>join our newsletter</h3>
            <p className={`${poppins.className} ${styles.mailDesc}`}>Good news & event details as well straight to your incoming mail!</p>
            <form className={styles.mailForm}>
                <label htmlFor="mail-input" className={styles.mailLabel}>
                    <input type="text" id="mail-input" placeholder={'Enter Your E-mail'} className={`${poppins.className} ${styles.mailInput}`}/>
                    <button className={styles.mailBtn}>
                        <svg className="icon">
                            <use xlinkHref="#telegram" />
                        </svg>
                    </button>
                </label>
            </form>
        </>
    )
}