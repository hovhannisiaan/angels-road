import Breadcrumb from "@/app/ui/uiKit/breadcrumbs/breadcrumbs";
import styles from './style.module.scss'
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";
import Link from "next/link";
import Button from "@/app/ui/uiKit/button/button";
import {goldman} from "@/app/ui/fonts";
import MailSection from "@/app/ui/uiKit/mailSection/MailSection";

export default function Page() {
    return (
        <>
            <Breadcrumb/>
            <section className={styles.servicesContainer}>
                <div className="page-container">
                    <div className={styles.servicesTitleWrapper}>
                        <SectionTitle title={'services'} color={'black'}/>
                    </div>
                    <div className={styles.services}>
                        <Link href={'services/warehouse'} className={styles.serviceCard}>
                            <div className={styles.serviceCardContent}>
                                <h3 className={`${goldman.className} ${styles.serviceCardTitle}`}>Warehouse</h3>
                                <div className={styles.serviceCardButton}>
                                    <Button href={'services/warehouse'}>
                                        View More
                                    </Button>
                                </div>
                            </div>
                        </Link>
                        <Link href={'services/transportation'} className={styles.serviceCard}>
                            <div className={styles.serviceCardContent}>
                                <h3 className={`${goldman.className} ${styles.serviceCardTitle}`}>Transportation</h3>
                                <div className={styles.serviceCardButton}>
                                    <Button href={'services/transportation'}>
                                        View More
                                    </Button>
                                </div>
                            </div>

                        </Link>
                    </div>
                </div>
            </section>
            <div className={styles.servicesMail}>
                <MailSection />
            </div>
        </>
    )
}