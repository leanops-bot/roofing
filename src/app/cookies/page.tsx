import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-bg-soft font-inter">
            <Navbar />
            <section className="pt-32 pb-20">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-4xl font-black text-primary-navy mb-8">Cookie Policy</h1>
                    <div className="prose prose-lg text-text-secondary">
                        <p>Last updated: February 2026</p>
                        <p>This Cookie Policy explains how Apex Roofing uses cookies and similar technologies to recognize you when you visit our website.</p>
                        <h3>What are cookies?</h3>
                        <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                        <h3>How we use cookies</h3>
                        <p>We use cookies for the following purposes:</p>
                        <ul>
                            <li><strong>Essential cookies:</strong> These are cookies that are required for the operation of our website.</li>
                            <li><strong>Analytical/performance cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
                            <li><strong>Functionality cookies:</strong> These are used to recognize you when you return to our website.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
