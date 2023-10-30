import styles from './style.module.scss';
import Link from "next/link";
import {oswald} from "@/app/ui/fonts";

export default function FooterNav() {
    return (
        <div>
            <ul className={`${oswald.className} ${styles.navList}`}>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href={'/'}>homepage</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href={'/about-us'}>about us</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href={'/'}>services</Link>
                </li>
            </ul>
        </div>
    )
}