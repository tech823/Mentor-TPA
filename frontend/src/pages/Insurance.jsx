import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import Counter from "../components/shared/Counter";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";

const bullets = (arr) => arr.map((x,i)=><li key={i} className="flex gap-2 text-sm text-mentor-muted"><span className="mt-2 h-1 w-1 rounded-full bg-mentor-blue flex-shrink-0" />{x}</li>);

export default function Insurance() {
    return (
        <>
            <section className="relative overflow-hidden border-b border-mentor-line mesh-hero">
                <div className="pointer-events-none absolute right-[-100px] top-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl" />
                <div className="container-edge grid gap-10 py-20 md:grid-cols-[1.15fr,1fr] md:items-end md:py-28">
                    <Reveal>
                        <Eyebrow>For Insurance Companies</Eyebrow>
                        <h1 className="display-1 mt-6 max-w-3xl">Claims and network infrastructure for insurers.</h1>
                        <p className="lead mt-6 max-w-2xl">Scale faster, reduce operational burden, and improve claims control through Mentor TPA's digital claims and provider network infrastructure.</p>
                        <div className="mt-8 flex flex-wrap gap-3"><a href="/request-proposal" className="btn-shimmer rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue" data-testid="ins-cta-integrate">Explore Integration</a><a href="/book-demo" className="rounded-full border border-mentor-black px-6 py-3.5 text-sm font-semibold transition hover:bg-mentor-black hover:text-white">Run a Pilot</a></div>
                    </Reveal>
                    <Reveal variant="right" delay={120}>
                        <MediaImage src={IMG.handshake} alt="Insurance partnership" ratio="4/3" frame overlay="blue" />
                    </Reveal>
                </div>
            </section>

            <section className="py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2">
                <Reveal><Eyebrow>The challenge</Eyebrow><h2 className="display-2 mt-5">The insurance challenge.</h2><p className="lead mt-5">Insurance companies are under growing pressure from rising claims volumes, increasing operating cost, customer dissatisfaction, and demand for faster service. Claims management is becoming an operational bottleneck.</p></Reveal>
                <Reveal delay={120}><Eyebrow>The core problem</Eyebrow><h2 className="display-2 mt-5">Traditional claims operations do not scale well.</h2><p className="lead mt-5">The conventional model depends on large internal teams, manual review, fragmented provider relationships, and slow coordination. That creates higher overhead, slower turnaround, and lower scalability.</p></Reveal>
            </div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge max-w-4xl">
                <Reveal><Eyebrow>Hidden risks</Eyebrow><h2 className="display-2 mt-5">The leakage is real.</h2></Reveal>
                <ul className="mt-8 space-y-2">{bullets(["duplicate claims","fraud patterns","inconsistent billing","low real-time visibility","weak provider coordination"])}</ul>
                <p className="mt-6 text-sm text-mentor-muted">Financial leakage does not always announce itself. It quietly accumulates in the background.</p>
            </div></section>

            <section className="py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
                <Reveal><Eyebrow>Mentor solution</Eyebrow><h2 className="display-2 mt-5">A complete claims and network infrastructure layer.</h2><p className="lead mt-5">Mentor TPA enables insurers with end-to-end claims management support, provider network access, digital workflows, and real-time operational visibility. You focus on underwriting and market growth. We strengthen execution.</p></Reveal>
                <Reveal variant="right" delay={120}><MediaImage src={IMG.analytics} alt="Claims and network analytics" ratio="4/3" overlay="soft" /></Reveal>
            </div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge">
                <Reveal><Eyebrow>What we manage</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">What we manage.</h2></Reveal>
                <div className="mt-10 grid gap-3 md:grid-cols-5">{["claims adjudication","cashless authorizations","reimbursement processing","provider coordination","member support"].map((x,i)=>(<Reveal key={i} delay={i*60}><div className="rounded-xl border border-mentor-line bg-white p-5 text-sm font-semibold h-full transition hover:border-mentor-blue hover:-translate-y-0.5">{x}</div></Reveal>))}</div>
            </div></section>

            <section className="py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2">
                <Reveal><Eyebrow>Claims processing engine</Eyebrow><h2 className="display-2 mt-5">Digital claims processing engine.</h2><ul className="mt-6 space-y-2">{bullets(["digital claim submission","structured validation workflows","faster review cycles","reduced turnaround time","better traceability across stages"])}</ul></Reveal>
                <Reveal delay={120}><Eyebrow>AI-based control layer</Eyebrow><h2 className="display-2 mt-5">AI-enabled control and validation.</h2><ul className="mt-6 space-y-2">{bullets(["duplicate claim identification","fraud detection mechanisms","image modification checks","OCR-based extraction","pricing comparison","utilization monitoring"])}</ul></Reveal>
            </div></section>

            <section className="relative overflow-hidden border-y border-mentor-line bg-mentor-black py-20 text-white md:py-28 grid-dark">
                <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(800px 420px at 15% 40%, rgba(0,72,255,0.22), transparent 60%)"}} />
                <div className="container-edge relative">
                    <Reveal>
                        <Eyebrow><span className="text-mentor-blue">Nationwide network</span></Eyebrow>
                        <h2 className="display-2 mt-5 max-w-3xl text-white">Pre-integrated provider ecosystem.</h2>
                    </Reveal>
                    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">{[["300+","hospitals"],["15,000+","doctors"],["700+","labs"],["—","pharmacy network"]].map(([n,t],i)=>(
                        <Reveal key={i} delay={i*100}>
                            <div className="glow-pill rounded-2xl border border-white/10 bg-white/[0.03] p-6 h-full transition hover:-translate-y-1 hover:border-mentor-blue/70">
                                <div className="stat-num text-white"><Counter value={n} /></div>
                                <div className="mt-2 text-sm text-white/70">{t}</div>
                            </div>
                        </Reveal>
                    ))}</div>
                    <p className="mt-6 max-w-2xl text-sm text-white/70">Mentor TPA gives insurers a ready network layer instead of requiring them to rebuild provider coordination site by site.</p>
                </div>
            </section>

            <section className="py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2">
                <Reveal><Eyebrow>Efficiency</Eyebrow><h2 className="display-2 mt-5">Lower operational burden.</h2>
                    <div className="mt-6 grid grid-cols-1 gap-3">
                        <div className="rounded-2xl border border-mentor-line p-5 transition hover:-translate-y-0.5"><div className="text-xs font-bold uppercase tracking-[0.14em] text-mentor-muted">Without a strong TPA infrastructure</div><ul className="mt-3 space-y-1.5 text-sm">{["Larger internal claims teams","More manual coordination","Higher overhead","Slower turnaround"].map(x=><li key={x}>{x}</li>)}</ul></div>
                        <div className="rounded-2xl border border-mentor-blue bg-mentor-blue/5 p-5 transition hover:-translate-y-0.5"><div className="text-xs font-bold uppercase tracking-[0.14em] text-mentor-blue">With Mentor TPA</div><ul className="mt-3 space-y-1.5 text-sm">{["Automated workflows","Centralized systems","Lower administrative burden","More scalable operations"].map(x=><li key={x}>{x}</li>)}</ul></div>
                    </div>
                </Reveal>
                <div className="space-y-8">
                    <Reveal delay={100}><Eyebrow>Scalability</Eyebrow><h2 className="display-2 mt-5">Scale claims operations without scaling cost at the same pace.</h2><p className="lead mt-5">Mentor TPA helps insurers handle growing claim volumes, enter new segments, and launch new healthcare products faster, without proportionally expanding internal claims operations.</p></Reveal>
                    <Reveal delay={200}><Eyebrow>Speed to market</Eyebrow><h2 className="display-2 mt-5">Move faster.</h2><p className="lead mt-5">Instead of building every workflow internally from scratch, insurers can use Mentor TPA infrastructure to reduce implementation time and accelerate operational readiness.</p></Reveal>
                </div>
            </div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2">
                <Reveal><Eyebrow>Customer experience</Eyebrow><h2 className="display-2 mt-5">A better policyholder experience.</h2><ul className="mt-6 space-y-2">{bullets(["faster claim approvals","smoother cashless access","structured communication","higher trust and satisfaction"])}</ul></Reveal>
                <Reveal delay={120}><Eyebrow>Cost optimization</Eyebrow><h2 className="display-2 mt-5">Better claims control supports better profitability.</h2><ul className="mt-6 space-y-2">{bullets(["lower admin cost","reduced leakage","improved billing control","better visibility into claims patterns"])}</ul></Reveal>
            </div></section>

            <section className="py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2">
                <Reveal><Eyebrow>Loss ratio improvement</Eyebrow><h2 className="display-2 mt-5">Better data. Better control. Better decisions.</h2><p className="lead mt-5">Better claims control improves operational accuracy and supports better underwriting intelligence over time.</p></Reveal>
                <Reveal delay={120}><Eyebrow>Global insurers entering Pakistan</Eyebrow><h2 className="display-2 mt-5">Ready infrastructure for insurers entering Pakistan.</h2><p className="lead mt-5">For international insurers evaluating Pakistan, Mentor TPA provides local provider network infrastructure, claims handling capability, and market-grounded operational support without requiring a full buildout from zero on day one.</p></Reveal>
            </div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge">
                <Reveal><Eyebrow>Why Mentor TPA</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Why insurers choose Mentor TPA.</h2></Reveal>
                <div className="mt-10 grid gap-3 md:grid-cols-5">{["technology-first approach","nationwide provider network","AI-enabled claims control","scalable operational model","regulated environment readiness"].map((x,i)=>(<Reveal key={i} delay={i*60}><div className="rounded-xl border border-mentor-line bg-white p-5 text-sm font-semibold h-full transition hover:border-mentor-blue hover:-translate-y-0.5">{x}</div></Reveal>))}</div>
            </div></section>

            <section className="py-20 md:py-28"><div className="container-edge">
                <Reveal><Eyebrow>Implementation</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Structured implementation model.</h2></Reveal>
                <div className="mt-10 grid gap-4 md:grid-cols-4">{["integration and onboarding","system configuration","pilot phase","full deployment"].map((s,i)=>(<Reveal key={i} delay={i*80}><div className="rounded-2xl border border-mentor-line p-6 h-full transition hover:-translate-y-1 hover:border-mentor-blue"><div className="eyebrow">Step {i+1}</div><p className="mt-3 text-sm font-semibold">{s}</p></div></Reveal>))}</div>
            </div></section>

            <CTABand eyebrow="Final CTA" headline="Transform your claims operations." subline="Explore integration or run a pilot with Mentor TPA." testId="ins-cta" />
        </>
    );
}
