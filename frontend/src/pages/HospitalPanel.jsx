import { Link } from "react-router-dom";
import { Search, Info } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { Input } from "@/components/ui/input";
import { HOSPITALS } from "../data/hospitals";

export default function HospitalPanel() {
    return (
        <>
            <section className="relative overflow-hidden border-b border-mentor-line mesh-hero" data-testid="hp-hero">
                <div className="pointer-events-none absolute right-[-100px] top-[-40px] h-80 w-80 rounded-full bg-mentor-blue/10 blur-3xl" />
                <div className="container-edge grid gap-10 py-16 md:grid-cols-[1.1fr,1fr] md:items-end md:py-20">
                    <div>
                        <Eyebrow>Hospital Panel List</Eyebrow>
                        <h1 className="display-1 mt-6 max-w-3xl">Hospital Panel List</h1>
                        <p className="lead mt-5 max-w-2xl">Browse hospitals available within the Mentor TPA network. Use filters to search by city, hospital name, specialty, and service category.</p>
                    </div>
                    <div>
                        <MediaImage src={IMG.hospitalExterior} alt="Hospital facilities" ratio="4/3" frame overlay="soft" />
                    </div>
                </div>
            </section>

            <section className="border-b border-mentor-line bg-white">
                <div className="container-edge py-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center">
                        <div className="relative flex-1">
                            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mentor-muted" />
                            <Input data-testid="hp-search" placeholder="Search by hospital name, city, specialty…" className="h-11 pl-10 text-sm" disabled />
                        </div>
                        <div className="text-xs text-mentor-muted md:ml-auto">Filters: city · specialty · inpatient/outpatient · cashless · category</div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24" data-testid="hp-empty">
                <div className="container-edge max-w-3xl">
                    {HOSPITALS.length === 0 ? (
                        <div className="rounded-3xl border border-mentor-line bg-mentor-surface p-10 text-center md:p-16">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm"><Info className="h-6 w-6 text-mentor-blue" /></div>
                            <h2 className="display-2 mt-6">Panel list coming soon.</h2>
                            <p className="lead mt-4 mx-auto max-w-xl">The Mentor TPA hospital panel is being finalized. For current network details, service coverage, and cashless availability, please contact our team directly.</p>
                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                <Link to="/contact" data-testid="hp-contact-cta" className="rounded-full bg-mentor-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-mentor-blue">Contact Mentor TPA</Link>
                                <Link to="/provider-network" className="rounded-full border border-mentor-black px-5 py-3 text-sm font-semibold">View Provider Network</Link>
                            </div>
                        </div>
                    ) : null}
                    <p className="mt-8 text-center text-xs text-mentor-muted">Provider availability, services, and terms may vary by client plan, location, and operational status. Please contact Mentor TPA for confirmation.</p>
                </div>
            </section>
        </>
    );
}

