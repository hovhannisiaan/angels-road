import styles from "./style.module.scss";
import {oswald} from "@/app/ui/fonts";

export default function SectionTitle({title, color='black'}: { title: string; color: string }) {
    return (
        <h2 className={`${oswald.className} ${styles.title} ${color === "white" ? styles.white : styles.black}`}>
            {title}
            <div className={styles.line}></div>
        </h2>
    )
}
