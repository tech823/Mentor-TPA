import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ORG_TYPES = ["Self-funded employer", "Insurance company", "Healthcare provider", "Broker / consultant", "Other"];
const MODELS = ["Traditional TPA", "Insured plan", "Self-administered", "No current program", "Other"];

const initial = {
    fullName: "", company: "", jobTitle: "", email: "", phone: "",
    orgType: "", employees: "", model: "", challenge: "", message: "",
};

function Field({ label, children, required }) {
    return (
        <div className="space-y-1.5">
            <Label className="text-xs font-bold uppercase tracking-[0.08em] text-mentor-muted">{label}{required && <span className="ml-1 text-mentor-blue">*</span>}</Label>
            {children}
        </div>
    );
}

export default function RequestProposal() {
    const [form, setForm] = useState(initial);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

    const validate = () => {
        const e = {};
        if (!form.fullName.trim()) e.fullName = "Full name is required.";
        if (!form.company.trim()) e.company = "Company name is required.";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
        if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone.";
        if (!form.orgType) e.orgType = "Please select an organization type.";
        return e;
    };

    const onSubmit = (ev) => {
        ev.preventDefault();
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length) { toast.error("Please fix the highlighted fields."); return; }
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false); setSubmitted(true);
            toast.success("Proposal request received. Our team will reach out within 1 business day.");
        }, 700);
    };

    if (submitted) {
        return (
            <section className="py-24 md:py-32" data-testid="rp-success">
                <div className="container-edge max-w-2xl text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mentor-blue/10"><CheckCircle2 className="h-8 w-8 text-mentor-blue" /></div>
                    <h1 className="display-2 mt-8">Thanks — we'll be in touch.</h1>
                    <p className="lead mt-4">Your proposal request has been received. A member of the Mentor TPA team will reach out within one business day with next steps.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Link to="/" className="rounded-full border border-mentor-black px-5 py-3 text-sm font-semibold">Back to home</Link>
                        <Link to="/technology" className="rounded-full bg-mentor-black px-5 py-3 text-sm font-semibold text-white">Explore the platform</Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 md:py-28" data-testid="rp-page">
            <div className="container-edge grid gap-12 md:grid-cols-[1fr,1.4fr]">
                <div>
                    <Eyebrow>Request a Proposal</Eyebrow>
                    <h1 className="display-2 mt-5">Tell us about your organization.</h1>
                    <p className="lead mt-4">Share a few details and we'll come back with a tailored proposal — sized to your membership, benefit design, and operating model.</p>
                    <div className="mt-8 space-y-3 rounded-2xl border border-mentor-line bg-mentor-surface p-6 text-sm">
                        <div className="font-bold">What happens next</div>
                        <ul className="space-y-2 text-mentor-muted">
                            <li>· We review your submission within one business day.</li>
                            <li>· A short discovery call to confirm scope.</li>
                            <li>· A written proposal with commercial and implementation terms.</li>
                        </ul>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="rounded-3xl border border-mentor-line p-6 md:p-8" data-testid="rp-form" noValidate>
                    <div className="grid gap-5 md:grid-cols-2">
                        <Field label="Full name" required><Input data-testid="rp-fullName" value={form.fullName} onChange={handle("fullName")} className={errors.fullName ? "border-red-500" : ""} />{errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}</Field>
                        <Field label="Company name" required><Input data-testid="rp-company" value={form.company} onChange={handle("company")} className={errors.company ? "border-red-500" : ""} />{errors.company && <p className="text-xs text-red-500">{errors.company}</p>}</Field>
                        <Field label="Job title"><Input data-testid="rp-jobTitle" value={form.jobTitle} onChange={handle("jobTitle")} /></Field>
                        <Field label="Email" required><Input data-testid="rp-email" type="email" value={form.email} onChange={handle("email")} className={errors.email ? "border-red-500" : ""} />{errors.email && <p className="text-xs text-red-500">{errors.email}</p>}</Field>
                        <Field label="Phone" required><Input data-testid="rp-phone" value={form.phone} onChange={handle("phone")} className={errors.phone ? "border-red-500" : ""} />{errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}</Field>
                        <Field label="Organization type" required>
                            <Select value={form.orgType} onValueChange={handle("orgType")}><SelectTrigger data-testid="rp-orgType" className={errors.orgType ? "border-red-500" : ""}><SelectValue placeholder="Select type" /></SelectTrigger><SelectContent>{ORG_TYPES.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
                            {errors.orgType && <p className="text-xs text-red-500">{errors.orgType}</p>}
                        </Field>
                        <Field label="# Employees / members"><Input data-testid="rp-employees" value={form.employees} onChange={handle("employees")} placeholder="e.g. 1,200" /></Field>
                        <Field label="Current healthcare model"><Select value={form.model} onValueChange={handle("model")}><SelectTrigger data-testid="rp-model"><SelectValue placeholder="Select model" /></SelectTrigger><SelectContent>{MODELS.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}</SelectContent></Select></Field>
                    </div>
                    <div className="mt-5 space-y-5">
                        <Field label="Primary challenge"><Input data-testid="rp-challenge" value={form.challenge} onChange={handle("challenge")} placeholder="e.g. cost control, claim delays, lack of visibility" /></Field>
                        <Field label="Message"><Textarea data-testid="rp-message" value={form.message} onChange={handle("message")} rows={4} placeholder="Anything specific you'd like us to know?" /></Field>
                    </div>
                    <button type="submit" data-testid="rp-submit" disabled={submitting} className="mt-6 inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue disabled:opacity-50">
                        {submitting ? "Submitting…" : "Request Proposal"} <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="mt-4 text-xs text-mentor-muted">By submitting, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link>.</p>
                </form>
            </div>
        </section>
    );
}
