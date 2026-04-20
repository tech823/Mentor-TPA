import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const cols = [
    {
        heading: "Company",
        links: [
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/technology", label: "Technology" },
            { to: "/contact", label: "Contact" },
        ],
    },
    {
        heading: "Solutions",
        links: [
            { to: "/solutions", label: "Solutions Overview" },
            { to: "/solutions/self-funded", label: "Self-Funded Companies" },
            { to: "/solutions/insurance", label: "Insurance Companies" },
            { to: "/solutions/providers", label: "Healthcare Providers" },
        ],
    },
    {
        heading: "Network",
        links: [
            { to: "/provider-network", label: "Provider Network" },
            { to: "/hospital-panel", label: "Hospital Panel List" },
        ],
    },
    {
        heading: "Legal",
        links: [
            { to: "/privacy", label: "Privacy Policy" },
            { to: "/terms", label: "Terms of Use" },
        ],
    },
];

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="relative mt-auto bg-mentor-black text-white"
        >
            {/* Top CTA band */}
            <div className="border-b border-white/10">
                <div className="container-edge grid gap-8 py-14 md:grid-cols-[1.4fr,1fr] md:items-end md:py-20">
                    <h2 className="display-2 text-white" data-testid="footer-cta-heading">
                        Ready to see how healthcare
                        <br />
                        <span className="text-mentor-blue">should</span> be administered?
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 md:justify-end">
                        <Link
                            to="/book-demo"
                            data-testid="footer-cta-demo"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-white hover:bg-white hover:text-mentor-black"
                        >
                            Book a Demo
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/request-proposal"
                            data-testid="footer-cta-proposal"
                            className="inline-flex items-center gap-2 rounded-full bg-mentor-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mentor-black"
                        >
                            Get a Proposal
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-edge grid gap-12 py-14 md:grid-cols-[1.5fr,3fr]">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
                            <span className="font-extrabold text-mentor-black">M</span>
                        </div>
                        <div className="text-lg font-extrabold tracking-tight">
                            Mentor<span className="text-mentor-blue">.</span>TPA
                        </div>
                    </div>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
                        Building the digital backbone of healthcare administration.
                        Claims, network, and control in one system.
                    </p>
                    <div className="mt-6 space-y-2.5 text-sm text-white/75">
                        <div className="flex items-start gap-2.5">
                            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-mentor-blue" />
                            <span>Head Office · Pakistan</span>
                        </div>
                        <a href="mailto:hello@mentortpa.com" className="flex items-center gap-2.5 transition hover:text-white" data-testid="footer-email">
                            <Mail className="h-4 w-4 flex-shrink-0 text-mentor-blue" />
                            hello@mentortpa.com
                        </a>
                        <a href="tel:+92000000000" className="flex items-center gap-2.5 transition hover:text-white" data-testid="footer-phone">
                            <Phone className="h-4 w-4 flex-shrink-0 text-mentor-blue" />
                            +92 00 000 0000
                        </a>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <span className="pill" style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>SECP Licensed</span>
                        <span className="pill" style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>Shariah Compliant</span>
                        <span className="pill" style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>AI Enabled</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {cols.map((col) => (
                        <div key={col.heading}>
                            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
                                {col.heading}
                            </div>
                            <ul className="space-y-2.5">
                                {col.links.map((l) => (
                                    <li key={l.to}>
                                        <Link
                                            to={l.to}
                                            data-testid={`footer-link-${l.to.replace(/\//g, "-")}`}
                                            className="text-sm text-white/80 transition hover:text-white"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-edge flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
                    <div>© {new Date().getFullYear()} Mentor TPA. All rights reserved.</div>
                    <div className="flex gap-5">
                        <Link to="/privacy" className="hover:text-white">Privacy</Link>
                        <Link to="/terms" className="hover:text-white">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
