import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Mail, Globe, MapPin } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import Reveal from "../components/shared/Reveal";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ORG = ["Corporate","Insurance Company","Healthcare Provider","Other"];
const SERVICE = ["Self-Funded Healthcare","Claims Management","TPA Infrastructure","Provider Network","Demo Request"];
const initial = { fullName:"", company:"", jobTitle:"", email:"", phone:"", orgType:"", employees:"", service:"", message:"" };

function Field({label,children,required}){return(<div className="space-y-1.5"><Label className="text-xs font-bold uppercase tracking-[0.08em] text-mentor-muted">{label}{required && <span className="ml-1 text-mentor-blue">*</span>}</Label>{children}</div>);}

export default function Contact() {
    const [form,setForm] = useState(initial);
    const [errors,setErrors] = useState({});
    const [submitted,setSubmitted] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const handle = (k) => (e) => setForm((f)=>({...f,[k]: e?.target ? e.target.value : e}));

    const onSubmit = (ev) => {
        ev.preventDefault();
        const e = {};
        if (!form.fullName.trim()) e.fullName = "Required.";
        if (!form.company.trim()) e.company = "Required.";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
        if (!form.phone.trim() || form.phone.replace(/\D/g,"").length<7) e.phone = "Invalid phone.";
        if (!form.orgType) e.orgType = "Required.";
        if (!form.message.trim()) e.message = "Required.";
        setErrors(e);
        if (Object.keys(e).length) { toast.error("Please fix the highlighted fields."); return; }
        setSubmitting(true);
        setTimeout(()=>{ setSubmitting(false); setSubmitted(true); toast.success("Enquiry submitted."); },600);
    };

    return (
        <>
            <section className="relative overflow-hidden border-b border-mentor-line mesh-hero">
                <div className="pointer-events-none absolute right-[-100px] top-[-60px] h-80 w-80 rounded-full bg-mentor-blue/10 blur-3xl" />
                <div className="container-edge grid gap-10 py-20 md:grid-cols-[1.15fr,1fr] md:items-end md:py-28">
                    <Reveal>
                        <Eyebrow>Contact</Eyebrow>
                        <h1 className="display-1 mt-6 max-w-3xl">Start your healthcare transformation.</h1>
                        <p className="lead mt-6 max-w-2xl">Whether you are evaluating self-funded healthcare, insurer-side claims infrastructure, provider network integration, or a better digital healthcare administration model, we are ready to help.</p>
                    </Reveal>
                    <Reveal variant="right" delay={120}>
                        <MediaImage src={IMG.teamCollab} alt="Reach Mentor TPA" ratio="4/3" frame overlay="soft" />
                    </Reveal>
                </div>
            </section>

            <section className="py-20 md:py-28"><div className="container-edge grid gap-12 md:grid-cols-[1fr,1.4fr]">
                <div>
                    <h2 className="text-xl font-extrabold tracking-tight">Contact blocks</h2>
                    <div className="mt-6 space-y-4 text-sm">
                        <a href="mailto:info@mentortpa.com" className="group flex items-start gap-3 rounded-xl border border-mentor-line p-4 transition hover:-translate-y-0.5 hover:border-mentor-blue hover:bg-mentor-blue/[0.03]" data-testid="ct-email"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-black text-white transition group-hover:bg-mentor-blue"><Mail className="h-4 w-4" /></div><div><div className="font-bold">Primary enquiries</div><div className="text-mentor-muted">info@mentortpa.com</div></div></a>
                        <div className="group flex items-start gap-3 rounded-xl border border-mentor-line p-4 transition hover:-translate-y-0.5 hover:border-mentor-blue"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-black text-white transition group-hover:bg-mentor-blue"><Globe className="h-4 w-4" /></div><div><div className="font-bold">Website</div><div className="text-mentor-muted">www.thementorhealth.com</div></div></div>
                        <div className="group flex items-start gap-3 rounded-xl border border-mentor-line p-4 transition hover:-translate-y-0.5 hover:border-mentor-blue"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-black text-white transition group-hover:bg-mentor-blue"><MapPin className="h-4 w-4" /></div><div><div className="font-bold">Office</div><div className="text-mentor-muted">Karachi, Pakistan</div></div></div>
                    </div>
                    <div className="mt-6 rounded-2xl bg-mentor-surface p-5 text-sm"><div className="font-bold">International presence</div><div className="mt-3 flex flex-wrap gap-2">{["UAE","Singapore","USA"].map(p=><span key={p} className="pill">{p}</span>)}</div></div>
                    <div className="mt-4 text-xs text-mentor-muted"><Link to="/request-proposal" className="link-underline text-xs">Request a proposal <ArrowRight className="h-3.5 w-3.5" /></Link><br /><Link to="/book-demo" className="mt-2 link-underline text-xs">Book a demo <ArrowRight className="h-3.5 w-3.5" /></Link></div>
                </div>

                {submitted ? (
                    <div data-testid="ct-success" className="flex flex-col items-center justify-center rounded-3xl border border-mentor-line p-12 text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-mentor-blue/10"><CheckCircle2 className="h-8 w-8 text-mentor-blue" /></div><h2 className="display-2 mt-6">Enquiry submitted.</h2><p className="lead mt-3 max-w-md">Our team will reach out to you shortly.</p></div>
                ) : (
                    <form onSubmit={onSubmit} className="rounded-3xl border border-mentor-line p-6 md:p-8" data-testid="ct-form" noValidate>
                        <div className="grid gap-5 md:grid-cols-2">
                            <Field label="Full Name" required><Input data-testid="ct-fullName" value={form.fullName} onChange={handle("fullName")} className={errors.fullName?"border-red-500":""} />{errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}</Field>
                            <Field label="Company Name" required><Input data-testid="ct-company" value={form.company} onChange={handle("company")} className={errors.company?"border-red-500":""} />{errors.company && <p className="text-xs text-red-500">{errors.company}</p>}</Field>
                            <Field label="Job Title"><Input data-testid="ct-jobTitle" value={form.jobTitle} onChange={handle("jobTitle")} /></Field>
                            <Field label="Email" required><Input data-testid="ct-email-input" type="email" value={form.email} onChange={handle("email")} className={errors.email?"border-red-500":""} />{errors.email && <p className="text-xs text-red-500">{errors.email}</p>}</Field>
                            <Field label="Phone Number" required><Input data-testid="ct-phone" value={form.phone} onChange={handle("phone")} className={errors.phone?"border-red-500":""} />{errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}</Field>
                            <Field label="Organization Type" required><Select value={form.orgType} onValueChange={handle("orgType")}><SelectTrigger data-testid="ct-orgType" className={errors.orgType?"border-red-500":""}><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{ORG.map(o=><SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>{errors.orgType && <p className="text-xs text-red-500">{errors.orgType}</p>}</Field>
                            <Field label="Number of Employees or Members"><Input data-testid="ct-employees" value={form.employees} onChange={handle("employees")} /></Field>
                            <Field label="Service Interested In"><Select value={form.service} onValueChange={handle("service")}><SelectTrigger data-testid="ct-service"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{SERVICE.map(s=><SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent></Select></Field>
                        </div>
                        <div className="mt-5"><Field label="Message" required><Textarea data-testid="ct-message" value={form.message} onChange={handle("message")} rows={5} className={errors.message?"border-red-500":""} />{errors.message && <p className="text-xs text-red-500">{errors.message}</p>}</Field></div>
                        <button type="submit" data-testid="ct-submit" disabled={submitting} className="mt-6 inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue disabled:opacity-50">{submitting?"Sending…":"Submit Enquiry"} <ArrowRight className="h-4 w-4" /></button>
                    </form>
                )}
            </div></section>
        </>
    );
}
