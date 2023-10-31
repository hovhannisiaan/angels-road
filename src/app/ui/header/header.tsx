'use client'

import styles from "./style.module.scss";
import Image from "next/image";
import logo from "../../../../public/Logo.svg";
import Nav from "@/app/ui/header/nav/nav";
import {useEffect, useState} from "react";

export default function Header () {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function checkScroll() {
            if (window.scrollY === 0) {
                setScrolled(false)
            } else {
                setScrolled(true)
            }
        }
            window.addEventListener("scroll", checkScroll);
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", checkScroll);

    }, []);

    return (
        <>
            <header className={`${styles.header}${scrolled ? ` ${styles.scrolled}` : ''}`}>
                <div className={styles.headerContainer}>
                    <Image
                        src={logo}
                        alt={"Angels Road logo"}
                        width={69}
                        height={69}
                    />
                    <Nav />

                </div>
            </header>
        </>
    )
}