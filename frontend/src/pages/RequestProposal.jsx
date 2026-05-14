import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Clock, Sparkles, TrendingUp, BarChart3, Loader2 } from "lucide-react";

import { Eyebrow } from "../components/shared/Eyebrow";
import Reveal from "../components/shared/Reveal";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { FormField } from "../components/shared/FormFields";

const MODELS = ["Insurance", "Reimbursement", "Self-Funded", "Mixed", "Direct Primary Care"];
const CHALLENGES = [
    "Rising cost of care",
    "High claims administrative burden",
    "Lack of data visibility",
    "Low employee satisfaction",
    "Fragmented provider network",
    "Compliance & Regulatory complexity"
];

const proposalSchema = z.object({
    company: z.string().min(2, "Company name must be at least 2 characters"),
    industry: z.string().optional(),
    contact: z.string().min(2, "Contact person is required"),
    email: z.string().email("Please enter a valid business email address"),
    phone: z.string().min(8, "Please enter a valid contact number"),
    employees: z.string().optional(),
    model: z.string().min(1, "Please select a model"),
    challenge: z.string().min(1, "Please select a challenge"),
    notes: z.string().optional(),
});

export default function RequestProposal() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const methods = useForm({
        resolver: zodResolver(proposalSchema),
        defaultValues: {
            company: "",
            industry: "",
            contact: "",
            email: "",
            phone: "",
            employees: "",
            model: "",
            challenge: "",
            notes: "",
        },
        mode: "onBlur"
    });

    const onSubmit = async (data) => {
        setSubmitting(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1800));
            console.log("Proposal Request:", data);
            setSubmitted(true);
            toast.success("Proposal request successfully transmitted.");
        } catch (error) {
            toast.error("Transmission failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) return (
        <main className="min-h-[90vh] flex items-center justify-center py-24 px-6 bg-mentor-surface/30" role="main">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl w-full text-center p-12 rounded-[3rem] bg-white border border-mentor-line shadow-2xl relative overflow-hidden"
            >
                {/* Premium Background Accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mentor-blue to-blue-600" />
                
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
                    className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-mentor-blue/10 mb-8"
                >
                    <CheckCircle2 className="h-12 w-12 text-mentor-blue" aria-hidden="true" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h1 className="display-2 text-mentor-black">Request Transmitted.</h1>
                    <p className="lead mt-6 text-mentor-muted">
                        Our actuarial and clinical teams are reviewing your organization's profile. 
                        Expect a preliminary assessment within <span className="text-mentor-blue font-bold">48 business hours</span>.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/" className="w-full sm:w-auto rounded-full bg-mentor-black px-10 py-4 text-sm font-bold text-white transition hover:bg-mentor-blue hover:shadow-lg hover:shadow-mentor-blue/20">
                        Return to Dashboard
                    </Link>
                    <Link to="/services" className="w-full sm:w-auto rounded-full border border-mentor-line px-10 py-4 text-sm font-bold text-mentor-black transition hover:bg-mentor-surface">
                        Explore Services
                    </Link>
                </motion.div>

                {/* Progress-like indicator */}
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 h-1 bg-mentor-blue/20"
                />
            </motion.div>
        </main>
    );

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-mentor-surface/10" data-testid="rp-page">
            {/* Background elements */}
            <div className="pointer-events-none absolute right-[-10%] top-0 h-[600px] w-[600px] rounded-full bg-mentor-blue/5 blur-[120px]" />
            <div className="pointer-events-none absolute left-[-5%] bottom-0 h-[400px] w-[400px] rounded-full bg-mentor-blue/5 blur-[100px]" />
            <div className="absolute inset-0 mesh-hero opacity-30" />

            <div className="container-edge relative z-10 grid gap-16 lg:grid-cols-[1fr,1.3fr]">
                <div>
                    <Reveal>
                        <Eyebrow icon={<Sparkles className="h-3 w-3" />}>Precision Healthcare</Eyebrow>
                        <h1 className="display-2 mt-6 tracking-tight">Request a <span className="text-mentor-blue">tailored</span> proposal.</h1>
                        <p className="lead mt-6 text-mentor-muted">
                            Elevate your healthcare strategy with data-driven insights. Our team crafts personalized TPA solutions that optimize clinical outcomes while minimizing administrative waste.
                        </p>
                    </Reveal>
                    
                    <Reveal delay={200} className="mt-10 group overflow-hidden rounded-3xl border border-mentor-line shadow-xl transition-all duration-500 hover:shadow-mentor-blue/10">
                        <MediaImage 
                            src={IMG.corporateMeeting} 
                            alt="Proposal review meeting" 
                            ratio="16/9" 
                            overlay="soft" 
                        />
                    </Reveal>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                        <Reveal delay={300}>
                            <FeatureItem 
                                icon={<FileText />} 
                                title="Actuarial Precision" 
                                desc="Customized modeling built specifically for your employee demographic and risk profile."
                            />
                        </Reveal>
                        <Reveal delay={400}>
                            <FeatureItem 
                                icon={<ShieldCheck />} 
                                title="Fiduciary Integrity" 
                                desc="Complete transparency in claims adjudication and fund management."
                            />
                        </Reveal>
                        <Reveal delay={500}>
                            <FeatureItem 
                                icon={<Clock />} 
                                title="Rapid Deployment" 
                                desc="Expedited review cycle ensuring your proposal is ready for evaluation within 2 days."
                            />
                        </Reveal>
                    </div>
                </div>

                <div className="relative">
                    <Reveal variant="right">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-mentor-blue/10 via-transparent to-mentor-blue/5 blur-3xl rounded-[3rem]" />
                        <FormProvider {...methods}>
                            <form 
                                onSubmit={methods.handleSubmit(onSubmit)} 
                                className="relative rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-mentor-line p-8 md:p-12 shadow-2xl shadow-mentor-blue/5" 
                                data-testid="rp-form" 
                                noValidate
                            >
                                <div className="mb-10 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold tracking-tight text-mentor-black">Proposal Inquiry</h2>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mentor-blue/10">
                                        <BarChart3 className="h-5 w-5 text-mentor-blue" />
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <FormField name="company" label="Company Name" placeholder="e.g. Global Tech Solutions" required />
                                        <FormField name="industry" label="Industry Sector" placeholder="e.g. Healthcare, Finance" />
                                        <FormField name="contact" label="Contact Person" placeholder="Full name" required />
                                        <FormField name="email" type="email" label="Business Email" placeholder="name@company.com" required />
                                        <FormField name="phone" label="Contact Phone" placeholder="+1 (555) 000-0000" required />
                                        <FormField name="employees" label="Employee Count" placeholder="e.g. 500-1000" />
                                        <FormField name="model" type="select" label="Current Model" options={MODELS} required />
                                        <FormField name="challenge" type="select" label="Primary Objective" options={CHALLENGES} required />
                                    </div>
                                    
                                    <FormField name="notes" type="textarea" label="Additional Context" placeholder="Tell us more about your specific needs or pain points..." />
                                    
                                    <button 
                                        type="submit" 
                                        data-testid="rp-submit" 
                                        disabled={submitting} 
                                        className="group relative w-full overflow-hidden rounded-full bg-mentor-black py-5 text-sm font-bold text-white transition-all hover:bg-mentor-blue hover:shadow-xl hover:shadow-mentor-blue/20 disabled:opacity-50"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {submitting ? (
                                                <>
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    Processing Inquiry...
                                                </>
                                            ) : (
                                                "Submit Proposal Request"
                                            )}
                                            {!submitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                                        </span>
                                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-mentor-blue to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </button>
                                </div>

                                <div className="mt-10 pt-8 border-t border-mentor-line flex items-center gap-4 text-[10px] font-bold text-mentor-muted uppercase tracking-widest opacity-70">
                                    <TrendingUp className="h-4 w-4 text-mentor-blue" />
                                    Optimized for performance & outcomes
                                </div>
                            </form>
                        </FormProvider>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon, title, desc }) {
    return (
        <div className="group flex gap-4 p-4 rounded-2xl border border-transparent transition-all hover:border-mentor-line hover:bg-white hover:shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mentor-blue/10 text-mentor-blue shadow-inner transition-transform group-hover:scale-110">
                {React.cloneElement(icon, { className: "h-5 w-5" })}
            </div>
            <div>
                <h3 className="text-sm font-bold text-mentor-black">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-mentor-muted">{desc}</p>
            </div>
        </div>
    );
}

