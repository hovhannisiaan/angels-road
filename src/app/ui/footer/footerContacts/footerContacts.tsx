import styles from "./style.module.scss";
import Link from "next/link";
import {oswald,poppins} from "@/app/ui/fonts";
import Smm from "@/app/ui/uiKit/smm/smm";


export default function FooterContacts() {
    return (
        <div>
            <div className={oswald.className}>
                <Link href={'/transportation'} className={styles.link}>transportation</Link>
                <Link href={'/contacts'} className={styles.link}>contact us</Link>
            </div>
            <p className={`${poppins.className} ${styles.mail}`}>info@gmail.com</p>
            <div className={styles.smmContainer}>
                <Smm/>
            </div>
        </div>
    )
}