import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Calendar as CalendarIcon } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const ORG_TYPES = ["Self-funded employer", "Insurance company", "Healthcare provider", "Broker / consultant", "Other"];
const DEMO_TYPES = ["Platform walkthrough (30 min)", "Deep-dive — Claims engine", "Deep-dive — Provider network", "Executive briefing"];

const initial = { fullName: "", company: "", jobTitle: "", email: "", phone: "", orgType: "", demoType: "", date: null, message: "" };

function Field({ label, children, required }) {
    return (
        <div className="space-y-1.5">
            <Label className="text-xs font-bold uppercase tracking-[0.08em] text-mentor-muted">{label}{required && <span className="ml-1 text-mentor-blue">*</span>}</Label>
            {children}
        </div>
    );
}

export default function BookDemo() {
    const [form, setForm] = useState(initial);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

    const onSubmit = (ev) => {
        ev.preventDefault();
        const e = {};
        if (!form.fullName.trim()) e.fullName = "Required.";
        if (!form.company.trim()) e.company = "Required.";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
        if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7) e.phone = "Invalid phone.";
        if (!form.orgType) e.orgType = "Required.";
        if (!form.demoType) e.demoType = "Required.";
        setErrors(e);
        if (Object.keys(e).length) { toast.error("Please fix the highlighted fields."); return; }
        setSubmitting(true);
        setTimeout(() => { setSubmitting(false); setSubmitted(true); toast.success("Demo request received. We'll confirm a slot within 1 business day."); }, 700);
    };

    if (submitted) {
        return (
            <section className="py-24 md:py-32" data-testid="bd-success">
                <div className="container-edge max-w-2xl text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mentor-blue/10"><CheckCircle2 className="h-8 w-8 text-mentor-blue" /></div>
                    <h1 className="display-2 mt-8">Your demo is scheduled for review.</h1>
                    <p className="lead mt-4">We'll confirm a working slot within one business day and share a calendar invite.</p>
                    <div className="mt-8"><Link to="/" className="rounded-full bg-mentor-black px-5 py-3 text-sm font-semibold text-white">Back to home</Link></div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 md:py-28" data-testid="bd-page">
            <div className="container-edge grid gap-12 md:grid-cols-[1fr,1.4fr]">
                <div>
                    <Eyebrow>Book a Demo</Eyebrow>
                    <h1 className="display-2 mt-5">See Mentor TPA in action.</h1>
                    <p className="lead mt-4">A live walkthrough of the claims engine, provider network, dashboards, and AI control layer — tailored to your role.</p>
                    <div className="mt-8 space-y-3 rounded-2xl border border-mentor-line bg-mentor-surface p-6 text-sm">
                        <div className="font-bold">What to expect</div>
                        <ul className="space-y-2 text-mentor-muted">
                            <li>· 30 minutes, live with our team.</li>
                            <li>· Focus on your use case — employer, insurer, or provider.</li>
                            <li>· Your questions answered, with a working proposal to follow.</li>
                        </ul>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="rounded-3xl border border-mentor-line p-6 md:p-8" data-testid="bd-form" noValidate>
                    <div className="grid gap-5 md:grid-cols-2">
                        <Field label="Full name" required><Input data-testid="bd-fullName" value={form.fullName} onChange={handle("fullName")} className={errors.fullName ? "border-red-500" : ""} />{errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}</Field>
                        <Field label="Company name" required><Input data-testid="bd-company" value={form.company} onChange={handle("company")} className={errors.company ? "border-red-500" : ""} />{errors.company && <p className="text-xs text-red-500">{errors.company}</p>}</Field>
                        <Field label="Job title"><Input data-testid="bd-jobTitle" value={form.jobTitle} onChange={handle("jobTitle")} /></Field>
                        <Field label="Email" required><Input data-testid="bd-email" type="email" value={form.email} onChange={handle("email")} className={errors.email ? "border-red-500" : ""} />{errors.email && <p className="text-xs text-red-500">{errors.email}</p>}</Field>
                        <Field label="Phone" required><Input data-testid="bd-phone" value={form.phone} onChange={handle("phone")} className={errors.phone ? "border-red-500" : ""} />{errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}</Field>
                        <Field label="Organization type" required><Select value={form.orgType} onValueChange={handle("orgType")}><SelectTrigger data-testid="bd-orgType" className={errors.orgType ? "border-red-500" : ""}><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{ORG_TYPES.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>{errors.orgType && <p className="text-xs text-red-500">{errors.orgType}</p>}</Field>
                        <Field label="Preferred demo type" required><Select value={form.demoType} onValueChange={handle("demoType")}><SelectTrigger data-testid="bd-demoType" className={errors.demoType ? "border-red-500" : ""}><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{DEMO_TYPES.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>{errors.demoType && <p className="text-xs text-red-500">{errors.demoType}</p>}</Field>
                        <Field label="Preferred date (optional)">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button type="button" data-testid="bd-date" className="flex h-10 w-full items-center gap-2 rounded-md border border-input px-3 text-sm">
                                        <CalendarIcon className="h-4 w-4 text-mentor-muted" />
                                        <span className={form.date ? "text-mentor-black" : "text-mentor-muted"}>{form.date ? format(form.date, "PPP") : "Pick a date"}</span>
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar mode="single" selected={form.date} onSelect={handle("date")} disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))} />
                                </PopoverContent>
                            </Popover>
                        </Field>
                    </div>
                    <div className="mt-5"><Field label="Message"><Textarea data-testid="bd-message" value={form.message} onChange={handle("message")} rows={4} placeholder="Anything you'd like us to prepare?" /></Field></div>
                    <button type="submit" data-testid="bd-submit" disabled={submitting} className="mt-6 inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue disabled:opacity-50">
                        {submitting ? "Submitting…" : "Book a Demo"} <ArrowRight className="h-4 w-4" />
                    </button>
                </form>
            </div>
        </section>
    );
}
