import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Calendar, Video, Users } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initial = { fullName:"", company:"", email:"", phone:"", message:"" };

function Field({label,children,required}){return(<div className="space-y-1.5"><Label className="text-xs font-bold uppercase tracking-[0.08em] text-mentor-muted">{label}{required && <span className="ml-1 text-mentor-blue">*</span>}</Label>{children}</div>);}

export default function BookDemo() {
    const [form,setForm] = useState(initial);
    const [errors,setErrors] = useState({});
    const [submitted,setSubmitted] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const handle = (k) => (e) => setForm((f)=>({...f,[k]: e.target.value}));
    const onSubmit = (ev) => {
        ev.preventDefault();
        const e = {};
        if (!form.fullName.trim()) e.fullName = "Required.";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
        if (!form.phone.trim() || form.phone.replace(/\D/g,"").length<7) e.phone = "Invalid phone.";
        setErrors(e);
        if (Object.keys(e).length) { toast.error("Please fix the highlighted fields."); return; }
        setSubmitting(true);
        setTimeout(()=>{ setSubmitting(false); setSubmitted(true); toast.success("Demo booked."); },600);
    };
    if (submitted) return (<section className="py-24 md:py-32" data-testid="bd-success"><div className="container-edge max-w-2xl text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mentor-blue/10"><CheckCircle2 className="h-8 w-8 text-mentor-blue" /></div><h1 className="display-2 mt-8">Demo request received.</h1><p className="lead mt-4">Our team will reach out to confirm a slot.</p><div className="mt-8"><Link to="/" className="rounded-full bg-mentor-black px-5 py-3 text-sm font-semibold text-white">Back to home</Link></div></div></section>);
    return (
        <section className="relative py-20 md:py-28 mesh-hero" data-testid="bd-page">
            <div className="pointer-events-none absolute right-[-120px] top-10 h-80 w-80 rounded-full bg-mentor-blue/10 blur-3xl" />
            <div className="container-edge grid gap-12 md:grid-cols-[1fr,1.4fr]">
            <div>
                <Eyebrow>Book a Demo</Eyebrow>
                <h1 className="display-2 mt-5">See Mentor TPA in action.</h1>
                <p className="lead mt-4">Book a demo to see how Mentor TPA handles claims workflows, provider coordination, visibility dashboards, and healthcare administration across different stakeholder models.</p>
                <div className="mt-8">
                    <MediaImage src={IMG.dashboards} alt="Mentor TPA dashboards" ratio="16/10" rounded="rounded-2xl" overlay="soft" />
                </div>
                <ul className="mt-8 space-y-3 text-sm">
                    <li className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-mentor-blue/10 text-mentor-blue"><Calendar className="h-4 w-4" /></span><span><span className="font-bold">30-minute session</span> — focused on your scenario</span></li>
                    <li className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-mentor-blue/10 text-mentor-blue"><Video className="h-4 w-4" /></span><span><span className="font-bold">Live walkthrough</span> — claims, network, dashboards</span></li>
                    <li className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-mentor-blue/10 text-mentor-blue"><Users className="h-4 w-4" /></span><span><span className="font-bold">Tailored Q&A</span> with our team</span></li>
                </ul>
            </div>
            <form onSubmit={onSubmit} className="rounded-3xl border border-mentor-line p-6 md:p-8" data-testid="bd-form" noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full Name" required><Input data-testid="bd-fullName" value={form.fullName} onChange={handle("fullName")} className={errors.fullName?"border-red-500":""} />{errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}</Field>
                    <Field label="Company"><Input data-testid="bd-company" value={form.company} onChange={handle("company")} /></Field>
                    <Field label="Email" required><Input data-testid="bd-email" type="email" value={form.email} onChange={handle("email")} className={errors.email?"border-red-500":""} />{errors.email && <p className="text-xs text-red-500">{errors.email}</p>}</Field>
                    <Field label="Phone" required><Input data-testid="bd-phone" value={form.phone} onChange={handle("phone")} className={errors.phone?"border-red-500":""} />{errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}</Field>
                </div>
                <div className="mt-5"><Field label="Message"><Textarea data-testid="bd-message" value={form.message} onChange={handle("message")} rows={4} /></Field></div>
                <button type="submit" data-testid="bd-submit" disabled={submitting} className="mt-6 inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue disabled:opacity-50">{submitting?"Submitting…":"Book Demo"} <ArrowRight className="h-4 w-4" /></button>
            </form>
        </div></section>
    );
}
