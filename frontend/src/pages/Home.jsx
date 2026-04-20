import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Network, Building2, Stethoscope, Briefcase, Activity, Eye, Cpu, Lock, CheckCircle2, XCircle, QrCode, LineChart } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";

const trust = ["SECP Licensed", "Shariah Compliant", "AI Enabled", "Nationwide Provider Network", "ISO-Ready Architecture", "Encrypted by Default"];

const proofPoints = [
    { stat: "One", label: "platform. One system. One healthcare experience." },
    { stat: "50+", label: "hospitals on the Mentor panel across Pakistan" },
    { stat: "24/7", label: "digital claims submission & tracking" },
];

const audiences = [
    { icon: Briefcase, title: "Self-Funded Companies", copy: "Run a modern corporate healthcare program with real visibility, cost control, and an employee experience that works.", to: "/solutions/self-funded" },
    { icon: ShieldCheck, title: "Insurance Companies", copy: "A digital claims engine, AI control layer, and nationwide network — powering efficiency, speed to market, and scale.", to: "/solutions/insurance" },
    { icon: Stethoscope, title: "Healthcare Providers", copy: "Plug into one system for authorization, claims, and patient verification — less friction, faster settlements.", to: "/solutions/providers" },
];

const doItems = [
    { icon: Activity, title: "Digital claims administration", copy: "Submission, adjudication, and settlement in one auditable pipeline — no paper, no gaps." },
    { icon: Network, title: "A managed provider network", copy: "Hospitals, labs, pharmacies and doctors — contracted, coded, and monitored end-to-end." },
    { icon: Cpu, title: "AI-enabled control layer", copy: "Automated validation, utilization insight, and fraud signals working behind every claim." },
    { icon: Eye, title: "Real visibility for sponsors", copy: "Dashboards for HR, finance, and risk teams — so decisions are data-led, not guesswork." },
];

const comparison = [
    { t: "Paper-based submissions and manual reconciliation", mentor: "Digital claims pipeline, end-to-end auditable" },
    { t: "Fragmented vendors and spreadsheets", mentor: "One platform for claims, network and reporting" },
    { t: "No real visibility into utilization or leakage", mentor: "Dashboards with utilization, cost and fraud signals" },
    { t: "Opaque provider settlements", mentor: "Contracted network with cashless, tracked settlements" },
    { t: "Reactive cost management", mentor: "AI-assisted validation and control before payout" },
];

