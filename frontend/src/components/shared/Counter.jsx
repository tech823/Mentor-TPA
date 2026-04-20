import { useEffect, useRef, useState } from "react";

/**
 * Animated number counter triggered when in view.
 * Parses strings like "300+", "15,000+", "98.4%", "—".
 * Falls back to displaying the raw string if no numeric value is found.
 */
export default function Counter({ value, duration = 1400, className = "" }) {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);
    const [display, setDisplay] = useState(value);

    // Parse numeric target from the string.
    const match = typeof value === "string" ? value.match(/-?\d[\d,.]*/) : null;
    const numericStr = match ? match[0].replace(/,/g, "") : null;
    const target = numericStr !== null ? parseFloat(numericStr) : null;
    const decimals = numericStr && numericStr.includes(".")
        ? numericStr.split(".")[1].length
        : 0;
    const prefix = match ? value.slice(0, match.index) : "";
    const suffix = match ? value.slice(match.index + match[0].length) : "";

    useEffect(() => {
        if (target === null) {
            setDisplay(value);
            return;
        }
        const node = ref.current;
        if (!node || typeof IntersectionObserver === "undefined") {
            setDisplay(value);
            return;
        }
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting && !started) {
                        setStarted(true);
                        obs.unobserve(node);
                    }
                });
            },
            { threshold: 0.4 }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, [target, value, started]);

    useEffect(() => {
        if (!started || target === null) return;
        const start = performance.now();
        let raf;
        const tick = (now) => {
            const p = Math.min(1, (now - start) / duration);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - p, 3);
            const current = target * eased;
            const formatted = decimals > 0
                ? current.toFixed(decimals)
                : Math.round(current).toLocaleString("en-US");
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [started, target, duration, decimals, prefix, suffix]);

    return (
        <span ref={ref} className={className} data-testid="counter">
            {display}
        </span>
    );
}
