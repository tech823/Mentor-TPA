export function Eyebrow({ children, className = "", testId }) {
    return (
        <div
            data-testid={testId}
            className={`eyebrow inline-flex items-center gap-2 ${className}`}
        >
            <span className="inline-block h-[2px] w-7 bg-mentor-blue" />
            {children}
        </div>
    );
}

export function SectionHeader({ eyebrow, title, subtitle, align = "left", className = "", testId }) {
    const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left";
    return (
        <div
            data-testid={testId}
            className={`flex max-w-3xl flex-col gap-4 ${alignClass} ${className}`}
        >
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="display-2">{title}</h2>
            {subtitle && <p className="lead max-w-2xl">{subtitle}</p>}
        </div>
    );
}
