import styles from './style.module.scss';
import {poppins, goldman} from "@/app/ui/fonts";

export default function MailContent({color} : {color: string}) {
    return (
        <div className={styles.mailConent} style={{color: color}}>
            <p className={`${goldman.className} ${styles.mailSubscribe}`}>subscribe</p>
            <h3 className={`${goldman.className} ${styles.mailTitle}`}>join our newsletter</h3>
            <p className={`${poppins.className} ${styles.mailDesc}`}>Good news & event details as well straight to your incoming mail!</p>
            <form className={styles.mailForm}>
                <label htmlFor="mail-input" className={styles.mailLabel}>
                    <input style={{border: `1px solid ${color}`}} type="text" id="mail-input" placeholder={'Enter Your E-mail'} className={`${poppins.className} ${styles.mailInput}`}/>
                    <button className={styles.mailBtn}>
                        <svg style={{fill: color}} className="icon">
                            <use xlinkHref="#telegram" />
                        </svg>
                    </button>
                </label>
            </form>
        </div>
    )
}