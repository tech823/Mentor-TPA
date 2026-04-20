import { useMemo, useState } from "react";
import { Search, MapPin, Phone, Mail, ExternalLink, Filter, X, Star } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { HOSPITALS, CITIES, PROVINCES, FACILITY_TYPES, SPECIALTIES, HOSPITAL_STATS } from "../data/hospitals";

const ALL = "__all__";

export default function HospitalPanel() {
    const [q, setQ] = useState("");
    const [city, setCity] = useState(ALL);
    const [province, setProvince] = useState(ALL);
    const [type, setType] = useState(ALL);
    const [specialty, setSpecialty] = useState(ALL);
    const [cashlessOnly, setCashlessOnly] = useState(false);
    const [opdOnly, setOpdOnly] = useState(false);
    const [ipdOnly, setIpdOnly] = useState(false);

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();
        return HOSPITALS.filter((h) => {
            if (query && !(`${h.name} ${h.city} ${h.address} ${h.specialties.join(" ")}`.toLowerCase().includes(query))) return false;
            if (city !== ALL && h.city !== city) return false;
            if (province !== ALL && h.province !== province) return false;
            if (type !== ALL && h.type !== type) return false;
            if (specialty !== ALL && !h.specialties.includes(specialty)) return false;
            if (cashlessOnly && !h.cashless) return false;
            if (opdOnly && !h.opd) return false;
            if (ipdOnly && !h.ipd) return false;
            return true;
        }).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }, [q, city, province, type, specialty, cashlessOnly, opdOnly, ipdOnly]);

    const clearAll = () => {
        setQ(""); setCity(ALL); setProvince(ALL); setType(ALL); setSpecialty(ALL);
        setCashlessOnly(false); setOpdOnly(false); setIpdOnly(false);
    };

    const hasFilters = q || city !== ALL || province !== ALL || type !== ALL || specialty !== ALL || cashlessOnly || opdOnly || ipdOnly;

    return (
        <>
            <section className="border-b border-mentor-line bg-white" data-testid="hp-hero">
                <div className="container-edge py-16 md:py-20">
                    <Eyebrow>Hospital Panel List</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">Search the Mentor TPA <span className="text-mentor-blue">provider network</span>.</h1>
                    <p className="lead mt-5 max-w-2xl">Browse {HOSPITAL_STATS.total}+ hospitals across {HOSPITAL_STATS.cities} cities. Filter by city, province, facility type, specialty, and cashless availability.</p>
                </div>
            </section>

            <section className="sticky top-[72px] z-30 border-b border-mentor-line bg-white/95 backdrop-blur-md">
                <div className="container-edge py-4">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                        <div className="relative flex-1">
                            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mentor-muted" />
                            <Input
                                data-testid="hp-search"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search by hospital name, city, or specialty…"
                                className="h-11 pl-10 text-sm"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:flex">
                            <Select value={city} onValueChange={setCity}><SelectTrigger data-testid="hp-filter-city" className="h-11 w-full lg:w-[140px]"><SelectValue placeholder="City" /></SelectTrigger><SelectContent><SelectItem value={ALL}>All cities</SelectItem>{CITIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent></Select>
                            <Select value={province} onValueChange={setProvince}><SelectTrigger data-testid="hp-filter-province" className="h-11 w-full lg:w-[170px]"><SelectValue placeholder="Province" /></SelectTrigger><SelectContent><SelectItem value={ALL}>All provinces</SelectItem>{PROVINCES.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent></Select>
                            <Select value={type} onValueChange={setType}><SelectTrigger data-testid="hp-filter-type" className="h-11 w-full lg:w-[190px]"><SelectValue placeholder="Facility type" /></SelectTrigger><SelectContent><SelectItem value={ALL}>All types</SelectItem>{FACILITY_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select>
                            <Select value={specialty} onValueChange={setSpecialty}><SelectTrigger data-testid="hp-filter-specialty" className="h-11 w-full lg:w-[170px]"><SelectValue placeholder="Specialty" /></SelectTrigger><SelectContent><SelectItem value={ALL}>All specialties</SelectItem>{SPECIALTIES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent></Select>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer"><Checkbox data-testid="hp-filter-cashless" checked={cashlessOnly} onCheckedChange={setCashlessOnly} /> Cashless only</label>
                        <label className="flex items-center gap-2 cursor-pointer"><Checkbox data-testid="hp-filter-opd" checked={opdOnly} onCheckedChange={setOpdOnly} /> OPD available</label>
                        <label className="flex items-center gap-2 cursor-pointer"><Checkbox data-testid="hp-filter-ipd" checked={ipdOnly} onCheckedChange={setIpdOnly} /> IPD available</label>
                        <div className="ml-auto flex items-center gap-3 text-sm text-mentor-muted">
                            <span data-testid="hp-result-count"><strong className="text-mentor-black">{filtered.length}</strong> of {HOSPITALS.length} results</span>
                            {hasFilters && <button onClick={clearAll} data-testid="hp-clear" className="inline-flex items-center gap-1 text-mentor-blue hover:underline"><X className="h-3.5 w-3.5" /> Clear</button>}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-14" data-testid="hp-results">
                <div className="container-edge">
                    {/* Desktop table */}
                    <div className="hidden overflow-hidden rounded-2xl border border-mentor-line md:block">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-mentor-surface text-xs font-bold uppercase tracking-[0.12em] text-mentor-muted">
                                <tr>
                                    <th className="px-5 py-4">Hospital</th>
                                    <th className="px-5 py-4">City / Province</th>
                                    <th className="px-5 py-4">Type</th>
                                    <th className="px-5 py-4">Specialties</th>
                                    <th className="px-5 py-4">Access</th>
                                    <th className="px-5 py-4">Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((h) => (
                                    <tr key={h.id} className="border-t border-mentor-line align-top hover:bg-mentor-surface/60" data-testid={`hp-row-${h.id}`}>
                                        <td className="px-5 py-4">
                                            <div className="flex items-start gap-2">
                                                {h.featured && <Star className="mt-0.5 h-4 w-4 text-mentor-blue" />}
                                                <div>
                                                    <div className="font-bold text-mentor-black">{h.name}</div>
                                                    <div className="mt-1 text-xs text-mentor-muted flex items-start gap-1"><MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />{h.address}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4"><div className="font-semibold">{h.city}</div><div className="text-xs text-mentor-muted">{h.province}</div></td>
                                        <td className="px-5 py-4 text-xs"><span className="pill">{h.type}</span></td>
                                        <td className="px-5 py-4"><div className="flex flex-wrap gap-1">{h.specialties.slice(0, 3).map(s => <Badge key={s} variant="outline" className="font-medium text-[11px]">{s}</Badge>)}{h.specialties.length > 3 && <span className="text-xs text-mentor-muted">+{h.specialties.length - 3}</span>}</div></td>
                                        <td className="px-5 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {h.cashless && <span className="pill pill-blue">Cashless</span>}
                                                {h.opd && <span className="pill">OPD</span>}
                                                {h.ipd && <span className="pill">IPD</span>}
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-xs">
                                            <a href={`tel:${h.phone}`} className="flex items-center gap-1 font-semibold hover:text-mentor-blue"><Phone className="h-3 w-3" />{h.phone}</a>
                                            {h.email && <a href={`mailto:${h.email}`} className="mt-1 flex items-center gap-1 text-mentor-muted hover:text-mentor-blue"><Mail className="h-3 w-3" />{h.email}</a>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filtered.length === 0 && <div className="p-12 text-center text-sm text-mentor-muted">No hospitals match your filters. Try clearing them.</div>}
                    </div>

                    {/* Mobile cards */}
                    <div className="grid gap-3 md:hidden">
                        {filtered.map((h) => (
                            <div key={h.id} data-testid={`hp-card-${h.id}`} className="card-hard p-5">
                                <div className="flex items-start gap-2">
                                    {h.featured && <Star className="mt-1 h-4 w-4 text-mentor-blue" />}
                                    <div className="flex-1">
                                        <div className="text-base font-bold">{h.name}</div>
                                        <div className="mt-1 text-xs text-mentor-muted">{h.city}, {h.province}</div>
                                    </div>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-1">
                                    <span className="pill">{h.type}</span>
                                    {h.cashless && <span className="pill pill-blue">Cashless</span>}
                                    {h.opd && <span className="pill">OPD</span>}
                                    {h.ipd && <span className="pill">IPD</span>}
                                </div>
                                <div className="mt-3 flex flex-wrap gap-1">
                                    {h.specialties.slice(0, 4).map(s => <Badge key={s} variant="outline" className="font-medium text-[11px]">{s}</Badge>)}
                                </div>
                                <div className="mt-4 space-y-1.5 text-xs">
                                    <div className="flex items-start gap-1.5 text-mentor-muted"><MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />{h.address}</div>
                                    <a href={`tel:${h.phone}`} className="flex items-center gap-1.5 font-semibold"><Phone className="h-3.5 w-3.5" />{h.phone}</a>
                                </div>
                            </div>
                        ))}
                        {filtered.length === 0 && <div className="p-8 text-center text-sm text-mentor-muted">No hospitals match your filters.</div>}
                    </div>
                </div>
            </section>
        </>
    );
}
