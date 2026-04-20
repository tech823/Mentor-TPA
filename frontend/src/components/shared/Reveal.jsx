import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal wrapper.
 * Usage: <Reveal><div>...</div></Reveal>
 * Props:
 *  - as: html tag (default "div")
 *  - delay: ms delay
 *  - variant: "up" | "right" | "scale" | "fade"
 *  - once: boolean (default true)
 */
export default function Reveal({
    children,
    as: Tag = "div",
    delay = 0,
    variant = "up",
    once = true,
    className = "",
    ...rest
}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setInView(true);
                        if (once) obs.unobserve(node);
                    } else if (!once) {
                        setInView(false);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, [once]);

    return (
        <Tag
            ref={ref}
            className={`reveal-v ${inView ? "reveal-in" : ""} reveal-${variant} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    );
}
