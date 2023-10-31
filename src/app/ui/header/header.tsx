'use client'

import styles from "./style.module.scss";
import Image from "next/image";
import logo from "../../../../public/Logo.svg";
import Nav from "@/app/ui/header/nav/nav";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

export default function Header() {
    const [scrolled, setScrolled] = useState(true);
    const [innerPage, setInnerPage] = useState(false);
    const path = usePathname();

    useEffect(() => {
        path === '/' ? setInnerPage(false) : setInnerPage(true);
        !innerPage ? setScrolled(false) : setScrolled(true);
        function checkScroll() {
            if (window.scrollY !== 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        if (innerPage) return
        else {
            window.addEventListener("scroll", checkScroll);
            // Remove event listener on cleanup
            return () => window.removeEventListener("scroll", checkScroll);
        }
    }, [path, innerPage,]);

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
                    <Nav/>

                </div>
            </header>
        </>
    )
}