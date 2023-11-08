import styles from './style.module.scss';
import SectionTitle from "@/app/ui/uiKit/sectionTitle/sectionTitle";
import FactsCard from "@/app/ui/aboutUsPage/facts/factsCard/factsCard";

export default function Facts() {
    return (
        <section className={styles.facts}>
            <div className="page-container">
                <div className={styles.factsContainer}>
                    <div className={styles.factsTitleWrapper}>
                        <SectionTitle title={'some company facts'} color={'black'}/>
                    </div>
                    <div className={styles.factsCards}>
                        <FactsCard number={140}>Country counting</FactsCard>
                        <FactsCard number={80}>Projects finished</FactsCard>
                        <FactsCard number={80}>Projects finished</FactsCard>
                    </div>
                </div>
            </div>
        </section>
    )
}