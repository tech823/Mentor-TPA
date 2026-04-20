import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
    { to: "/about", label: "About" },
    {
        label: "Solutions",
        children: [
            { to: "/solutions", label: "Overview" },
            { to: "/solutions/self-funded", label: "Self-Funded Companies" },
            { to: "/solutions/insurance", label: "Insurance Companies" },
            { to: "/solutions/providers", label: "Healthcare Providers" },
        ],
    },
    { to: "/services", label: "Services" },
    { to: "/technology", label: "Technology" },
    { to: "/provider-network", label: "Provider Network" },
    { to: "/hospital-panel", label: "Hospital Panel" },
];

function Logo() {
    return (
        <Link to="/" className="flex items-center gap-2" data-testid="nav-logo">
            <div className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-mentor-black">
                <span className="font-extrabold text-white text-[13px] tracking-tight">M</span>
            </div>
            <div className="leading-none">
                <div className="text-[17px] font-extrabold tracking-tight text-mentor-black">
                    Mentor<span className="text-mentor-blue">.</span>TPA
                </div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-mentor-muted">
                    Healthcare Infrastructure
                </div>
            </div>
        </Link>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <header
            data-testid="site-navbar"
            className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md transition-all ${
                scrolled ? "border-b border-mentor-line" : "border-b border-transparent"
            }`}
        >
            <div className="container-edge flex h-[72px] items-center justify-between">
                <Logo />

                <nav className="hidden items-center gap-7 lg:flex" data-testid="nav-desktop">
                    {navItems.map((item) =>
                        item.children ? (
                            <DropdownMenu key={item.label}>
                                <DropdownMenuTrigger
                                    className="flex items-center gap-1 text-sm font-semibold text-mentor-black/80 outline-none transition hover:text-mentor-black"
                                    data-testid={`nav-${item.label.toLowerCase()}`}
                                >
                                    {item.label}
                                    <ChevronDown className="h-3.5 w-3.5" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="start"
                                    className="mt-2 w-[280px] rounded-xl border-mentor-line p-2"
                                >
                                    {item.children.map((c) => (
                                        <DropdownMenuItem
                                            key={c.to}
                                            asChild
                                            className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium focus:bg-mentor-surface"
                                        >
                                            <Link to={c.to} data-testid={`nav-link-${c.to.replace(/\//g, "-")}`}>
                                                {c.label}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                data-testid={`nav-link-${item.to.replace(/\//g, "-")}`}
                                className={({ isActive }) =>
                                    `text-sm font-semibold transition ${
                                        isActive ? "text-mentor-black" : "text-mentor-black/70 hover:text-mentor-black"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        )
                    )}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <Link
                        to="/book-demo"
                        data-testid="nav-cta-demo"
                        className="text-sm font-semibold text-mentor-black underline-offset-4 hover:underline"
                    >
                        Book a Demo
                    </Link>
                    <Link
                        to="/request-proposal"
                        data-testid="nav-cta-proposal"
                        className="group inline-flex items-center gap-1.5 rounded-full bg-mentor-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-mentor-blue"
                    >
                        Get a Proposal
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>

                <button
                    onClick={() => setMobileOpen((v) => !v)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-mentor-line lg:hidden"
                    aria-label="Toggle menu"
                    data-testid="nav-mobile-toggle"
                >
                    {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {mobileOpen && (
                <div
                    className="border-t border-mentor-line bg-white lg:hidden"
                    data-testid="nav-mobile-panel"
                >
                    <div className="container-edge flex flex-col gap-1 py-4">
                        {navItems.map((item) =>
                            item.children ? (
                                <details key={item.label} className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-base font-semibold">
                                        {item.label}
                                        <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                                    </summary>
                                    <div className="flex flex-col gap-1 pl-3 pb-2">
                                        {item.children.map((c) => (
                                            <Link
                                                key={c.to}
                                                to={c.to}
                                                className="py-1.5 text-sm text-mentor-black/70"
                                                data-testid={`m-nav-${c.to.replace(/\//g, "-")}`}
                                            >
                                                {c.label}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className="py-2.5 text-base font-semibold"
                                    data-testid={`m-nav-${item.to.replace(/\//g, "-")}`}
                                >
                                    {item.label}
                                </Link>
                            )
                        )}
                        <div className="mt-3 flex flex-col gap-2 border-t border-mentor-line pt-4">
                            <Link
                                to="/book-demo"
                                className="rounded-full border border-mentor-black py-2.5 text-center text-sm font-semibold"
                                data-testid="m-nav-cta-demo"
                            >
                                Book a Demo
                            </Link>
                            <Link
                                to="/request-proposal"
                                className="rounded-full bg-mentor-black py-2.5 text-center text-sm font-semibold text-white"
                                data-testid="m-nav-cta-proposal"
                            >
                                Get a Proposal
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
