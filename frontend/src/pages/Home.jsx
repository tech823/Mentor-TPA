import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Briefcase, ShieldCheck, Stethoscope, FileCheck2, Network, Brain, CheckCircle2, XCircle, QrCode, LineChart, Activity } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import Counter from "../components/shared/Counter";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";

const proof = ["SECP Licensed","Shariah Compliant","AI Enabled","Nationwide Network"];
const audiences = [
    { icon: Briefcase, title: "For Self-Funded Companies", copy: "Take control of healthcare cost with a structured self-funded model that delivers cashless access, provider network rates, digital claims, and real-time cost visibility.", cta: "See Self-Funded Solution", to: "/solutions/self-funded" },
    { icon: ShieldCheck, title: "For Insurance Companies", copy: "Scale claims operations and provider coordination without expanding internal complexity. Mentor TPA provides claims and network infrastructure built for speed, control, and growth.", cta: "See Insurance Solution", to: "/solutions/insurance" },
    { icon: Stethoscope, title: "For Providers", copy: "Join a structured healthcare network that improves coordination, digitizes access, and connects your facility into a broader healthcare ecosystem.", cta: "View Provider Network", to: "/solutions/providers" },
];

function HeroPhone() {
    return (
        <div className="relative mx-auto h-[560px] w-[280px] rounded-[40px] border-[10px] border-mentor-black bg-mentor-black shadow-2xl md:h-[620px] md:w-[310px] float-y">
            <div className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-mentor-black" />
            <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-white p-4">
                <div className="mt-6 flex items-center justify-between">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-mentor-muted">Mentor TPA</div>
                    <div className="pill pill-blue"><span className="inline-block h-1.5 w-1.5 rounded-full bg-mentor-blue halo" />Live</div>
                </div>
                <div className="mt-3 rounded-2xl bg-mentor-black p-4 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">Claims overview</div>
                    <div className="mt-2 text-3xl font-extrabold tracking-tight"><Counter value="98.4%" duration={1800} /></div>
                    <div className="text-[11px] text-white/70">Auto-adjudication</div>
                    <div className="mt-3 flex h-10 items-end gap-1">
                        {[40,55,32,70,62,85,73,91,78,66].map((v,i)=>(<div key={i} className="flex-1 rounded-t-sm bg-mentor-blue" style={{height:`${v}%`, animation:`rise-in 900ms ${i*60}ms cubic-bezier(0.2,0.7,0.2,1) both`}} />))}
                    </div>
                </div>
                <div className="mt-3 rounded-2xl border border-mentor-line p-3"><div className="flex items-center gap-2"><QrCode className="h-4 w-4 text-mentor-blue" /><div className="text-xs font-bold">QR patient verification</div></div><div className="mt-2 text-[10px] text-mentor-muted">Identity and eligibility resolved in seconds.</div></div>
                <div className="mt-3 rounded-2xl border border-mentor-line p-3"><div className="flex items-center gap-2"><LineChart className="h-4 w-4 text-mentor-blue" /><div className="text-xs font-bold">Utilization insights</div></div><div className="mt-3 h-8 rounded bg-mentor-surface" /></div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <section className="relative overflow-hidden border-b border-mentor-line mesh-hero" data-testid="home-hero">
                {/* ornamental blurs */}
                <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mentor-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute right-[-80px] bottom-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl" />
                <div className="container-edge grid gap-10 py-16 md:grid-cols-[1.15fr,1fr] md:gap-14 md:py-24">
                    <div className="reveal">
                        <Eyebrow>Healthcare administration, digitized.</Eyebrow>
                        <h1 className="display-1 mt-6">The Digital <span className="text-mentor-blue">Backbone</span> of Healthcare Administration</h1>
                        <p className="lead mt-6 max-w-xl">Mentor TPA helps employers, insurers, providers, and patients operate through one structured healthcare system, combining claims management, provider network access, digital workflows, AI-enabled control, and nationwide healthcare coordination.</p>
                        <div className="mt-7 flex flex-wrap gap-2">{proof.map(p => <span key={p} className="pill">{p}</span>)}</div>
                        <p className="mt-6 max-w-xl text-sm leading-relaxed text-mentor-muted">Healthcare administration should not be fragmented, manual, and hard to control. Mentor TPA brings claims processing, cashless access, reimbursement workflows, provider coordination, reporting, and healthcare visibility into one connected system.</p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link to="/request-proposal" data-testid="hero-cta-proposal" className="group btn-shimmer inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue">Get a Proposal <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></Link>
                            <Link to="/book-demo" data-testid="hero-cta-demo" className="inline-flex items-center gap-2 rounded-full border border-mentor-black px-6 py-3.5 text-sm font-semibold text-mentor-black transition hover:bg-mentor-black hover:text-white">Book a Demo</Link>
                        </div>
                        <p className="mt-4 text-xs text-mentor-muted">Talk to our team about self-funded healthcare, claims outsourcing, or digital TPA infrastructure.</p>
                    </div>
                    <div className="reveal reveal-delay-2 relative flex items-center justify-center">
                        {/* supporting media collage */}
                        <div className="absolute -left-6 top-10 hidden w-40 md:block">
                            <MediaImage src={IMG.doctorTablet} alt="Clinician using digital healthcare tools" ratio="4/5" rounded="rounded-2xl" overlay="blue" />
                        </div>
                        <div className="absolute -right-4 bottom-6 hidden w-44 md:block">
                            <MediaImage src={IMG.analytics} alt="Healthcare analytics dashboard" ratio="4/3" rounded="rounded-2xl" overlay="soft" />
                        </div>
                        <HeroPhone />
                    </div>
                </div>
            </section>

            <section className="relative border-b border-mentor-line mesh-dark text-white py-16 md:py-20 grid-dark" data-testid="home-trust">
                <div className="container-edge relative">
                    <Eyebrow><span className="text-mentor-blue">Built for regulated healthcare environments</span></Eyebrow>
                    <div className="mt-6 grid gap-5 md:grid-cols-5">
                        {["SECP registered TPA infrastructure","Secure and scalable digital systems","Structured provider network across Pakistan","AI-assisted claims control and fraud detection","Corporate and insurer-ready workflows"].map((t,i)=>(
                            <Reveal key={i} delay={i*80} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-mentor-blue/60 hover:bg-white/[0.05]">
                                <div className="h-1 w-8 bg-mentor-blue" />
                                <div className="mt-3 text-sm font-semibold leading-snug">{t}</div>
                            </Reveal>
                        ))}
                    </div>
                    <p className="mt-8 max-w-3xl text-sm text-white/70">Mentor TPA is built to serve healthcare payers and healthcare users through structured processes, digital reporting, and high-trust operational systems.</p>
                </div>
            </section>

            <section className="py-20 md:py-28" data-testid="home-problem">
                <div className="container-edge">
                    <Reveal className="max-w-3xl"><Eyebrow>The market problem</Eyebrow><h2 className="display-2 mt-5">Healthcare administration is still broken.</h2><p className="lead mt-5">Across Pakistan, healthcare administration remains fragmented across employers, insurers, providers, and patients. Most systems still depend on manual coordination, disconnected providers, paperwork-heavy claims, low visibility, and delayed decisions. The result is higher cost, operational burden, financial leakage, and poor member experience.</p></Reveal>
                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {[{t:"No visibility",d:"Most employers and insurers cannot see where healthcare spend is going until after the money is already spent."},{t:"Too much manual work",d:"Claims processing, provider coordination, authorizations, reimbursements, and employee support often sit on heavy manual workflows."},{t:"Leakage and inefficiency",d:"Overbilling, duplicate claims, weak validation, inconsistent rates, and poor controls quietly increase healthcare cost."},{t:"Poor member experience",d:"Employees and patients face delayed approvals, upfront payments, unclear coverage, and stressful healthcare journeys."}].map((c,i)=>(
                            <Reveal key={i} delay={i*90}><div className="card-hard tilt-card p-7 h-full"><div className="eyebrow">0{i+1}</div><div className="mt-3 text-xl font-extrabold tracking-tight">{c.t}</div><p className="mt-3 text-sm leading-relaxed text-mentor-muted">{c.d}</p></div></Reveal>
                        ))}
                    </div>
                    <p className="container-edge mx-auto mt-10 max-w-3xl px-0 text-sm text-mentor-muted">Mentor TPA exists to replace fragmented administration with one integrated healthcare operating layer.</p>
                </div>
            </section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28" data-testid="home-whatwedo">
                <div className="container-edge grid gap-14 md:grid-cols-[1fr,0.9fr] md:items-start">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>What Mentor TPA does</Eyebrow>
                        <h2 className="display-2 mt-5">One platform. One system. One healthcare experience.</h2>
                        <p className="lead mt-5">Mentor TPA provides a structured healthcare administration model that unifies provider network access, claims management, digital workflows, operational support, and financial control.</p>
                        <div className="mt-8"><Link to="/services" className="u-expand text-sm font-semibold">Explore Our Services <ArrowRight className="h-4 w-4" /></Link></div>
                    </Reveal>
                    <Reveal variant="right" delay={120}>
                        <MediaImage src={IMG.medicalTeam} alt="Healthcare team reviewing claims on screen" ratio="4/3" frame overlay="soft" />
                    </Reveal>
                </div>
                <div className="container-edge mt-12 grid gap-5 md:grid-cols-2">
                    {[{i:FileCheck2,t:"Claims and administration",d:"Claims adjudication, cashless claims, reimbursement processing, member support, and structured operational workflows."},{i:Network,t:"Provider network infrastructure",d:"Nationwide access to hospitals, doctors, labs, diagnostics, and pharmacies through a standardized healthcare network."},{i:Activity,t:"Digital healthcare operations",d:"Digital claims submission, patient verification, dashboard visibility, centralized user profiles, and integrated healthcare coordination."},{i:Brain,t:"AI-enabled intelligence",d:"Automated validation, fraud detection, duplication checks, utilization monitoring, and smarter healthcare decision support."}].map((x,i)=>(
                        <Reveal key={i} delay={i*90}><div className="flex gap-5 rounded-2xl border border-mentor-line bg-white p-7 transition hover:border-mentor-black hover:-translate-y-0.5"><div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-mentor-black text-white"><x.i className="h-5 w-5" /></div><div><div className="text-lg font-extrabold tracking-tight">{x.t}</div><p className="mt-2 text-sm leading-relaxed text-mentor-muted">{x.d}</p></div></div></Reveal>
                    ))}
                </div>
            </section>

            <section className="py-20 md:py-28" data-testid="home-audience">
                <div className="container-edge">
                    <Reveal className="max-w-xl"><Eyebrow>Audience split</Eyebrow><h2 className="display-2 mt-5">Built for every major healthcare stakeholder.</h2></Reveal>
                    <div className="mt-12 grid gap-5 md:grid-cols-3">{audiences.map((a,i) => (
                        <Reveal key={i} delay={i*100}><div className="card-hard tilt-card flex h-full flex-col justify-between p-7"><div><div className="flex h-11 w-11 items-center justify-center rounded-lg border border-mentor-line"><a.icon className="h-5 w-5 text-mentor-blue" /></div><div className="mt-6 text-xl font-extrabold tracking-tight">{a.title}</div><p className="mt-3 text-sm leading-relaxed text-mentor-muted">{a.copy}</p></div><Link to={a.to} data-testid={`audience-${i}`} className="u-expand mt-6 text-sm font-semibold">{a.cta} <ArrowRight className="h-4 w-4" /></Link></div></Reveal>
                    ))}</div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-mentor-black py-20 text-white md:py-28 grid-dark" data-testid="home-network">
                <div className="pointer-events-none absolute inset-0 opacity-30" style={{background:"radial-gradient(600px 300px at 85% 15%, rgba(0,72,255,0.35), transparent 60%)"}} />
                <div className="container-edge relative grid gap-12 md:grid-cols-[1fr,1.2fr] md:items-center">
                    <Reveal>
                        <Eyebrow><span className="text-mentor-blue">Network strength</span></Eyebrow>
                        <h2 className="display-2 mt-5 text-white">Nationwide healthcare access through one connected network.</h2>
                        <p className="lead mt-5" style={{color:"rgba(255,255,255,0.75)"}}>Mentor TPA enables structured access to a nationwide network of healthcare providers, helping clients reduce fragmentation and improve access consistency across locations.</p>
                        <Link to="/provider-network" data-testid="home-network-cta" className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-mentor-black transition hover:bg-mentor-blue hover:text-white">Explore Provider Network <ArrowUpRight className="h-4 w-4" /></Link>
                    </Reveal>
                    <div className="grid grid-cols-2 gap-3">{[{n:"300+",t:"Hospitals"},{n:"15,000+",t:"Doctors"},{n:"700+",t:"Labs & Diagnostics"},{n:"—",t:"Pharmacy network"}].map((x,i)=>(
                        <Reveal key={i} delay={i*100}><div className="glow-pill rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-mentor-blue/60"><div className="stat-num text-white"><Counter value={x.n} /></div><div className="mt-2 text-sm text-white/70">{x.t}</div></div></Reveal>
                    ))}</div>
                </div>
            </section>

            <section className="py-20 md:py-28" data-testid="home-ai">
                <div className="container-edge grid gap-12 md:grid-cols-2 md:items-center">
                    <Reveal>
                        <Eyebrow>Digital & AI layer</Eyebrow>
                        <h2 className="display-2 mt-5">Healthcare administration, digitized.</h2>
                        <p className="lead mt-5">Mentor TPA is not a traditional TPA wrapped in nice branding. It is being built as a digital healthcare administration layer with automation, data intelligence, and scalable workflows at its core.</p>
                        <div className="mt-8"><Link to="/technology" className="u-expand text-sm font-semibold">See Technology Infrastructure <ArrowRight className="h-4 w-4" /></Link></div>
                    </Reveal>
                    <div className="grid grid-cols-2 gap-2">{["Digital claims submission and tracking","QR-based patient verification","Centralized member profiles","Real-time dashboards","Secure cloud infrastructure","Automated claim validation","Fraud detection mechanisms","Utilization insights and reporting"].map((x,i)=>(
                        <Reveal key={i} delay={i*40}><div className="flex items-start gap-2 rounded-xl border border-mentor-line p-4 text-sm font-semibold transition hover:border-mentor-blue hover:bg-mentor-blue/5"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-mentor-blue" />{x}</div></Reveal>
                    ))}</div>
                </div>
            </section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28" data-testid="home-value">
                <div className="container-edge">
                    <Reveal className="max-w-3xl"><Eyebrow>Value to stakeholders</Eyebrow><h2 className="display-2 mt-5">Value that reaches every side of the healthcare equation.</h2></Reveal>
                    <div className="mt-12 grid gap-4 md:grid-cols-4">{[{r:"Employers",v:"Better cost control, simplified administration, and real-time visibility into healthcare utilization."},{r:"Insurers",v:"Lower operational burden, better claims control, and faster execution without building everything internally."},{r:"Providers",v:"Smoother coordination, less manual administration, and stronger integration into a structured healthcare network."},{r:"Patients and members",v:"Easier healthcare access, cashless journeys, faster responses, and a better overall experience."}].map((x,i)=>(
                        <Reveal key={i} delay={i*80}><div className="card-hard tilt-card p-6 h-full"><div className="eyebrow">{x.r}</div><p className="mt-3 text-[15px] font-semibold leading-snug">{x.v}</p></div></Reveal>
                    ))}</div>
                </div>
            </section>

            <section className="py-20 md:py-28" data-testid="home-vs">
                <div className="container-edge">
                    <Reveal className="max-w-3xl"><Eyebrow>Why Mentor TPA</Eyebrow><h2 className="display-2 mt-5">Why organizations choose Mentor TPA.</h2></Reveal>
                    <div className="mt-10 grid gap-3 md:grid-cols-2">
                        {["Technology-driven healthcare administration","Nationwide provider network","Structured digital claims workflows","AI-enabled claims control","Transparent and scalable operating model","Better visibility, speed, and patient experience"].map((x,i)=>(
                            <Reveal key={i} delay={i*50}><div className="flex items-start gap-3 rounded-xl border border-mentor-line p-5 transition hover:border-mentor-blue hover:bg-mentor-blue/[0.03]"><div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-mentor-blue" /><div className="text-sm font-semibold">{x}</div></div></Reveal>
                        ))}
                    </div>
                    <Reveal className="mt-12 overflow-hidden rounded-2xl border border-mentor-line">
                        <div className="grid grid-cols-2 border-b border-mentor-line bg-mentor-surface text-xs font-bold uppercase tracking-[0.14em] text-mentor-muted"><div className="p-5">Traditional TPA</div><div className="border-l border-mentor-line bg-white p-5 text-mentor-blue">Mentor TPA</div></div>
                        {[["manual processing","digital platform"],["fragmented systems","integrated ecosystem"],["limited visibility","transparent processes"],["slow workflows","scalable infrastructure"]].map((row,i)=>(<div key={i} className={`grid grid-cols-2 ${i!==3?"border-b border-mentor-line":""}`}><div className="flex items-start gap-3 p-5 text-sm text-mentor-muted"><XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />{row[0]}</div><div className="flex items-start gap-3 border-l border-mentor-line bg-white p-5 text-sm font-semibold"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-mentor-blue" />{row[1]}</div></div>))}
                    </Reveal>
                </div>
            </section>

            <CTABand eyebrow="Final CTA" headline="Start your healthcare transformation." subline="Whether you are evaluating self-funded healthcare, insurance-side claims infrastructure, or a better healthcare access model for your members, Mentor TPA can help you move from fragmented administration to a connected system." testId="home-cta" />
        </>
    );
}
