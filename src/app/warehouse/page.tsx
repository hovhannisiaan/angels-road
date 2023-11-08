import styles from "./style.module.scss";
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";
import WarehouseCard from "@/app/ui/uiKit/warehouseCard/warehouseCard";

export default function Page() {
    return (
        <section className={styles.warehouse}>
            <div className={styles.warehouseBlack}>
                <div className="page-container">
                    <div className={styles.warehouseTitleWrapper}>
                        <SectionTitle title={'warehouse services'} color={'white'}/>
                    </div>
                    <div className={styles.warehouseCards}>
                        <WarehouseCard theme={'light'} icon={'docking'} title={'cross Docking'}>
                            Our cross-docking services are designed to facilitate the swift transfer of goods from
                            one transportation mode to another, reducing storage time and handling costs. This
                            efficient process ensures your goods move seamlessly through the supply chain.
                        </WarehouseCard>
                        <WarehouseCard theme={'light'} icon={'pickup'} title={'Local pick up and Deliveries'}>
                            Our cross-docking services are designed to facilitate the swift transfer of goods from
                            one transportation mode to another, reducing storage time and handling costs. This
                            efficient process ensures your goods move seamlessly through the supply chain.
                        </WarehouseCard>
                    </div>
                </div>
            </div>
            <div className={styles.warehouseImage}>
                <div className="page-container">
                    <div className={styles.warehouseCards}>
                        <WarehouseCard icon={'storage'} title={'storage'}>
                            Our cross-docking services are designed to facilitate the swift transfer of goods from
                            one transportation mode to another, reducing storage time and handling costs. This
                            efficient process ensures your goods move seamlessly through the supply chain.
                        </WarehouseCard>
                        <WarehouseCard icon={'pickup'} title={'Local pick up and Deliveries'}>
                            Our cross-docking services are designed to facilitate the swift transfer of goods from
                            one transportation mode to another, reducing storage time and handling costs. This
                            efficient process ensures your goods move seamlessly through the supply chain.
                        </WarehouseCard>
                        <WarehouseCard icon={'freightScale'} title={'Freight scale'}>
                            Our cross-docking services are designed to facilitate the swift transfer of goods from
                            one transportation mode to another, reducing storage time and handling costs. This
                            efficient process ensures your goods move seamlessly through the supply chain.
                        </WarehouseCard>
                        <WarehouseCard icon={'truckTime'} title={'Extension forks'}>
                            Our cross-docking services are designed to facilitate the swift transfer of goods from
                            one transportation mode to another, reducing storage time and handling costs. This
                            efficient process ensures your goods move seamlessly through the supply chain.
                        </WarehouseCard>
                    </div>
                </div>
            </div>
            <div className={styles.warehouseWhite}>
                <div className="page-container">
                    <div className={styles.warehouseCards}>
                        <WarehouseCard icon={'loaderCar'} title={'freight disposal'}>
                            Our cross-docking services are designed to facilitate the swift transfer of goods from
                            one transportation mode to another, reducing storage time and handling costs. This
                            efficient process ensures your goods move seamlessly through the supply chain.
                        </WarehouseCard>
                        <WarehouseCard icon={'loaderCar'} title={'freight disposal'}>
                            Our cross-docking services are designed to facilitate the swift transfer of goods from
                            one transportation mode to another, reducing storage time and handling costs. This
                            efficient process ensures your goods move seamlessly through the supply chain.
                        </WarehouseCard>
                    </div>
                </div>
            </div>
            <div className={styles.warehouseOrange}>
                <div className="page-container">
                    <div className={styles.warehouseCards}>
                        <WarehouseCard icon={'truckTime'} title={'After Hours Services'}>
                            Our cross-docking services are designed to facilitate the swift transfer of goods from
                            one transportation mode to another, reducing storage time and handling costs. This
                            efficient process ensures your goods move seamlessly through the supply chain.
                        </WarehouseCard>
                        <WarehouseCard icon={'truckTime'} title={'Transloading'}>
                            Our cross-docking services are designed to facilitate the swift transfer of goods from
                            one transportation mode to another, reducing storage time and handling costs. This
                            efficient process ensures your goods move seamlessly through the supply chain.
                        </WarehouseCard>
                    </div>
                </div>
            </div>
        </section>
    )
}