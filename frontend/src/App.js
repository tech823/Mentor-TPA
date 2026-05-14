import "@/App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./components/layout/Layout";

const Home            = lazy(() => import("./pages/Home"));
const About           = lazy(() => import("./pages/About"));
const SolutionsOverview = lazy(() => import("./pages/SolutionsOverview"));
const SelfFunded      = lazy(() => import("./pages/SelfFunded"));
const Insurance       = lazy(() => import("./pages/Insurance"));
const Providers       = lazy(() => import("./pages/Providers"));
const Services        = lazy(() => import("./pages/Services"));
const Technology      = lazy(() => import("./pages/Technology"));
const ProviderNetwork = lazy(() => import("./pages/ProviderNetwork"));
const HospitalPanel   = lazy(() => import("./pages/HospitalPanel"));
const RequestProposal = lazy(() => import("./pages/RequestProposal"));
const BookDemo        = lazy(() => import("./pages/BookDemo"));
const Contact         = lazy(() => import("./pages/Contact"));
const Privacy         = lazy(() => import("./pages/Privacy"));
const Terms           = lazy(() => import("./pages/Terms"));

const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true">
        <div className="h-8 w-8 rounded-full border-2 border-mentor-blue border-t-transparent animate-spin" />
    </div>
);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Toaster position="top-right" richColors closeButton />
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/solutions" element={<SolutionsOverview />} />
                            <Route path="/solutions/self-funded" element={<SelfFunded />} />
                            <Route path="/solutions/insurance" element={<Insurance />} />
                            <Route path="/solutions/providers" element={<Providers />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/technology" element={<Technology />} />
                            <Route path="/provider-network" element={<ProviderNetwork />} />
                            <Route path="/hospital-panel" element={<HospitalPanel />} />
                            <Route path="/request-proposal" element={<RequestProposal />} />
                            <Route path="/book-demo" element={<BookDemo />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/privacy" element={<Privacy />} />
                            <Route path="/terms" element={<Terms />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
