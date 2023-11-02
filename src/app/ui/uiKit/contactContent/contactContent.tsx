import styles from "./style.module.scss";
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";
import {goldman, poppins} from "@/app/ui/fonts";
import Smm from "@/app/ui/uiKit/smm/smm";

export default function ContactContent({width} : {width: number}) {
    return (
        <div className={styles.contentWrapper} style={{width: `${width / 13.7}%`}}>
            <div className={styles.titleWrapper}>
                <SectionTitle title={'Contacts'} color={'white'} />
            </div>
            <h3 className={`${goldman.className} ${styles.subTitle}`}>Main office</h3>
            <p className={`${poppins.className} ${styles.text} ${styles.address}`}>1111 46e avenue, US Bla bla bla
                bla  :D</p>
            <p className={`${poppins.className} ${styles.text} ${styles.contentMail}`}>info@gmail.com</p>
            <div className={styles.smmWrapper}>
                <Smm />
            </div>
        </div>
    )
}