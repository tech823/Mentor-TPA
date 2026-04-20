import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import { Heart, Users, Network } from "lucide-react";

export default function Providers() {
    return (
        <>
            <section className="border-b border-mentor-line"><div className="container-edge py-20 md:py-28"><Eyebrow>For Healthcare Providers</Eyebrow><h1 className="display-1 mt-6 max-w-4xl">Join a structured healthcare network.</h1><p className="lead mt-6 max-w-2xl">Partner with Mentor TPA to become part of a growing healthcare ecosystem connected to employers, insurers, and digitally enabled healthcare workflows.</p><a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue" data-testid="prov-cta-join">Become a Network Partner</a></div></section>
            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-10 md:grid-cols-3">
                    <div className="card-hard p-7"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><Network className="h-5 w-5" /></div><div className="mt-5 text-xl font-extrabold tracking-tight">Why partner with Mentor TPA</div><ul className="mt-4 space-y-2 text-sm text-mentor-muted">{["access to a wider patient ecosystem","stronger administrative coordination","digital workflow integration","structured claims and access systems","participation in a growing healthcare network"].map((x,i)=><li key={i} className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-mentor-blue flex-shrink-0" />{x}</li>)}</ul></div>
                    <div className="card-hard p-7"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><Users className="h-5 w-5" /></div><div className="mt-5 text-xl font-extrabold tracking-tight">Who can join</div><ul className="mt-4 space-y-2 text-sm text-mentor-muted">{["hospitals","clinics","diagnostics and labs","pharmacies","healthcare facilities aligned with network standards"].map((x,i)=><li key={i} className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-mentor-blue flex-shrink-0" />{x}</li>)}</ul></div>
                    <div className="card-hard p-7"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><Heart className="h-5 w-5" /></div><div className="mt-5 text-xl font-extrabold tracking-tight">What providers gain</div><ul className="mt-4 space-y-2 text-sm text-mentor-muted">{["better visibility in the network","operational coordination","structured cashless access pathways","participation in a more digitized healthcare flow"].map((x,i)=><li key={i} className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-mentor-blue flex-shrink-0" />{x}</li>)}</ul></div>
                </div>
            </section>
            <CTABand eyebrow="Providers" headline="Apply to Join Network." subline="Contact Provider Relations to begin onboarding." testId="prov-cta" />
        </>
    );
}
