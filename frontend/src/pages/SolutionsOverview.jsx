import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, ShieldCheck, Stethoscope } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";

const items = [
    { icon: Briefcase, title: "For Self-Funded Companies", to: "/solutions/self-funded", cta: "See Self-Funded Solution", img: IMG.corporateMeeting },
    { icon: ShieldCheck, title: "For Insurance Companies", to: "/solutions/insurance", cta: "See Insurance Solution", img: IMG.handshake },
    { icon: Stethoscope, title: "For Providers", to: "/solutions/providers", cta: "View Provider Network", img: IMG.hospitalCorridor },
];

export default function SolutionsOverview() {
    return (
        <>
            <section className="relative overflow-hidden border-b border-mentor-line mesh-hero">
                <div className="pointer-events-none absolute right-[-120px] top-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl" />
                <div className="container-fluid py-20 md:py-28">
                    <Reveal>
                        <Eyebrow>Solutions</Eyebrow>
                        <h1 className="display-1 mt-6 max-w-4xl">Healthcare solutions built for control, scale, and experience.</h1>
                        <p className="lead mt-6 max-w-2xl">Mentor Third-Party Administrator (TPA) supports different healthcare stakeholders through tailored infrastructure and administrative models, whether you are managing employee healthcare, insurance claims operations, or healthcare delivery access.</p>
                    </Reveal>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-5 md:grid-cols-3">{items.map((s,i)=>(
                    <Reveal key={i} delay={i*100}>
                        <Link to={s.to} data-testid={`sol-card-${i}`} className="card-hard tilt-card group flex h-full flex-col overflow-hidden">
                            <div className="relative">
                                <MediaImage src={s.img} alt={s.title} ratio="16/10" rounded="rounded-none" overlay="dark" />
                                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-md"><s.icon className="h-5 w-5 text-mentor-blue" /></div>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-7">
                                <div className="text-2xl font-extrabold tracking-tight">{s.title}</div>
                                <div className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold">{s.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div>
                            </div>
                        </Link>
                    </Reveal>
                ))}</div>
            </section>

            <CTABand testId="sol-cta" />
        </>
    );
}
