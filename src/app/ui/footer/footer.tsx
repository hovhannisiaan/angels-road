import styles from './style.module.scss';
import FooterInfo from "@/app/ui/footer/footerInfo/footerInfo";
import FooterService from "@/app/ui/footer/footerServices/footerServices";
import FooterNav from "@/app/ui/footer/footerNav/footerNav";
import FooterContacts from "@/app/ui/footer/footerContacts/footerContacts";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <FooterInfo />
                <div className={styles.footerRight}>
                    <FooterService />
                    <FooterNav />
                    <FooterContacts />
                </div>
            </div>
        </footer>
    )
}