import styles from './style.module.scss';
import ZeroToValue from "@/app/ui/uiKit/zeroToValue";
import {goldman, poppins} from "@/app/ui/fonts";
import React from "react";

export default function FactsCard({number, children} : {number: number, children: React.ReactNode}) {
    return (
        <div className={styles.card}>
            <div className={`${goldman.className} ${styles.cardNumber}`}>
                <ZeroToValue num={number}/>
            </div>
            <p className={`${poppins.className} ${styles.cardDesc}`}>
                {children}
            </p>
        </div>
    )
}