import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);

    return (
        <div className="flex min-h-screen flex-col bg-white" data-testid="site-root">
            <a href="#main-content" className="skip-link">
                Skip to content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1" data-testid="site-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
