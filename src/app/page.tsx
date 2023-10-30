import Image from 'next/image'
import styles from './page.module.css'
import Hero from "@/app/ui/hero/hero";
import AboutUs from "@/app/ui/aboutUs/aboutUs";
import Services from "@/app/ui/services/services";

export default function Home() {
    return (
        <main>
            <Hero/>
            <AboutUs/>
            <Services/>
        </main>
    )
}
