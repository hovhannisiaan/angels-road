import styles from './style.module.scss';
import Link from "next/link";
import {goldman, oswald, poppins} from "@/app/ui/fonts";
import Smm from "@/app/ui/uiKit/smm/smm";

export default function FooterService() {
    return (
        <div>
            <h3 className={`${goldman.className} ${styles.title}`}>special services</h3>
            <ul className={`${poppins.className} ${styles.linkList}`}>
                <li className={styles.linkItem}>Order fullfillment / Pick & Pack</li>
                <li className={styles.linkItem}>Storage and Cross-docking facility</li>
                <li className={styles.linkItem}>Warehousing Services</li>
            </ul>

        </div>
    )
}