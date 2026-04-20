import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import SolutionsOverview from "./pages/SolutionsOverview";
import SelfFunded from "./pages/SelfFunded";
import Insurance from "./pages/Insurance";
import Providers from "./pages/Providers";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import ProviderNetwork from "./pages/ProviderNetwork";
import HospitalPanel from "./pages/HospitalPanel";
import RequestProposal from "./pages/RequestProposal";
import BookDemo from "./pages/BookDemo";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Toaster position="top-right" richColors closeButton />
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
            </BrowserRouter>
        </div>
    );
}

export default App;
