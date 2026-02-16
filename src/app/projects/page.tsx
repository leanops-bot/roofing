import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";

const projects = [
    {
        title: "Modern Standing Seam",
        location: "Tampa, FL",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1628131378822-1cb44695d73b?q=80&w=2072&auto=format&fit=crop"
    },
    {
        title: "Commercial Complex",
        location: "Miami, FL",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1635424710928-0544d852233b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Storm Restoration",
        location: "Orlando, FL",
        category: "Repair",
        image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1770&auto=format&fit=crop"
    },
    {
        title: "Luxury Tile Roof",
        location: "Sarasota, FL",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1632759929849-c16773537a67?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Warehouse Coating",
        location: "Jacksonville, FL",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Emergency Tarping",
        location: "Fort Myers, FL",
        category: "Repair",
        image: "https://images.unsplash.com/photo-1581093450065-2a6b458d2792?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen font-inter bg-bg-soft">
            <Navbar />

            <section className="pt-32 pb-20 bg-primary-navy text-white">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">Our Work</h1>
                    <p className="text-xl text-white max-w-2xl">Browse our portfolio of completed roofing projects across Florida.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group rounded-[22px] overflow-hidden bg-white shadow-card border border-white hover:-translate-y-1 transition-all duration-300">
                                <div className="h-64 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary-blue mb-2 block">{project.category}</span>
                                    <h3 className="font-bold text-xl text-primary-navy mb-1">{project.title}</h3>
                                    <p className="text-slate-500 text-sm">{project.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTABanner />
        </main>
    );
}
