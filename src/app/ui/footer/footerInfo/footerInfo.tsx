import styles from './style.module.scss';
import logo from '../../../../../public/Logo.svg';
import Image from "next/image";

export default function FooterInfo() {
    return (
        <div className={styles.footerInfo}>
            <div className={styles.footerInfoImage}>
                <Image
                    src={logo}
                    alt={'Angels Road logo'}
                    height={103}
                    width={103}
                />
            </div>
            <h4 className={styles.footerInfoTitle}>Main office</h4>
            <p className={styles.footerInfoDesc}>1111 46e avenue, US Bla bla bla
                bla :D</p>
        </div>
    )
}