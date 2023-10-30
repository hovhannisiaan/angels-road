import styles from './style.module.scss';
import Link from "next/link";
import {usePathname} from "next/navigation";
import NavLinks from "@/app/ui/header/nav/navLink/navLinks";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navList}>
                <NavLinks />
            </div>
        </nav>
    )
}