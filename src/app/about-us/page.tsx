import styles from './style.module.scss';
import Breadcrumb from "@/app/ui/uiKit/breadcrumbs/breadcrumbs";
import AboutUs from "@/app/ui/home/aboutUs/aboutUs";
import Mission from "@/app/ui/aboutUsPage/mission/mission";
import MailSection from "@/app/ui/uiKit/mailSection/MailSection";
import Facts from "@/app/ui/aboutUsPage/facts/facts";
import Breadcrumbs from "@/app/ui/uiKit/breadcrumbs/breadcrumbs";

export default function Page() {
    return (
        <div className='inner-page-container'>
            <Breadcrumbs />
            <section className={styles.aboutUsWrapper}>
                <AboutUs inner={true}/>
            </section>
            <Mission/>
            <Facts />
            <div className={styles.mailWrapper}>
                <MailSection/>
            </div>
        </div>
    )
}