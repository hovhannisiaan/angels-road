import styles from './style.module.scss';
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";
import WarehouseCard from "@/app/ui/uiKit/warehouseCard/warehouseCard";
import MailSection from "@/app/ui/uiKit/mailSection/MailSection";

export default function Page() {
    return (
        <section className={styles.trans}>
            <div className={styles.transTop}>
                <div className="page-container">
                    <div className={styles.transContent}>
                        <div className={styles.transTitle}>
                            <SectionTitle title={'transportation'} color={'black'}/>
                        </div>
                        <div className={styles.transCards}>
                            <WarehouseCard icon={'docking'} title={'cross Docking'}>
                                Our cross-docking services are designed to facilitate the swift transfer of goods from
                                one transportation mode to another, reducing storage time and handling costs. This
                                efficient process ensures your goods move seamlessly through the supply chain.
                            </WarehouseCard>
                            <WarehouseCard icon={'docking'} title={'cross Docking'}>
                                Our cross-docking services are designed to facilitate the swift transfer of goods from
                                one transportation mode to another, reducing storage time and handling costs. This
                                efficient process ensures your goods move seamlessly through the supply chain.
                            </WarehouseCard>
                        </div>
                        <div className={styles.transMail}>
                            <MailSection />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}