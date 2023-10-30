import styles from "./style.module.scss";
import Link from "next/link";
import {oswald} from "@/app/ui/fonts";

const smmLinks = [
    {icon: 'twitter', href: 'https://twitter.com'},
    {icon: 'linked-in', href: 'https://linkedin.com'},
    {icon: 'facebook', href: 'https://facebook.com'},
    {icon: 'youtube', href: 'https://youtube.com'},
    {icon: 'instagram', href: 'https://instagram.com'},
]
export default function FooterContacts() {
    return (
        <div>
            <div className={oswald.className}>
                <Link href={'/'} className={styles.link}>transportation</Link>
                <Link href={'/'} className={styles.link}>contact us</Link>
            </div>
            <p className={styles.mail}>info@gmail.com</p>
            <ul className={styles.smmList}>
                {smmLinks.map((link) => {
                    return (
                        <li className={styles.smmItem} key={link.icon}>
                            <a className={styles.smmLink} href={link.href}>
                                <span className="img-container">
                                    <svg className="icon">
                                      <use xlinkHref={`#${link.icon}`}/>
                                    </svg>
                                </span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}