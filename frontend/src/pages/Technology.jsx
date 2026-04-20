import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";

const bullets = (arr) => arr.map((x,i)=><li key={i} className="flex gap-2 text-sm text-mentor-muted"><span className="mt-2 h-1 w-1 rounded-full bg-mentor-blue flex-shrink-0" />{x}</li>);

export default function Technology() {
    return (
        <>
            <section className="border-b border-mentor-line"><div className="container-edge py-20 md:py-28"><Eyebrow>Technology</Eyebrow><h1 className="display-1 mt-6 max-w-4xl">Built on digital healthcare infrastructure.</h1><p className="lead mt-6 max-w-2xl">Mentor TPA is being built as a secure, scalable, and intelligence-enabled healthcare administration platform for employers, insurers, providers, and members.</p></div></section>

            <section className="py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2">
                <div><Eyebrow>Digital capabilities</Eyebrow><h2 className="display-2 mt-5">Digital capabilities that reduce friction.</h2><ul className="mt-6 space-y-2">{bullets(["digital claims submission and tracking","QR-based patient verification","centralized user profiles","dashboard reporting","cloud-based operational workflows","structured healthcare coordination"])}</ul></div>
                <div><Eyebrow>Claims intelligence</Eyebrow><h2 className="display-2 mt-5">AI-enabled claims control.</h2><p className="lead mt-5">Mentor TPA is designed to strengthen healthcare claims control through automated claim validation, OCR, duplicate detection, price comparison, anomaly flags, and data-driven claim workflows.</p><ul className="mt-6 space-y-2">{bullets(["duplicate claim matching","document modification checks","OCR-based extraction","pricing validation","utilization analytics","fraud detection support"])}</ul></div>
            </div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge"><Eyebrow>Infrastructure</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Secure and scalable technology infrastructure.</h2><ul className="mt-10 grid gap-3 md:grid-cols-5">{["secure cloud-based systems","encrypted communication","scalable architecture","multi-stakeholder integration capability","reliability and security focus"].map(x=>(<li key={x} className="rounded-xl border border-mentor-line bg-white p-5 text-sm font-semibold">{x}</li>))}</ul></div></section>

            <section className="border-y border-mentor-line bg-mentor-black py-20 text-white md:py-28"><div className="container-edge max-w-4xl"><Eyebrow><span className="text-mentor-blue">Why this matters</span></Eyebrow><h2 className="display-2 mt-5 text-white">Technology is no longer optional in healthcare administration.</h2><p className="lead mt-5 text-white/75" style={{color:"rgba(255,255,255,0.75)"}}>Healthcare administration today demands more than manpower. It requires data visibility, process control, fraud resistance, and scalable execution. Technology is the only sensible way to do that without drowning in operational sprawl. Healthcare admin run on spreadsheets is not strategy. It is just organized panic.</p></div></section>

            <CTABand eyebrow="Final CTA" headline="See Mentor TPA technology in action." subline="Book a demo or talk to our team." testId="tech-cta" />
        </>
    );
}
