import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import Counter from "../components/shared/Counter";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";

const bullets = (arr) => arr.map((x,i)=><li key={i} className="flex gap-2 text-sm text-mentor-muted"><span className="mt-2 h-1 w-1 rounded-full bg-mentor-blue flex-shrink-0" />{x}</li>);

export default function SelfFunded() {
    return (
        <>
            <section className="relative overflow-hidden border-b border-mentor-line mesh-hero">
                <div className="pointer-events-none absolute right-[-120px] top-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl" />
                <div className="container-edge grid gap-10 py-20 md:grid-cols-[1.15fr,1fr] md:items-end md:py-28">
                    <Reveal>
                        <Eyebrow>For Self-Funded Companies</Eyebrow>
                        <h1 className="display-1 mt-6 max-w-3xl">Take control of your healthcare costs.</h1>
                        <p className="lead mt-6 max-w-2xl">Mentor TPA turns self-funded healthcare into a structured, digital, and controllable system, helping companies reduce cost, improve visibility, and create a better employee experience.</p>
                        <a href="/request-proposal" data-testid="sf-cta-hero" className="btn-shimmer mt-8 inline-flex items-center rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue">Request a Cost Assessment</a>
                    </Reveal>
                    <Reveal variant="right" delay={120}>
                        <MediaImage src={IMG.corporateMeeting} alt="Corporate HR and finance meeting" ratio="4/3" frame overlay="soft" />
                    </Reveal>
                </div>
            </section>

            <section className="py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2">
                <Reveal><Eyebrow>The problem</Eyebrow><h2 className="display-2 mt-5">The problem with corporate healthcare today.</h2><p className="lead mt-5">Most companies are spending more on healthcare every year while seeing less control, less visibility, and more employee dissatisfaction. Insurance models increase cost over time. Reimbursement models create friction, delays, and HR burden. In both cases, healthcare is treated like an expense line, not a system.</p></Reveal>
                <Reveal variant="right" delay={120}><ul className="space-y-3 rounded-2xl border border-mentor-line p-8">{bullets(["rising healthcare costs","no cost visibility","no control over spending","heavy HR involvement","weak claims oversight","poor employee experience"])}</ul></Reveal>
            </div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge">
                <Reveal className="max-w-3xl"><Eyebrow>Why current models fail</Eyebrow><h2 className="display-2 mt-5">Current healthcare models are broken.</h2></Reveal>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <Reveal><div className="rounded-2xl border border-mentor-line bg-white p-7 h-full transition hover:-translate-y-1 hover:border-mentor-black"><div className="text-xl font-extrabold">Insurance model</div><ul className="mt-4 space-y-2">{bullets(["fixed premium model","limited control over usage","annual cost increases","weak operational visibility"])}</ul></div></Reveal>
                    <Reveal delay={120}><div className="rounded-2xl border border-mentor-line bg-white p-7 h-full transition hover:-translate-y-1 hover:border-mentor-black"><div className="text-xl font-extrabold">Reimbursement model</div><ul className="mt-4 space-y-2">{bullets(["employee pays upfront","manual claims","slow reimbursement","operational burden on HR"])}</ul></div></Reveal>
                </div>
                <p className="mt-8 text-sm text-mentor-muted">The result is high cost, low efficiency, and a poor employee experience.</p>
            </div></section>

            <section className="py-20 md:py-28"><div className="container-edge max-w-4xl">
                <Reveal><Eyebrow>Hidden cost problem</Eyebrow><h2 className="display-2 mt-5">What you do not see is costing you money.</h2><p className="lead mt-5">The real problem is not just healthcare spend. The real problem is unmanaged spend.</p></Reveal>
                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{["overbilling","no negotiated rates","fraud and leakage","unnecessary utilization"].map((x,i)=>(<Reveal key={i} delay={i*70}><div className="card-hard tilt-card p-6 h-full"><div className="eyebrow">0{i+1}</div><div className="mt-3 text-base font-extrabold">{x}</div></div></Reveal>))}</div>
                <p className="mt-8 text-sm text-mentor-muted">You may be paying far more than you should, without ever seeing the full picture.</p>
            </div></section>

            <section className="relative overflow-hidden border-y border-mentor-line bg-mentor-black py-20 text-white md:py-28 grid-dark">
                <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(700px 400px at 90% 50%, rgba(0,72,255,0.22), transparent 60%)"}} />
                <div className="container-edge relative max-w-4xl">
                    <Reveal>
                        <Eyebrow><span className="text-mentor-blue">Mentor solution</span></Eyebrow>
                        <h2 className="display-2 mt-5 text-white">Mentor TPA converts self-funded healthcare into a managed system.</h2>
                        <p className="lead mt-5" style={{color:"rgba(255,255,255,0.75)"}}>We provide the infrastructure that self-funded healthcare usually lacks:</p>
                        <div className="mt-8 grid gap-3 md:grid-cols-5">{["provider network","claims control","cashless access","digital administration","real-time visibility"].map((x,i)=>(<Reveal key={i} delay={i*60}><div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold h-full transition hover:border-mentor-blue hover:bg-white/[0.08]">{x}</div></Reveal>))}</div>
                    </Reveal>
                </div>
            </section>

            <section className="py-20 md:py-28"><div className="container-edge">
                <Reveal><Eyebrow>How it works</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">How it works.</h2></Reveal>
                <div className="mt-10 grid gap-4 md:grid-cols-4">{[["Step 1","Employees access network hospitals, clinics, labs, and pharmacies"],["Step 2","Treatment is delivered through a structured cashless workflow where applicable"],["Step 3","Mentor validates claims, coordinates providers, and applies control mechanisms"],["Step 4","Your company pays for actual usage, not inflated assumptions"]].map(([s,t],i)=>(<Reveal key={i} delay={i*90}><div className="rounded-2xl border border-mentor-line p-6 h-full transition hover:-translate-y-1 hover:border-mentor-blue"><div className="eyebrow">{s}</div><p className="mt-3 text-sm font-semibold">{t}</p></div></Reveal>))}</div>
                <p className="mt-6 text-sm font-semibold">Simple. Controlled. Transparent.</p>
            </div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2 md:items-center">
                <Reveal><Eyebrow>Network advantage</Eyebrow><h2 className="display-2 mt-5">The network advantage.</h2><p className="lead mt-5">Access to a structured network helps you move away from uncontrolled healthcare spending.</p></Reveal>
                <div className="grid grid-cols-2 gap-3">{[["300+","hospitals"],["15,000+","doctors"],["700+","labs"],["—","pharmacy network"]].map(([n,t],i)=>(
                    <Reveal key={i} delay={i*80}><div className="rounded-2xl border border-mentor-line bg-white p-6 h-full transition hover:-translate-y-1 hover:border-mentor-blue"><div className="stat-num text-mentor-blue"><Counter value={n} /></div><div className="mt-2 text-sm text-mentor-muted">{t}</div></div></Reveal>
                ))}</div>
            </div><p className="container-edge mx-auto mt-6 text-sm text-mentor-muted">Pre-negotiated pricing across participating providers.</p></section>

            <section className="py-20 md:py-28"><div className="container-edge">
                <Reveal><Eyebrow>How we control cost</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">How we control cost.</h2></Reveal>
                <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{["negotiated provider rates","AI-based claim validation","fraud detection","utilization tracking","structured healthcare workflows","every rupee tracked with greater visibility"].map((x,i)=>(<Reveal key={i} delay={i*60}><div className="rounded-xl border border-mentor-line p-5 text-sm font-semibold h-full transition hover:border-mentor-blue hover:bg-mentor-blue/[0.03]">{x}</div></Reveal>))}</div>
            </div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2">
                <Reveal><Eyebrow>Digital experience</Eyebrow><h2 className="display-2 mt-5">No paperwork. No delays. No chaos.</h2><p className="lead mt-5">Mentor TPA digitizes the experience for both employers and employees.</p><div className="mt-8"><MediaImage src={IMG.doctorTablet} alt="Digital clinician workflow" ratio="16/9" rounded="rounded-2xl" overlay="soft" /></div></Reveal>
                <Reveal variant="right" delay={120}><ul className="space-y-2 rounded-2xl border border-mentor-line bg-white p-8">{bullets(["digital claims","mobile access","real-time claim tracking","cashless treatment flows","centralized user profiles","dashboard-based visibility"])}</ul></Reveal>
            </div></section>

            <section className="py-20 md:py-28"><div className="container-edge grid gap-10 md:grid-cols-2">
                <Reveal><Eyebrow>HR and finance relief</Eyebrow><h2 className="display-2 mt-5">Your HR team should not be running a healthcare operation.</h2><p className="lead mt-5">We handle claims processing, provider coordination, employee healthcare queries, and structured workflows so your HR and finance teams can focus on decision-making instead of operational firefighting.</p></Reveal>
                <Reveal delay={120}><Eyebrow>Employee experience</Eyebrow><h2 className="display-2 mt-5">A better healthcare journey for employees.</h2><div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-mentor-line p-5 transition hover:-translate-y-0.5"><div className="text-xs font-bold uppercase tracking-[0.14em] text-mentor-muted">Before</div><ul className="mt-3 space-y-1.5 text-sm">{["Pay upfront","Submit paperwork","Wait for reimbursement","Stay stressed"].map(x=><li key={x}>{x}</li>)}</ul></div><div className="rounded-2xl border border-mentor-blue bg-mentor-blue/5 p-5 transition hover:-translate-y-0.5"><div className="text-xs font-bold uppercase tracking-[0.14em] text-mentor-blue">After</div><ul className="mt-3 space-y-1.5 text-sm">{["Walk in","Get treated","Track digitally","Move through a smoother experience"].map(x=><li key={x}>{x}</li>)}</ul></div></div></Reveal>
            </div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge">
                <Reveal><Eyebrow>Real-time visibility</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Finally see where your healthcare money goes.</h2></Reveal>
                <div className="mt-10 grid gap-3 md:grid-cols-5">{["department-wise spending","utilization by employee group","major cost drivers","claim categories","emerging patterns and trends"].map((x,i)=>(<Reveal key={i} delay={i*60}><div className="rounded-xl border border-mentor-line bg-white p-5 text-sm font-semibold h-full transition hover:border-mentor-blue">{x}</div></Reveal>))}</div>
            </div></section>

            <section className="py-20 md:py-28"><div className="container-edge max-w-4xl">
                <Reveal><Eyebrow>Cost saving impact</Eyebrow><h2 className="display-2 mt-5">Typical cost impact.</h2><p className="lead mt-5">Companies can typically improve healthcare cost efficiency through negotiated pricing, fraud control, and smarter utilization management.</p><p className="mt-4 text-sm text-mentor-muted">The opportunity is not just cost reduction. It is cost predictability, administrative control, and a stronger employee value proposition.</p></Reveal>
            </div></section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"><div className="container-edge">
                <Reveal><Eyebrow>Best fit companies</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Who this solution is best for.</h2></Reveal>
                <ul className="mt-8 grid gap-2 md:grid-cols-2">{bullets(["organizations with 200+ employees","companies with rising healthcare spend","employers seeking cost visibility","companies frustrated by reimbursement chaos","organizations ready for a more structured healthcare system"])}</ul>
            </div></section>

            <section className="py-20 md:py-28"><div className="container-edge">
                <Reveal><Eyebrow>Implementation</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Fast implementation.</h2></Reveal>
                <div className="mt-10 grid gap-4 md:grid-cols-4">{["client onboarding","employee enrollment","system setup and configuration","go-live support"].map((s,i)=>(<Reveal key={i} delay={i*80}><div className="rounded-2xl border border-mentor-line p-6 h-full transition hover:-translate-y-1 hover:border-mentor-blue"><div className="eyebrow">Step {i+1}</div><p className="mt-3 text-sm font-semibold">{s}</p></div></Reveal>))}</div>
                <p className="mt-6 text-sm text-mentor-muted">Typical implementation timeline, 2 to 4 weeks, depending on scope and integration requirements.</p>
            </div></section>

            <CTABand eyebrow="Final CTA" headline="Let us evaluate your current healthcare cost structure." subline="Request a cost assessment or book a demo to see Mentor TPA in action." testId="sf-cta" />
        </>
    );
}
