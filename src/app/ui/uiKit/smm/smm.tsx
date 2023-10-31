import styles from "./style.module.scss";

const smmLinks = [
    {icon: 'twitter', href: 'https://twitter.com'},
    {icon: 'linked-in', href: 'https://linkedin.com'},
    {icon: 'facebook', href: 'https://facebook.com'},
    {icon: 'youtube', href: 'https://youtube.com'},
    {icon: 'instagram', href: 'https://instagram.com'},
]

export default function Smm() {
    return (
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
    )
}