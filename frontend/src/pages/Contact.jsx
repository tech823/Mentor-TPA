import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Globe,
  MapPin,
  Send,
  Building2,
  Users,
  MessageSquare,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { Eyebrow } from "../components/shared/Eyebrow";
import Reveal from "../components/shared/Reveal";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { FormField } from "../components/shared/FormFields";
import { IpadFrame } from "@/components/ui/LiquidGlassComponents";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  jobTitle: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Invalid phone number"),
  orgType: z.string().min(1, "Please select organization type"),
  employees: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ORG_TYPES = [
  "Corporate",
  "Insurance Company",
  "Healthcare Provider",
  "TPA Partner",
  "Other",
];

const SERVICES = [
  "Self-Funded Healthcare",
  "Claims Management",
  "TPA Infrastructure",
  "Provider Network",
  "Demo Request",
  "General Inquiry",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      company: "",
      jobTitle: "",
      email: "",
      phone: "",
      orgType: "",
      employees: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      toast.success("Enquiry submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main
        className="min-h-[90vh] flex items-center justify-center bg-mentor-surface/30 px-6"
        role="main"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container-edge max-w-2xl w-full"
        >
          <div className="relative overflow-hidden rounded-[3rem] border border-mentor-line bg-white p-12 text-center shadow-2xl">
            {/* Premium Background Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mentor-blue to-blue-600" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mentor-blue/5 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-mentor-blue/5 blur-3xl" />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 200,
                delay: 0.2,
              }}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-mentor-blue/10 mb-8"
            >
              <CheckCircle2
                className="h-12 w-12 text-mentor-blue"
                aria-hidden="true"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="display-2 text-mentor-black">Message Sent.</h1>
              <p className="lead mt-6 text-mentor-muted">
                Thank you for reaching out to Mentor TPA. Our team has received
                your inquiry and will respond within{" "}
                <span className="text-mentor-blue font-bold">24 hours</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/"
                className="w-full sm:w-auto rounded-full bg-mentor-black px-10 py-4 text-sm font-bold text-white transition hover:bg-mentor-blue hover:shadow-lg hover:shadow-mentor-blue/20"
              >
                Return Home
              </Link>
              <button
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto rounded-full border border-mentor-line px-10 py-4 text-sm font-bold text-mentor-black transition hover:bg-mentor-surface"
              >
                Send Another Message
              </button>
            </motion.div>

            {/* Progress-like indicator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 h-1 bg-mentor-blue/20"
            />
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-mentor-line bg-mentor-surface/30 pt-20 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 mesh-hero opacity-40" />
        <div className="container-fluid relative z-10 grid gap-12 lg:grid-cols-[1.1fr,1fr] items-center">
          <Reveal>
            <Eyebrow>Contact Us</Eyebrow>
            <h1 className="display-1 mt-6 font-bold tracking-tight">
              Let's build a <span className="text-mentor-blue">connected</span>{" "}
              healthcare ecosystem.
            </h1>
            <p className="lead mt-6 max-w-xl text-mentor-muted">
              Whether you're looking to modernize your claims infrastructure,
              integrate a provider network, or evaluate self-funded solutions,
              our specialists are ready to guide you.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-mentor-line/50 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mentor-blue/10 text-mentor-blue">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-mentor-muted">
                    Email Us
                  </p>
                  <p className="font-bold text-mentor-black">
                    info@mentortpa.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-mentor-line/50 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mentor-blue/10 text-mentor-blue">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-mentor-muted">
                    Website
                  </p>
                  <p className="font-bold text-mentor-black">mentortpa.com</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <IpadFrame className="w-full !hover:transform-none">
              <MediaImage
                src={IMG.teamCollab}
                alt="Team collaborating"
                ratio="auto"
                hover={false}
                overlay="soft"
                className="h-full w-full !border-0 rounded-none bg-black"
                imgClass="object-cover"
              />
            </IpadFrame>
          </Reveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-32">
        <div className="container-edge">
          <div className="grid gap-16 lg:grid-cols-[1fr,1.5fr]">
            {/* Sidebar info */}
            <div>
              <div className="lg:sticky lg:top-[calc(var(--navbar-h)+1.5rem)] space-y-12">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-mentor-black">
                    Our Global Offices
                  </h2>
                  <div className="mt-8 space-y-6">
                    <div className="group flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mentor-surface border border-mentor-line transition-colors group-hover:border-mentor-blue/30 group-hover:bg-mentor-blue/5">
                        <MapPin className="h-6 w-6 text-mentor-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-mentor-black">
                          Headquarters
                        </h3>
                        <p className="text-mentor-muted mt-1 leading-relaxed">
                          D-35/5, Block-1, Clifton, Karachi
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mentor-surface border border-mentor-line transition-colors group-hover:border-mentor-blue/30 group-hover:bg-mentor-blue/5">
                        <Building2 className="h-6 w-6 text-mentor-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-mentor-black">
                          Regional Presence
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["UAE", "Singapore", "USA", "UK"].map((p) => (
                            <span
                              key={p}
                              className="pill px-3 py-1 bg-mentor-surface text-[10px] font-bold"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-mentor-black p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-20">
                    <Sparkles className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold">Need immediate help?</h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    Our support team is available for urgent technical inquiries
                    regarding our provider portal and member apps.
                  </p>
                  <Link
                    to="/technology"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-mentor-blue hover:underline"
                  >
                    View Tech Support <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-mentor-blue/10 via-transparent to-mentor-blue/5 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-[2.5rem] border border-mentor-line bg-white/70 backdrop-blur-md p-8 md:p-12 shadow-sm">
                <div className="mb-10 flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight text-mentor-black">
                    Send a Message
                  </h2>
                  <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-mentor-surface">
                    <MessageSquare className="h-5 w-5 text-mentor-blue" />
                  </div>
                </div>

                <FormProvider {...methods}>
                  <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        name="fullName"
                        label="Full Name"
                        placeholder="John Doe"
                        required
                      />
                      <FormField
                        name="company"
                        label="Company Name"
                        placeholder="Organization Inc."
                        required
                      />
                      <FormField
                        name="email"
                        label="Work Email"
                        type="email"
                        placeholder="john@company.com"
                        required
                      />
                      <FormField
                        name="phone"
                        label="Phone Number"
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                      <FormField
                        name="orgType"
                        label="Organization Type"
                        type="select"
                        options={ORG_TYPES}
                        required
                      />
                      <FormField
                        name="service"
                        label="Interested In"
                        type="select"
                        options={SERVICES}
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        name="jobTitle"
                        label="Job Title"
                        placeholder="e.g. HR Director"
                      />
                      <FormField
                        name="employees"
                        label="Number of Members"
                        placeholder="e.g. 500-1000"
                      />
                    </div>

                    <FormField
                      name="message"
                      label="Your Message"
                      type="textarea"
                      placeholder="How can we help your organization?"
                      required
                    />

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-mentor-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-mentor-blue hover:shadow-xl hover:shadow-mentor-blue/20 disabled:opacity-50"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Submit Inquiry"
                          )}
                          {!isSubmitting && (
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          )}
                        </span>
                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-mentor-blue to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
                      </button>
                      <p className="mt-4 text-[10px] text-mentor-muted">
                        By submitting this form, you agree to our{" "}
                        <Link to="/privacy" className="underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
