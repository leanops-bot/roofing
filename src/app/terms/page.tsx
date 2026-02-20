import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-bg-soft font-inter">
            <Navbar />
            <section className="pt-32 pb-20">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-4xl font-black text-primary-navy mb-8">Terms of Service</h1>
                    <div className="prose prose-lg text-text-secondary">
                        <p>Last updated: February 2026</p>
                        <p>Please read these Terms of Service carefully before using the Apex Roofing website or services.</p>
                        <h3>Acceptance of Terms</h3>
                        <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>
                        <h3>Use of Services</h3>
                        <p>You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>
                        <h3>Intellectual Property</h3>
                        <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
