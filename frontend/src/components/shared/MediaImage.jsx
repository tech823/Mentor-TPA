import { useState } from "react";

/**
 * Responsive image with skeleton loader, subtle hover zoom,
 * optional grain overlay, and optional corner frame accent.
 */
export default function MediaImage({
    src,
    alt = "",
    className = "",
    ratio = "4/3",
    rounded = "rounded-3xl",
    frame = false,
    overlay = "soft",
    testId,
}) {
    const [loaded, setLoaded] = useState(false);

    const overlayClass = {
        soft: "bg-gradient-to-tr from-mentor-black/10 via-transparent to-transparent",
        dark: "bg-gradient-to-t from-mentor-black/60 via-mentor-black/10 to-transparent",
        blue: "bg-gradient-to-tr from-mentor-blue/20 via-transparent to-mentor-black/10",
        none: "",
    }[overlay] || "";

    return (
        <div
            data-testid={testId}
            className={`relative overflow-hidden ${rounded} border border-mentor-line bg-mentor-surface group ${className}`}
            style={{ aspectRatio: ratio }}
        >
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-mentor-surface" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`h-full w-full object-cover transition-[transform,opacity] duration-[1200ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04] ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            />
            {overlay !== "none" && (
                <div className={`pointer-events-none absolute inset-0 ${overlayClass}`} />
            )}
            {/* grain */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                }}
            />
            {frame && (
                <>
                    <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-mentor-blue" />
                    <span className="pointer-events-none absolute right-4 bottom-4 h-6 w-6 border-r-2 border-b-2 border-mentor-blue" />
                </>
            )}
        </div>
    );
}
