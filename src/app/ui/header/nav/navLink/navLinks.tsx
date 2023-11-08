'use client'

import styles from './style.module.scss';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {goldman, oswald, poppins} from "@/app/ui/fonts";

const links = [
    {name: 'homepage', href: '/'},
    {name: 'warehouse', href: '/warehouse'},
    {name: 'about us', href: '/about-us'},
    {name: 'contacts', href: '/contacts'},
]

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {
                links.map((link) => {
                    return (
                        <Link key={link.name}
                              className={`${goldman.className} ${styles.navLink} ${pathname === link.href ? ` ${styles.linkActive}` : ''}`}
                              href={link.href}>
                            {link.name}
                        </Link>
                    )
                })
            }
        </>
    )
}