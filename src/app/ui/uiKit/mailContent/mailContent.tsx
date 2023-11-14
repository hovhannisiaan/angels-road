'use client'
import styles from './style.module.scss';
import {poppins, goldman} from "@/app/ui/fonts";
import Button from "@/app/ui/uiKit/button/button";


export default function MailContent({color}: { color: string }) {
    const click = () => {
        console.log('clicked')
    }
    return (
        <div className={styles.mailConent} style={{color: color}}>
            <p className={`${goldman.className} ${styles.mailSubscribe}`}>subscribe</p>
            <h3 className={`${goldman.className} ${styles.mailTitle}`}>join our newsletter</h3>
            <p className={`${poppins.className} ${styles.mailDesc}`}>Good news & event details as well straight to your
                incoming mail!</p>
            <form className={styles.mailForm}>
                <label htmlFor="mail-input" className={styles.mailLabel}>
                    <input style={{border: `1px solid ${color}`}} type="text" id="mail-input"
                           placeholder={'Company name'} className={`${poppins.className} ${styles.mailInput}`}/>
                </label>
                <label htmlFor="mail-input" className={styles.mailLabel}>
                    <input style={{border: `1px solid ${color}`}} type="text" id="mail-input" placeholder={'Phone'}
                           className={`${poppins.className} ${styles.mailInput}`}/>
                </label>
                <label htmlFor="mail-input" className={`${styles.mailLabel} ${styles.mail}`}>
                    <input style={{border: `1px solid ${color}`}} type="text" id="mail-input"
                           placeholder={'Enter Your E-mail'} className={`${poppins.className} ${styles.mailInput}`}/>
                </label>
                <div className={styles.mailBtn}>
                    <Button onClick={click}>
                        view more
                    </Button>
                </div>
            </form>
        </div>
    )
}