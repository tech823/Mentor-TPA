import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Globe } from "lucide-react";

const cols = [
  {
    heading: "Company",
    links: [
      { to: "/", label: "Home" },
      { to: "/services", label: "Services" },
      { to: "/technology", label: "Technology" },
      { to: "https://mentorclubglobal.com/", label: "About" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { to: "/solutions", label: "Solutions Overview" },
      { to: "/solutions/self-funded", label: "For Self-Funded Companies" },
      { to: "/solutions/insurance", label: "For Insurance Companies" },
      { to: "/solutions/providers", label: "For Healthcare Providers" },
    ],
  },
  {
    heading: "Network",
    links: [
      { to: "/provider-network", label: "Provider Network" },
      { to: "/hospital-panel", label: "Hospital Panel List" },
      { to: "/contact", label: "Contact" },
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
      {/* <div className="border-b border-white/10">
        <div className="container-edge grid gap-8 py-14 md:grid-cols-[1.4fr,1fr] md:items-end md:py-20">
          <h2 className="display-2 text-white" data-testid="footer-cta-heading">
            Start your healthcare
            <br />
            <span className="text-mentor-blue">transformation</span>.
          </h2>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <Link
              to="/book-demo"
              data-testid="footer-cta-demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-white hover:bg-white hover:text-mentor-black"
            >
              Book a Demo <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/request-proposal"
              data-testid="footer-cta-proposal"
              className="inline-flex items-center gap-2 rounded-full bg-mentor-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mentor-black"
            >
              Get a Proposal <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div> */}
      <div className="container-fluid grid gap-8 md:gap-12 py-12 md:py-14 md:grid-cols-[1.5fr,3fr]">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Logo-in-white.png"
              alt="Mentor TPA"
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Mentor TPA is a Healthcare Administration platform helping
            employers, insurers, providers, and patients operate through a more
            structured and connected healthcare system.
          </p>
          <div className="mt-6 space-y-4 text-sm text-white/75">
            <div className="flex items-start gap-2.5 py-1">
              <MapPin
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-mentor-blue"
                aria-hidden="true"
              />
              <span>Karachi, Pakistan</span>
            </div>
            <a
              href="mailto:info@mentortpa.com"
              className="flex items-center gap-2.5 py-1 transition hover:text-white"
              data-testid="footer-email"
            >
              <Mail
                className="h-4 w-4 flex-shrink-0 text-mentor-blue"
                aria-hidden="true"
              />
              info@mentortpa.com
            </a>
            <div className="flex items-center gap-2.5 py-1">
              <Globe
                className="h-4 w-4 flex-shrink-0 text-mentor-blue"
                aria-hidden="true"
              />
              www.thementorhealth.com
            </div>
          </div>
          {/* <div className="mt-6 flex flex-wrap gap-2">
                        {["SECP Licensed","Shariah Compliant","AI Enabled","Nationwide Network"].map(p => <span key={p} className="pill bg-transparent text-white border-white/20">{p}</span>)}
                    </div> */}
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-4">
          {cols.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
                {col.heading}
              </h3>
              <ul className="space-y-1">
                {col.links.map((l) => (
                  <li key={l.to + l.label}>
                    {l.to.startsWith("http") ? (
                      <a
                        href={l.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center min-h-[44px] py-1 text-sm text-white/80 transition hover:text-white"
                      >
                        <span className="flex items-center gap-1">
                          {l.label}
                          <ArrowUpRight className="h-3 w-3 opacity-50" aria-hidden="true" />
                        </span>
                      </a>
                    ) : (
                      <Link
                        to={l.to}
                        data-testid={`footer-link-${l.to.replace(/\//g, "-")}`}
                        className="inline-flex items-center min-h-[44px] py-1 text-sm text-white/80 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-fluid flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Mentor TPA. All rights reserved.
          </div>
          <div className="flex gap-5">
            <Link
              to="/privacy"
              className="inline-flex min-h-[44px] items-center hover:text-white"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="inline-flex min-h-[44px] items-center hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
