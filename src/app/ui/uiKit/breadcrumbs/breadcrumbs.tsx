'use client'

import styles from './style.module.scss';
import React from 'react'

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {poppins} from "@/app/ui/fonts";

const Breadcrumb = () => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <div className="page-container">
            <ul className={styles.list}>
                <li className={styles.item}><Link className={`${poppins.className} ${styles.link}`} href={'/'}>Homepage</Link></li>
                {pathNames.length > 0 && <li className={styles.seperator}>&nbsp;/&nbsp;</li>}
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`;
                        const linkItem = link[0].toUpperCase() + link.slice(1, link.length);
                        if (pathNames.length !== index + 1) {
                            return (
                                <React.Fragment key={index}>
                                    <li className={styles.item}>
                                        <Link className={`${poppins.className} ${styles.link}`} href={href}>{linkItem}</Link>
                                    </li>
                                    {pathNames.length !== index + 1 && <li className={styles.seperator}>&nbsp;/&nbsp;</li>}
                                </React.Fragment>
                            )
                        } else {
                            return (
                                <React.Fragment key={index}>
                                    <li className={styles.item}>
                                        <p className={`${poppins.className} ${styles.link} ${styles.text}`}>{linkItem}</p>
                                    </li>
                                    {pathNames.length !== index + 1 && <li className={styles.seperator}>&nbsp;/&nbsp;</li>}
                                </React.Fragment>
                            )
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Breadcrumb;