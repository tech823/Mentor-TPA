import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MODELS = ["Insurance","Reimbursement","Self-Funded","Mixed"];
const CHALLENGES = ["Rising cost","Claims burden","Poor visibility","Employee dissatisfaction","Provider coordination"];
const initial = { company:"", industry:"", contact:"", email:"", phone:"", employees:"", model:"", challenge:"", notes:"" };

function Field({label,children,required}){return(<div className="space-y-1.5"><Label className="text-xs font-bold uppercase tracking-[0.08em] text-mentor-muted">{label}{required && <span className="ml-1 text-mentor-blue">*</span>}</Label>{children}</div>);}

export default function RequestProposal() {
    const [form,setForm] = useState(initial);
    const [errors,setErrors] = useState({});
    const [submitted,setSubmitted] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const handle = (k) => (e) => setForm((f)=>({...f,[k]: e?.target ? e.target.value : e}));

    const onSubmit = (ev) => {
        ev.preventDefault();
        const e = {};
        if (!form.company.trim()) e.company = "Required.";
        if (!form.contact.trim()) e.contact = "Required.";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
        if (!form.phone.trim() || form.phone.replace(/\D/g,"").length<7) e.phone = "Invalid phone.";
        setErrors(e);
        if (Object.keys(e).length) { toast.error("Please fix the highlighted fields."); return; }
        setSubmitting(true);
        setTimeout(()=>{ setSubmitting(false); setSubmitted(true); toast.success("Proposal request received."); },700);
    };

    if (submitted) return (
        <section className="py-24 md:py-32" data-testid="rp-success"><div className="container-edge max-w-2xl text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mentor-blue/10"><CheckCircle2 className="h-8 w-8 text-mentor-blue" /></div><h1 className="display-2 mt-8">Proposal request received.</h1><p className="lead mt-4">Our team will be in touch shortly.</p><div className="mt-8"><Link to="/" className="rounded-full bg-mentor-black px-5 py-3 text-sm font-semibold text-white">Back to home</Link></div></div></section>
    );

    return (
        <section className="py-20 md:py-28" data-testid="rp-page"><div className="container-edge grid gap-12 md:grid-cols-[1fr,1.4fr]">
            <div><Eyebrow>Request a Proposal</Eyebrow><h1 className="display-2 mt-5">Request a proposal.</h1><p className="lead mt-4">Tell us about your current healthcare model and we will help you evaluate the right structure, whether you need a self-funded solution, claims administration support, or insurer-ready infrastructure.</p></div>
            <form onSubmit={onSubmit} className="rounded-3xl border border-mentor-line p-6 md:p-8" data-testid="rp-form" noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Company Name" required><Input data-testid="rp-company" value={form.company} onChange={handle("company")} className={errors.company?"border-red-500":""} />{errors.company && <p className="text-xs text-red-500">{errors.company}</p>}</Field>
                    <Field label="Industry"><Input data-testid="rp-industry" value={form.industry} onChange={handle("industry")} /></Field>
                    <Field label="Contact Person" required><Input data-testid="rp-contact" value={form.contact} onChange={handle("contact")} className={errors.contact?"border-red-500":""} />{errors.contact && <p className="text-xs text-red-500">{errors.contact}</p>}</Field>
                    <Field label="Email" required><Input data-testid="rp-email" type="email" value={form.email} onChange={handle("email")} className={errors.email?"border-red-500":""} />{errors.email && <p className="text-xs text-red-500">{errors.email}</p>}</Field>
                    <Field label="Phone" required><Input data-testid="rp-phone" value={form.phone} onChange={handle("phone")} className={errors.phone?"border-red-500":""} />{errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}</Field>
                    <Field label="Number of employees"><Input data-testid="rp-employees" value={form.employees} onChange={handle("employees")} /></Field>
                    <Field label="Current healthcare model"><Select value={form.model} onValueChange={handle("model")}><SelectTrigger data-testid="rp-model"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{MODELS.map(m=><SelectItem key={m} value={m}>{m}</SelectItem>)}</SelectContent></Select></Field>
                    <Field label="Main challenge"><Select value={form.challenge} onValueChange={handle("challenge")}><SelectTrigger data-testid="rp-challenge"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{CHALLENGES.map(c=><SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent></Select></Field>
                </div>
                <div className="mt-5"><Field label="Notes"><Textarea data-testid="rp-notes" value={form.notes} onChange={handle("notes")} rows={4} /></Field></div>
                <button type="submit" data-testid="rp-submit" disabled={submitting} className="mt-6 inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue disabled:opacity-50">{submitting?"Submitting…":"Request Proposal"} <ArrowRight className="h-4 w-4" /></button>
            </form>
        </div></section>
    );
}
