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
      { to: "/solutions/self-funded", label: "For Self-Funded Companies" },
      { to: "/solutions/insurance", label: "For Insurance Companies" },
      { to: "/solutions/providers", label: "For Healthcare Providers" },
    ],
  },
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Technology" },
  { to: "/provider-network", label: "Provider Network" },
  { to: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" data-testid="nav-logo">
      <img src="/Logo.png" alt="Mentor Third-Party Administrator (TPA)" className="h-10 w-auto" />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md transition-all ${scrolled ? "border-b border-mentor-line" : "border-b border-transparent"}`}
      role="banner"
    >
      <div className="container-edge flex h-[72px] items-center justify-between">
        <Logo />
        <nav
          className="hidden items-center gap-6 lg:flex"
          data-testid="nav-desktop"
          aria-label="Main Navigation"
        >
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger
                  className="flex items-center gap-1 text-sm font-semibold text-mentor-black/80 outline-none transition hover:text-mentor-black focus-visible:ring-2 focus-visible:ring-mentor-blue focus-visible:ring-offset-2 rounded-md px-1"
                  data-testid={`nav-${item.label.toLowerCase()}`}
                  aria-label={`${item.label} submenu`}
                >
                  {item.label} <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="mt-2 w-[min(280px,85vw)] rounded-xl border-mentor-line p-2"
                >
                  {item.children.map((c) => (
                    <DropdownMenuItem
                      key={c.to}
                      asChild
                      className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium focus:bg-mentor-surface"
                    >
                      <Link
                        to={c.to}
                        data-testid={`nav-link-${c.to.replace(/[\/\#]/g, "-")}`}
                      >
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
                  `text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-mentor-blue focus-visible:ring-offset-2 rounded-md px-1 ${isActive ? "text-mentor-black" : "text-mentor-black/70 hover:text-mentor-black"}`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/book-demo"
            data-testid="nav-cta-demo"
            className="text-sm font-semibold text-mentor-black underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mentor-blue rounded-md px-1"
          >
            Book a Demo
          </Link>
          <Link
            to="/request-proposal"
            data-testid="nav-cta-proposal"
            className="group inline-flex items-center gap-1.5 rounded-full bg-mentor-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-mentor-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mentor-blue focus-visible:ring-offset-2"
          >
            Get a Proposal{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-mentor-line lg:hidden focus-visible:ring-2 focus-visible:ring-mentor-blue"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          data-testid="nav-mobile-toggle"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-mentor-line bg-white lg:hidden"
          data-testid="nav-mobile-panel"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <div className="container-edge flex flex-col gap-1 py-4">
            {navItems.map((item) =>
              item.children ? (
                <details key={item.label} className="group">
                  <summary 
                    className="flex cursor-pointer list-none items-center justify-between py-3.5 text-base font-semibold focus-visible:text-mentor-blue outline-none"
                    aria-label={`Toggle ${item.label} sub-menu`}
                  >
                    {item.label}{" "}
                    <ChevronDown className="h-4 w-4 transition group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="flex flex-col gap-1 pl-3 pb-2">
                    {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="py-3.5 text-sm text-mentor-black/70 hover:text-mentor-black focus-visible:text-mentor-blue outline-none min-h-[44px] flex items-center"
                          data-testid={`m-nav-${c.to.replace(/[\/\#]/g, "-")}`}
                          aria-label={`View solution: ${c.label}`}
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
                  className="py-3.5 text-base font-semibold hover:text-mentor-blue focus-visible:text-mentor-blue outline-none"
                  data-testid={`m-nav-${item.to.replace(/\//g, "-")}`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-3 flex flex-col gap-2 border-t border-mentor-line pt-4">
              <Link
                to="/book-demo"
                className="rounded-full border border-mentor-black py-4 text-center text-sm font-bold hover:bg-mentor-surface focus-visible:ring-2 focus-visible:ring-mentor-blue outline-none"
                data-testid="m-nav-cta-demo"
                aria-label="Book a Demo (Mobile)"
              >
                Book a Demo
              </Link>
              <Link
                to="/request-proposal"
                className="rounded-full bg-mentor-black py-4 text-center text-sm font-bold text-white hover:bg-mentor-blue focus-visible:ring-2 focus-visible:ring-mentor-blue outline-none"
                data-testid="m-nav-cta-proposal"
                aria-label="Get a Proposal (Mobile)"
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
