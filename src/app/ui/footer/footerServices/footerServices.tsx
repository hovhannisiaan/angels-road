import styles from './style.module.scss';
import Link from "next/link";
import {oswald, poppins} from "@/app/ui/fonts";
import Smm from "@/app/ui/smm/smm";

export default function FooterService() {
    return (
        <div>
            <h3 className={`${oswald.className} ${styles.title}`}>special services</h3>
            <ul className={`${poppins.className} ${styles.linkList}`}>
                <li className={styles.linkItem}>
                    <Link className={styles.link} href={'/'}>Order fullfillment / Pick & Pack</Link>
                </li>
                <li className={styles.linkItem}>
                    <Link className={styles.link} href={'/'}>Storage and Cross-docking facility</Link>
                </li>
                <li className={styles.linkItem}>
                    <Link className={styles.link} href={'/'}>Warehousing Services</Link>
                </li>
            </ul>

        </div>
    )
}