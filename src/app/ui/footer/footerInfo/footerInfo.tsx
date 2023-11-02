import styles from './style.module.scss';
import logo from '../../../../../public/Logo.svg';
import Image from "next/image";
import {oswald, poppins} from "@/app/ui/fonts";
import Link from "next/link";

export default function FooterInfo() {
    return (
        <div className={styles.footerInfo}>
            <Link href={'/'} className={styles.footerInfoImage}>
                <Image
                    src={logo}
                    alt={'Angels Road logo'}
                    height={103}
                    width={103}
                />
            </Link>
            <h4 className={`${oswald.className} ${styles.footerInfoTitle}`}>Main office</h4>
            <p className={`${poppins.className} ${styles.footerInfoDesc}`}>1111 46e avenue, US Bla bla bla
                bla :D</p>
        </div>
    )
}