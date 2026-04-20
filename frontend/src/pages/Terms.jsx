import { Eyebrow } from "../components/shared/Eyebrow";

export default function Terms() {
    return (
        <section className="py-20 md:py-28" data-testid="terms-page">
            <div className="container-edge max-w-3xl">
                <Eyebrow>Legal</Eyebrow>
                <h1 className="display-2 mt-5">Terms of Use</h1>
                <p className="mt-4 text-sm text-mentor-muted">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                <div className="prose prose-sm mt-10 space-y-5 text-[15px] leading-relaxed text-mentor-ink">
                    <p>This page is a placeholder. Formal Terms of Use governing access to the Mentor TPA website and associated services will be published here.</p>
                    <h2 className="text-xl font-extrabold pt-4">Use of this website</h2>
                    <p>The Mentor TPA website is provided for informational and commercial-inquiry purposes. Content is not medical advice and is not a substitute for a clinical consultation.</p>
                    <h2 className="text-xl font-extrabold pt-4">Intellectual property</h2>
                    <p>The Mentor TPA name, logo, and platform content are the property of Mentor TPA and may not be reused without permission.</p>
                    <h2 className="text-xl font-extrabold pt-4">Contact</h2>
                    <p>Questions about these terms can be directed to <a className="text-mentor-blue underline" href="mailto:info@mentortpa.com">info@mentortpa.com</a>.</p>
                </div>
            </div>
        </section>
    );
}