function HeroVisual() {
    return (
        <div className="relative h-full w-full">
            <div className="absolute inset-0 dot-grid opacity-60" />
            <div className="relative grid grid-cols-6 grid-rows-6 gap-3 p-2 h-full">
                <div className="col-span-4 row-span-3 rounded-2xl border border-mentor-line bg-white p-5 shadow-[0_1px_0_rgba(17,17,31,0.04)]">
                    <div className="flex items-center justify-between">
                        <div className="eyebrow text-mentor-muted" style={{ color: "#6b6b7b" }}>Claims overview</div>
                        <div className="pill pill-blue">Live</div>
                    </div>
                    <div className="mt-4 flex items-end gap-3">
                        <div className="stat-num">98.4<span className="text-mentor-blue">%</span></div>
                        <div className="pb-2 text-xs font-semibold text-mentor-muted">Auto-adjudication</div>
                    </div>
                    <div className="mt-6 flex h-20 items-end gap-1.5">
                        {[32,55,41,70,62,85,73,91,78,66,84,72].map((v,i)=>(
                            <div key={i} className="flex-1 rounded-t-sm bg-mentor-black" style={{height:`${v}%`}} />
                        ))}
                    </div>
                </div>
                <div className="col-span-2 row-span-3 rounded-2xl bg-mentor-black p-5 text-white">
                    <QrCode className="h-6 w-6 text-mentor-blue" />
                    <div className="mt-4 text-xl font-extrabold leading-tight tracking-tight">QR-verified patient visit</div>
                    <div className="mt-3 text-xs text-white/70">Identity, eligibility and authorization — resolved at point of service.</div>
                </div>
                <div className="col-span-3 row-span-3 rounded-2xl border border-mentor-line bg-white p-5">
                    <Network className="h-6 w-6 text-mentor-blue" />
                    <div className="mt-3 text-xl font-extrabold tracking-tight">Nationwide panel</div>
                    <div className="mt-1 text-xs text-mentor-muted">50+ hospitals · 5 provinces · cashless-ready</div>
                    <div className="mt-4 grid grid-cols-3 gap-1">
                        {Array.from({length:12}).map((_,i)=>(<div key={i} className="h-6 rounded-sm bg-mentor-surface" />))}
                    </div>
                </div>
                <div className="col-span-3 row-span-3 rounded-2xl bg-mentor-blue p-5 text-white">
                    <LineChart className="h-6 w-6" />
                    <div className="mt-3 text-xl font-extrabold tracking-tight">Utilization insights</div>
                    <div className="mt-1 text-xs text-white/80">Leakage, top diagnoses, and claim velocity — in one view.</div>
                    <div className="mt-5 h-10 rounded bg-white/15" />
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="relative border-b border-mentor-line bg-white" data-testid="home-hero">
                <div className="container-edge grid gap-10 py-16 md:grid-cols-[1.1fr,1fr] md:gap-14 md:py-24 lg:py-28">
                    <div className="reveal">
                        <Eyebrow>Healthcare administration, digitized.</Eyebrow>
                        <h1 className="display-1 mt-6">
                            Building the digital <span className="text-mentor-blue">backbone</span> of healthcare.
                        </h1>
                        <p className="lead mt-6 max-w-xl">
                            Mentor TPA is the claims, network, and control layer behind modern health plans — engineered for self-funded companies, insurers, and providers across Pakistan.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link to="/request-proposal" data-testid="hero-cta-proposal" className="group inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue">
                                Get a Proposal <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                            </Link>
                            <Link to="/book-demo" data-testid="hero-cta-demo" className="inline-flex items-center gap-2 rounded-full border border-mentor-black px-6 py-3.5 text-sm font-semibold text-mentor-black transition hover:bg-mentor-black hover:text-white">
                                Book a Demo
                            </Link>
                        </div>
                        <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-mentor-line pt-8">
                            {proofPoints.map((p, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-extrabold tracking-tight md:text-[28px]">{p.stat}</div>
                                    <div className="mt-1.5 text-xs leading-snug text-mentor-muted">{p.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="reveal reveal-delay-2 relative min-h-[440px] md:min-h-[560px]"><HeroVisual /></div>
                </div>
            </section>

            {/* Trust strip */}
            <section className="border-b border-mentor-line bg-mentor-black py-5 overflow-hidden" data-testid="home-trust">
                <div className="marquee-track text-white/70 text-sm font-semibold">
                    {[...trust, ...trust].map((t, i) => (
                        <div key={i} className="flex items-center gap-3 shrink-0">
                            <span className="h-1.5 w-1.5 rounded-full bg-mentor-blue" />
                            <span className="tracking-tight uppercase text-xs">{t}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Problem section */}
            <section className="py-20 md:py-28" data-testid="home-problem">
                <div className="container-edge grid gap-12 md:grid-cols-[1.1fr,1fr] md:items-end">
                    <div>
                        <Eyebrow>The problem</Eyebrow>
                        <h2 className="display-2 mt-5">Healthcare administration in Pakistan is stuck in paper, spreadsheets, and fragmented vendors.</h2>
                    </div>
                    <p className="lead">
                        Sponsors can't see utilization. Claims take weeks. Provider networks are inconsistent. Leakage goes unnoticed. Every stakeholder — HR, insurer, hospital, patient — pays the cost of friction.
                    </p>
                </div>
                <div className="container-edge mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                        { n: "01", t: "Current models are broken", d: "Manual workflows and siloed systems create delays, disputes and avoidable cost." },
                        { n: "02", t: "The hidden cost problem", d: "Without visibility, leakage and utilization patterns quietly compound every month." },
                        { n: "03", t: "No single source of truth", d: "Claims, network and reporting live in different places — so no one has a full picture." },
                    ].map((x) => (
                        <div key={x.n} className="card-hard p-7">
                            <div className="eyebrow">{x.n}</div>
                            <div className="mt-3 text-xl font-extrabold tracking-tight">{x.t}</div>
                            <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{x.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What Mentor TPA does */}
            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28" data-testid="home-whatwedo">
                <div className="container-edge">
                    <div className="max-w-3xl">
                        <Eyebrow>What Mentor TPA does</Eyebrow>
                        <h2 className="display-2 mt-5">One platform. One system. One healthcare experience.</h2>
                        <p className="lead mt-5">Claims, network, and control in one system — built for visibility, efficiency, and scale.</p>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                        {doItems.map((x, i) => (
                            <div key={i} className="group flex gap-5 rounded-2xl border border-mentor-line bg-white p-7 transition hover:border-mentor-black">
                                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-mentor-black text-white transition group-hover:bg-mentor-blue">
                                    <x.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-lg font-extrabold tracking-tight">{x.title}</div>
                                    <p className="mt-2 text-sm leading-relaxed text-mentor-muted">{x.copy}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audience split */}
            <section className="py-20 md:py-28" data-testid="home-audience">
                <div className="container-edge">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-xl">
                            <Eyebrow>Who we serve</Eyebrow>
                            <h2 className="display-2 mt-5">Three audiences. One infrastructure.</h2>
                        </div>
                        <Link to="/solutions" className="link-underline text-sm" data-testid="audience-see-all">All solutions <ArrowUpRight className="h-4 w-4" /></Link>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {audiences.map((a, i) => (
                            <Link key={i} to={a.to} data-testid={`audience-${i}`} className="card-hard flex flex-col justify-between p-7 transition">
                                <div>
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-mentor-line">
                                        <a.icon className="h-5 w-5 text-mentor-blue" />
                                    </div>
                                    <div className="mt-6 text-xl font-extrabold tracking-tight">{a.title}</div>
                                    <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{a.copy}</p>
                                </div>
                                <div className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-mentor-black">
                                    Explore solution <ArrowRight className="h-4 w-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Provider network strength */}
            <section className="bg-mentor-black py-20 text-white md:py-28" data-testid="home-network">
                <div className="container-edge grid gap-12 md:grid-cols-[1fr,1.2fr] md:items-center">
                    <div>
                        <Eyebrow><span className="text-mentor-blue">Network strength</span></Eyebrow>
                        <h2 className="display-2 mt-5 text-white">A national provider network — contracted, coded, and cashless-ready.</h2>
                        <p className="lead mt-5 text-white/70" style={{ color: "rgba(255,255,255,0.75)" }}>
                            Hospitals, doctors, labs, and pharmacies — coordinated through a single operating layer, so members access care anywhere without friction.
                        </p>
                        <Link to="/hospital-panel" data-testid="home-network-cta" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-mentor-black transition hover:bg-mentor-blue hover:text-white">
                            View hospital panel <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { n: "50+", t: "Hospitals" },
                            { n: "10+", t: "Cities" },
                            { n: "5", t: "Provinces" },
                            { n: "4", t: "Care types" },
                        ].map((x, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                                <div className="stat-num text-white">{x.n}</div>
                                <div className="mt-2 text-sm text-white/70">{x.t}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Digital & AI capability */}
            <section className="py-20 md:py-28" data-testid="home-ai">
                <div className="container-edge grid gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <Eyebrow>Digital & AI</Eyebrow>
                        <h2 className="display-2 mt-5">A digital claims engine with an AI control layer on top.</h2>
                        <p className="lead mt-5">Every claim is validated, scored, and routed through automated checks — so legitimate care is paid fast, and anomalies surface before they become loss.</p>
                        <div className="mt-8 space-y-3">
                            {["Automated validation at submission","Fraud signals on unusual patterns","Utilization insights by cohort","Encrypted, cloud-native architecture"].map((x,i)=>(
                                <div key={i} className="flex items-center gap-3 text-sm font-semibold">
                                    <Sparkles className="h-4 w-4 text-mentor-blue" /> {x}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-3xl border border-mentor-line bg-white p-6">
                            <div className="flex items-center justify-between border-b border-mentor-line pb-3">
                                <div className="text-xs font-bold uppercase tracking-[0.14em] text-mentor-muted">AI control layer</div>
                                <div className="pill pill-blue">Active</div>
                            </div>
                            <div className="mt-5 space-y-3">
                                {[
                                    { t: "Claim #CLM-29481", s: "Auto-approved", tone: "ok" },
                                    { t: "Claim #CLM-29478", s: "Flagged: unusual frequency", tone: "warn" },
                                    { t: "Claim #CLM-29475", s: "Auto-approved", tone: "ok" },
                                    { t: "Claim #CLM-29471", s: "Sent to reviewer", tone: "warn" },
                                ].map((r,i)=>(
                                    <div key={i} className="flex items-center justify-between rounded-lg border border-mentor-line p-3">
                                        <div className="text-sm font-semibold">{r.t}</div>
                                        <div className={`pill ${r.tone==='ok'?'pill-blue':''}`} style={r.tone==='warn'?{borderColor:'#ff5151',color:'#ff5151',background:'rgba(255,81,81,0.06)'}:undefined}>{r.s}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 h-3 w-24 bg-mentor-blue" />
                    </div>
                </div>
            </section>

            {/* Value to stakeholders */}
            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28" data-testid="home-value">
                <div className="container-edge">
                    <div className="max-w-3xl">
                        <Eyebrow>Value to stakeholders</Eyebrow>
                        <h2 className="display-2 mt-5">Built for every seat at the table.</h2>
                    </div>
                    <div className="mt-12 grid gap-4 md:grid-cols-4">
                        {[
                            { r: "HR & People", v: "Run the health plan without chasing paperwork. See utilization, not guesswork." },
                            { r: "Finance & Risk", v: "Control cost trajectory with real dashboards — improve efficiency, reduce leakage." },
                            { r: "Insurers", v: "Scale faster with a digital claims engine and an AI validation layer." },
                            { r: "Members & Patients", v: "Cashless access, QR-verified visits, and a cleaner experience end-to-end." },
                        ].map((x, i) => (
                            <div key={i} className="card-hard p-6">
                                <div className="eyebrow">{x.r}</div>
                                <p className="mt-3 text-[15px] font-semibold leading-snug">{x.v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Mentor vs traditional TPA */}
            <section className="py-20 md:py-28" data-testid="home-vs">
                <div className="container-edge">
                    <div className="max-w-3xl">
                        <Eyebrow>Mentor TPA vs. traditional TPA</Eyebrow>
                        <h2 className="display-2 mt-5">A different operating model for a different decade.</h2>
                    </div>
                    <div className="mt-12 overflow-hidden rounded-2xl border border-mentor-line">
                        <div className="grid grid-cols-2 border-b border-mentor-line bg-mentor-surface text-xs font-bold uppercase tracking-[0.14em] text-mentor-muted">
                            <div className="p-5">Traditional TPA</div>
                            <div className="border-l border-mentor-line bg-white p-5 text-mentor-blue">Mentor TPA</div>
                        </div>
                        {comparison.map((row, i) => (
                            <div key={i} className={`grid grid-cols-2 ${i !== comparison.length - 1 ? "border-b border-mentor-line" : ""}`}>
                                <div className="flex items-start gap-3 p-5 text-sm text-mentor-muted md:p-6">
                                    <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />{row.t}
                                </div>
                                <div className="flex items-start gap-3 border-l border-mentor-line bg-white p-5 text-sm font-semibold md:p-6">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-mentor-blue" />{row.mentor}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABand eyebrow="One platform. One system." headline="Let's wire your plan to a real operating layer." subline="Request a proposal or book a working session — we'll show you exactly how claims, network, and control come together." testId="home-cta" />
        </>
    );
}
