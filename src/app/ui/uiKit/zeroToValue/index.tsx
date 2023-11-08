'use client'

import {useEffect, useRef, useState} from "react";
import {useInView} from "framer-motion"

export default function ZeroToValue({num}: {num: number}) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const animateValue = (start: number, end: number, duration: number) => {
        if (start === end) return;
        const range = end - start;
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        const timer = setInterval(function () {
            current += increment;
            if (current == end) {
                clearInterval(timer);
            }
            setValue(current)
        }, stepTime);
    }

    useEffect(() => {
        animateValue(0, num, 2000);
    }, [isInView]);

    return (
        <p ref={ref}>
            {value}
        </p>
    )
}