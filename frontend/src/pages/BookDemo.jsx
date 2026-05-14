import { useState, cloneElement } from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar, Video, Users, Play, Sparkles, ShieldCheck, Zap, Loader2 } from "lucide-react";

import { Eyebrow } from "../components/shared/Eyebrow";
import Reveal from "../components/shared/Reveal";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { FormField } from "../components/shared/FormFields";

const demoSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    company: z.string().min(2, "Company name is required"),
    email: z.string().email("Please enter a valid business email address"),
    phone: z.string().min(8, "Please enter a valid contact number"),
    message: z.string().optional(),
});

export default function BookDemo() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const methods = useForm({
        resolver: zodResolver(demoSchema),
        defaultValues: {
            fullName: "",
            company: "",
            email: "",
            phone: "",
            message: "",
        },
        mode: "onBlur"
    });

    const onSubmit = async (data) => {
        setSubmitting(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Demo Request:", data);
            setSubmitted(true);
            toast.success("Demo session requested successfully.");
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) return (
        <main className="min-h-[90vh] flex items-center justify-center py-24 px-6 bg-mentor-surface/30" role="main">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
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
                    <h1 className="display-2 text-mentor-black">Success!</h1>
                    <p className="lead mt-6 text-mentor-muted">
                        Thank you for your interest. A product specialist will contact you within <span className="text-mentor-blue font-bold">24 hours</span> to schedule your personalized walkthrough of the Mentor Third-Party Administrator (TPA) ecosystem.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-mentor-black px-10 py-4 text-sm font-bold text-white transition hover:bg-mentor-blue hover:shadow-lg hover:shadow-mentor-blue/20">
                        Back to Home
                    </Link>
                    <Link to="/technology" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-mentor-line px-10 py-4 text-sm font-bold text-mentor-black transition hover:bg-mentor-surface">
                        View Technology
                    </Link>
                </motion.div>
                
                {/* Progress-like indicator for success feeling */}
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
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-mentor-surface/10" data-testid="bd-page">
            {/* Background decorative elements */}
            <div className="pointer-events-none absolute left-[-10%] top-0 h-[600px] w-[600px] rounded-full bg-mentor-blue/5 blur-[120px]" />
            <div className="absolute inset-0 mesh-hero opacity-30" />
            
            <div className="container-edge relative z-10 grid gap-16 lg:grid-cols-[1fr,1.3fr]">
                <div>
                    <Reveal>
                        <Eyebrow icon={<Play className="h-3 w-3 fill-current" />}>Interactive Showcase</Eyebrow>
                        <h1 className="display-2 mt-6 tracking-tight">Experience <span className="text-mentor-blue">next-gen</span> TPA.</h1>
                        <p className="lead mt-6 text-mentor-muted">
                            See how Mentor Third-Party Administrator (TPA) orchestrates complex claims workflows, provider networks, and member experiences through a single, unified interface.
                        </p>
                    </Reveal>
                    
                    <Reveal delay={200} className="mt-10 group overflow-hidden rounded-3xl border border-mentor-line shadow-xl transition-all duration-500 hover:shadow-mentor-blue/10 relative">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-mentor-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <MediaImage 
                            src={IMG.dashboards} 
                            alt="Mentor Third-Party Administrator (TPA) dashboards" 
                            ratio="16/9" 
                            overlay="soft" 
                        />
                    </Reveal>

                    <div className="mt-12 space-y-8">
                        <Reveal delay={300}>
                            <FeatureItem 
                                icon={<Calendar />} 
                                title="30-Minute Focused Session" 
                                desc="No fluff. We dive straight into the features that matter most to your specific organizational model."
                            />
                        </Reveal>
                        <Reveal delay={400}>
                            <FeatureItem 
                                icon={<Video />} 
                                title="Live Workflow Walkthrough" 
                                desc="Real-time demonstration of claims adjudication, provider coordination, and visibility dashboards."
                            />
                        </Reveal>
                        <Reveal delay={500}>
                            <FeatureItem 
                                icon={<Users />} 
                                title="Direct Access to Experts" 
                                desc="Get your technical and operational questions answered by our implementation specialists."
                            />
                        </Reveal>
                    </div>
                </div>

                <div className="relative">
                    <Reveal variant="right" className="lg:sticky lg:top-[calc(var(--navbar-h)+1.5rem)]">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-mentor-blue/10 via-transparent to-mentor-blue/5 blur-3xl rounded-[3rem]" />
                        <FormProvider {...methods}>
                            <form 
                                onSubmit={methods.handleSubmit(onSubmit)} 
                                className="relative rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-mentor-line p-8 md:p-12 shadow-2xl shadow-mentor-blue/5" 
                                data-testid="bd-form" 
                                noValidate
                            >
                                <div className="mb-10 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold tracking-tight text-mentor-black">Book Your Demo</h2>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mentor-blue/10">
                                        <Sparkles className="h-5 w-5 text-mentor-blue" />
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                                        <FormField name="fullName" label="Full Name" placeholder="John Doe" required />
                                        <FormField name="company" label="Company Name" placeholder="e.g. Healthcare Corp" required />
                                        <FormField name="email" type="email" label="Business Email" placeholder="name@company.com" required />
                                        <FormField name="phone" label="Contact Phone" placeholder="+1 (555) 000-0000" required />
                                    </div>
                                    
                                    <FormField name="message" type="textarea" label="What would you like to see?" placeholder="Tell us about your specific requirements..." />
                                    
                                    <button 
                                        type="submit" 
                                        data-testid="bd-submit" 
                                        disabled={submitting} 
                                        className="group relative w-full overflow-hidden rounded-full bg-mentor-black py-5 text-sm font-bold text-white transition-all hover:bg-mentor-blue hover:shadow-xl hover:shadow-mentor-blue/20 disabled:opacity-50"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {submitting ? (
                                                <>
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    Processing...
                                                </>
                                            ) : (
                                                "Schedule My Session"
                                            )}
                                            {!submitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                                        </span>
                                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-mentor-blue to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </button>
                                </div>

                                <div className="mt-10 pt-8 border-t border-mentor-line grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-mentor-muted uppercase tracking-wider">
                                        <ShieldCheck className="h-4 w-4 text-mentor-blue" />
                                        Data Privacy
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-mentor-muted uppercase tracking-wider">
                                        <Zap className="h-4 w-4 text-mentor-blue" />
                                        No Obligation
                                    </div>
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
        <div className="group flex gap-5 p-4 rounded-2xl transition-all hover:bg-white hover:shadow-md border border-transparent hover:border-mentor-line/50">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mentor-blue/10 text-mentor-blue transition-transform group-hover:scale-110">
                {cloneElement(icon, { className: "h-5 w-5" })}
            </div>
            <div>
                <h3 className="text-sm font-bold text-mentor-black">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-mentor-muted">{desc}</p>
            </div>
        </div>
    );
}
