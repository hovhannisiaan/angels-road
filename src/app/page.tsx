import Image from 'next/image'
import styles from './page.module.scss'
import Hero from "@/app/ui/home/hero/hero";
import AboutUs from "@/app/ui/home/aboutUs/aboutUs";
import Services from "@/app/ui/home/services/services";
import Advantages from "@/app/ui/home/advantages/advantages";
import Banner from "@/app/ui/home/banner/banner";
import Contacts from "@/app/ui/home/contacts/contacts";
import Testimonial from "@/app/ui/home/testimonial";

export default function Home() {
    return (
        <main>
            <Hero/>
            <section className={styles.aboutUsWrapper}>
            <AboutUs inner={false}/>
            </section>
            <Services/>
            <Testimonial />
            <Advantages/>
            {/*<Banner />*/}
            <Contacts />
        </main>
    )
}
