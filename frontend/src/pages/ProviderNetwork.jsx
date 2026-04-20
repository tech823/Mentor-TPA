import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, UserRound, FlaskConical, Pill, Activity, BedDouble } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";

export default function ProviderNetwork() {
    return (
        <>
            <section className="border-b border-mentor-line"><div className="container-edge py-20 md:py-28"><Eyebrow>Provider Network</Eyebrow><h1 className="display-1 mt-6 max-w-4xl">Nationwide healthcare network.</h1><p className="lead mt-6 max-w-2xl">Mentor TPA connects clients and members to a structured provider network spanning hospitals, doctors, diagnostics, and pharmacies across Pakistan.</p><Link to="/contact" data-testid="pn-cta-info" className="mt-8 inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue">Request Network Information <ArrowUpRight className="h-4 w-4" /></Link></div></section>

            <section className="py-20 md:py-28"><div className="container-edge"><Eyebrow>Network overview</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Structured access across major care categories.</h2><div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{[["300+","hospitals"],["15,000+","doctors"],["700+","labs & diagnostics"],["—","pharmacy network"]].map(([n,t],i)=>(<div key={i} className="rounded-2xl border border-mentor-line p-7"><div className="stat-num">{n}</div><div className="mt-2 text-sm text-mentor-muted">{t}</div></div>))}</div></div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge"><Eyebrow>Care categories</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Network categories.</h2><div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">{[{i:Building2,t:"hospitals"},{i:UserRound,t:"specialists and doctors"},{i:FlaskConical,t:"laboratories and diagnostics"},{i:Pill,t:"pharmacies"},{i:Activity,t:"outpatient services"},{i:BedDouble,t:"hospitalization support"}].map((c,i)=>(<div key={i} className="rounded-2xl border border-mentor-line bg-white p-6"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-black text-white"><c.i className="h-5 w-5" /></div><div className="mt-4 text-sm font-bold capitalize">{c.t}</div></div>))}</div></div></section>

            <section className="py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2">
                <div><Eyebrow>Why network matters</Eyebrow><h2 className="display-2 mt-5">Why network strength matters.</h2><p className="lead mt-5">A strong network is not just about having names on a list. It is about enabling structured access, pricing consistency, better coordination, and smoother care journeys across locations.</p></div>
                <div><Eyebrow>Geographic coverage</Eyebrow><h2 className="display-2 mt-5">Coverage across Pakistan.</h2><p className="lead mt-5">Mentor TPA supports a broad healthcare footprint across major cities and network locations, helping organizations provide more consistent access to employees and members wherever they are.</p></div>
            </div></section>

            <section className="border-t border-mentor-line bg-mentor-black py-20 text-white md:py-28"><div className="container-edge"><div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"><div><Eyebrow><span className="text-mentor-blue">Hospital Panel</span></Eyebrow><h2 className="display-2 mt-5 max-w-3xl text-white">Browse the Mentor TPA hospital panel.</h2></div><Link to="/hospital-panel" data-testid="pn-cta-panel" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-mentor-black transition hover:bg-mentor-blue hover:text-white">View Hospital Panel List <ArrowUpRight className="h-4 w-4" /></Link></div></div></section>

            <CTABand testId="pn-cta" />
        </>
    );
}
