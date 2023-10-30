import styles from "./style.module.scss";
import Image from "next/image";
import logo from "../../../../public/Logo.svg";
import Nav from "@/app/ui/header/nav/nav";

export default function Header () {
    return (
        <>
            <header className={styles.header}>
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