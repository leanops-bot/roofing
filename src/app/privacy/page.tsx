import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-bg-soft font-inter">
            <Navbar />
            <section className="pt-32 pb-20">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-4xl font-black text-primary-navy mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg text-text-secondary">
                        <p>Last updated: February 2026</p>
                        <p>At Apex Roofing, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safe-guard your information when you visit our website or use our services.</p>
                        <h3>Information We Collect</h3>
                        <p>We collect information you provide directly to us, such as when you fill out a form, request a quote, or contact us. This may include your name, email address, phone number, and property address.</p>
                        <h3>How We Use Your Information</h3>
                        <p>We use the information we collect to provide, maintain, and improve our services, to respond to your inquiries, and to communicate with you about your project.</p>
                        <h3>Sharing of Information</h3>
                        <p>We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
