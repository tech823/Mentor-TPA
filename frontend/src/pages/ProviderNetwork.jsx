import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, UserRound, FlaskConical, Pill, Activity, BedDouble } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import Counter from "../components/shared/Counter";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";

const stats = [["300+","hospitals"],["15,000+","doctors"],["700+","labs & diagnostics"],["—","pharmacy network"]];
const categories = [{i:Building2,t:"hospitals"},{i:UserRound,t:"specialists and doctors"},{i:FlaskConical,t:"laboratories and diagnostics"},{i:Pill,t:"pharmacies"},{i:Activity,t:"outpatient services"},{i:BedDouble,t:"hospitalization support"}];

export default function ProviderNetwork() {
    return (
        <>
            <section className="relative overflow-hidden border-b border-mentor-line mesh-hero">
                <div className="pointer-events-none absolute right-[-120px] top-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl" />
                <div className="container-edge grid gap-10 py-20 md:grid-cols-[1.1fr,1fr] md:items-end md:py-28">
                    <Reveal>
                        <Eyebrow>Provider Network</Eyebrow>
                        <h1 className="display-1 mt-6 max-w-3xl">Nationwide healthcare network.</h1>
                        <p className="lead mt-6 max-w-2xl">Mentor TPA connects clients and members to a structured provider network spanning hospitals, doctors, diagnostics, and pharmacies across Pakistan.</p>
                        <Link to="/contact" data-testid="pn-cta-info" className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue">Request Network Information <ArrowUpRight className="h-4 w-4" /></Link>
                    </Reveal>
                    <Reveal variant="right" delay={120}>
                        <MediaImage src={IMG.hospitalExterior} alt="Modern hospital exterior" ratio="4/3" frame overlay="soft" />
                    </Reveal>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge">
                    <Reveal><Eyebrow>Network overview</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Structured access across major care categories.</h2></Reveal>
                    <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{stats.map(([n,t],i)=>(
                        <Reveal key={i} delay={i*100}>
                            <div className="rounded-2xl border border-mentor-line p-7 h-full transition hover:-translate-y-1 hover:border-mentor-blue hover:shadow-[0_20px_60px_-30px_rgba(0,72,255,0.35)]">
                                <div className="stat-num text-mentor-blue"><Counter value={n} /></div>
                                <div className="mt-2 text-sm text-mentor-muted">{t}</div>
                            </div>
                        </Reveal>
                    ))}</div>
                </div>
            </section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
                <div className="container-edge">
                    <Reveal><Eyebrow>Care categories</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Network categories.</h2></Reveal>
                    <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">{categories.map((c,i)=>(
                        <Reveal key={i} delay={i*70}>
                            <div className="group rounded-2xl border border-mentor-line bg-white p-6 h-full transition hover:-translate-y-1 hover:border-mentor-black">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-black text-white transition group-hover:bg-mentor-blue"><c.i className="h-5 w-5" /></div>
                                <div className="mt-4 text-sm font-bold capitalize">{c.t}</div>
                            </div>
                        </Reveal>
                    ))}</div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-10 md:grid-cols-2 md:items-center">
                    <Reveal>
                        <Eyebrow>Why network matters</Eyebrow>
                        <h2 className="display-2 mt-5">Why network strength matters.</h2>
                        <p className="lead mt-5">A strong network is not just about having names on a list. It is about enabling structured access, pricing consistency, better coordination, and smoother care journeys across locations.</p>
                    </Reveal>
                    <Reveal variant="right" delay={120}>
                        <MediaImage src={IMG.lab} alt="Diagnostic laboratory" ratio="4/3" overlay="soft" />
                    </Reveal>
                </div>
            </section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
                <div className="container-edge grid gap-10 md:grid-cols-2 md:items-center">
                    <Reveal>
                        <MediaImage src={IMG.worldMap} alt="Coverage map" ratio="4/3" overlay="soft" />
                    </Reveal>
                    <Reveal variant="right" delay={120}>
                        <Eyebrow>Geographic coverage</Eyebrow>
                        <h2 className="display-2 mt-5">Coverage across Pakistan.</h2>
                        <p className="lead mt-5">Mentor TPA supports a broad healthcare footprint across major cities and network locations, helping organizations provide more consistent access to employees and members wherever they are.</p>
                    </Reveal>
                </div>
            </section>

            <section className="relative overflow-hidden border-t border-mentor-line bg-mentor-black py-20 text-white md:py-28 grid-dark">
                <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(700px 400px at 10% 50%, rgba(0,72,255,0.25), transparent 60%)"}} />
                <div className="container-edge relative">
                    <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
                        <Reveal>
                            <Eyebrow><span className="text-mentor-blue">Hospital Panel</span></Eyebrow>
                            <h2 className="display-2 mt-5 max-w-3xl text-white">Browse the Mentor TPA hospital panel.</h2>
                        </Reveal>
                        <Link to="/hospital-panel" data-testid="pn-cta-panel" className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-mentor-black transition hover:bg-mentor-blue hover:text-white">View Hospital Panel List <ArrowUpRight className="h-4 w-4" /></Link>
                    </div>
                </div>
            </section>

            <CTABand testId="pn-cta" />
        </>
    );
}
