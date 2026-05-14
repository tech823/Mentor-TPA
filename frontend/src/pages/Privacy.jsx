import { Eyebrow } from "../components/shared/Eyebrow";

export default function Privacy() {
    return (
        <section className="py-20 md:py-28" data-testid="privacy-page">
            <div className="container-edge max-w-3xl">
                <Eyebrow>Legal</Eyebrow>
                <h1 className="display-2 mt-5">Privacy Policy</h1>
                <p className="mt-4 text-sm text-mentor-muted">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                <div className="prose prose-sm mt-10 space-y-5 text-[15px] leading-relaxed text-mentor-ink">
                    <p>This page is a placeholder. Mentor Third-Party Administrator (TPA) is committed to protecting the privacy and security of personal and health information handled on behalf of employers, insurers, providers and members. Our formal Privacy Policy will be published here shortly.</p>
                    <h2 className="text-xl font-extrabold pt-4">Scope</h2>
                    <p>This Policy applies to information collected through the Mentor TPA website, forms, and supporting platforms. It does not override contractual privacy terms agreed with specific clients.</p>
                    <h2 className="text-xl font-extrabold pt-4">Data we collect</h2>
                    <p>Information submitted through our contact, proposal, and demo request forms — including name, organization, email, phone, and any details provided in the message field.</p>
                    <h2 className="text-xl font-extrabold pt-4">How we use it</h2>
                    <p>To respond to your request, to follow up on commercial discussions, and to improve how we communicate with potential clients and partners.</p>
                    <h2 className="text-xl font-extrabold pt-4">Contact</h2>
                    <p>For privacy queries, contact <a className="text-mentor-blue underline" href="mailto:info@mentortpa.com">info@mentortpa.com</a>.</p>
                </div>
            </div>
        </section>
    );
}
