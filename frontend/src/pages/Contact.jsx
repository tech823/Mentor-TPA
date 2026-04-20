import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initial = { fullName: "", company: "", email: "", phone: "", message: "" };

function Field({ label, children, required }) {
    return (
        <div className="space-y-1.5">
            <Label className="text-xs font-bold uppercase tracking-[0.08em] text-mentor-muted">{label}{required && <span className="ml-1 text-mentor-blue">*</span>}</Label>
            {children}
        </div>
    );
}

export default function Contact() {
    const [form, setForm] = useState(initial);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const onSubmit = (ev) => {
        ev.preventDefault();
        const e = {};
        if (!form.fullName.trim()) e.fullName = "Required.";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
        if (!form.message.trim()) e.message = "Required.";
        setErrors(e);
        if (Object.keys(e).length) { toast.error("Please fix the highlighted fields."); return; }
        setSubmitting(true);
        setTimeout(() => { setSubmitting(false); setSubmitted(true); toast.success("Thanks — we'll reply soon."); }, 600);
    };

    return (
        <>
            <section className="border-b border-mentor-line" data-testid="ct-hero">
                <div className="container-edge py-16 md:py-20">
                    <Eyebrow>Contact</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">Talk to the Mentor TPA team.</h1>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-12 md:grid-cols-[1fr,1.4fr]">
                    <div>
                        <h2 className="text-2xl font-extrabold tracking-tight">Reach us directly</h2>
                        <div className="mt-6 space-y-4 text-sm">
                            <a href="mailto:hello@mentortpa.com" className="flex items-start gap-3 rounded-xl border border-mentor-line p-4 transition hover:border-mentor-black" data-testid="ct-email">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-black text-white"><Mail className="h-4 w-4" /></div>
                                <div><div className="font-bold">Email</div><div className="text-mentor-muted">hello@mentortpa.com</div></div>
                            </a>
                            <a href="tel:+92000000000" className="flex items-start gap-3 rounded-xl border border-mentor-line p-4 transition hover:border-mentor-black" data-testid="ct-phone">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-black text-white"><Phone className="h-4 w-4" /></div>
                                <div><div className="font-bold">Phone</div><div className="text-mentor-muted">+92 00 000 0000</div></div>
                            </a>
                            <div className="flex items-start gap-3 rounded-xl border border-mentor-line p-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-black text-white"><MapPin className="h-4 w-4" /></div>
                                <div><div className="font-bold">Head Office</div><div className="text-mentor-muted">Pakistan</div></div>
                            </div>
                        </div>
                        <div className="mt-8 rounded-2xl bg-mentor-surface p-6 text-sm">
                            <div className="font-bold">Looking for something specific?</div>
                            <div className="mt-3 space-y-2">
                                <Link to="/request-proposal" className="link-underline text-sm">Request a proposal <ArrowRight className="h-3.5 w-3.5" /></Link><br />
                                <Link to="/book-demo" className="link-underline text-sm">Book a demo <ArrowRight className="h-3.5 w-3.5" /></Link>
                            </div>
                        </div>
                    </div>

                    {submitted ? (
                        <div data-testid="ct-success" className="flex flex-col items-center justify-center rounded-3xl border border-mentor-line p-12 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mentor-blue/10"><CheckCircle2 className="h-8 w-8 text-mentor-blue" /></div>
                            <h2 className="display-2 mt-6">Message sent.</h2>
                            <p className="lead mt-3 max-w-md">A member of our team will reply within one business day.</p>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="rounded-3xl border border-mentor-line p-6 md:p-8" data-testid="ct-form" noValidate>
                            <div className="grid gap-5 md:grid-cols-2">
                                <Field label="Full name" required><Input data-testid="ct-fullName" value={form.fullName} onChange={handle("fullName")} className={errors.fullName ? "border-red-500" : ""} />{errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}</Field>
                                <Field label="Company name"><Input data-testid="ct-company" value={form.company} onChange={handle("company")} /></Field>
                                <Field label="Email" required><Input data-testid="ct-email-input" type="email" value={form.email} onChange={handle("email")} className={errors.email ? "border-red-500" : ""} />{errors.email && <p className="text-xs text-red-500">{errors.email}</p>}</Field>
                                <Field label="Phone"><Input data-testid="ct-phone-input" value={form.phone} onChange={handle("phone")} /></Field>
                            </div>
                            <div className="mt-5"><Field label="Message" required><Textarea data-testid="ct-message" value={form.message} onChange={handle("message")} rows={5} className={errors.message ? "border-red-500" : ""} />{errors.message && <p className="text-xs text-red-500">{errors.message}</p>}</Field></div>
                            <button type="submit" data-testid="ct-submit" disabled={submitting} className="mt-6 inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue disabled:opacity-50">
                                {submitting ? "Sending…" : "Send Message"} <ArrowRight className="h-4 w-4" />
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
}
