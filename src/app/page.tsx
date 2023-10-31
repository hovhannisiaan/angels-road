import Image from 'next/image'
import styles from './page.module.css'
import Hero from "@/app/ui/hero/hero";
import AboutUs from "@/app/ui/aboutUs/aboutUs";
import Services from "@/app/ui/services/services";
import Advantages from "@/app/ui/advantages/advantages";
import Banner from "@/app/ui/banner/banner";
import Contacts from "@/app/ui/contacts/contacts";

export default function Home() {
    return (
        <main>
            <Hero/>
            <AboutUs/>
            <Services/>
            <Advantages/>
            <Banner />
            <Contacts />
        </main>
    )
}
