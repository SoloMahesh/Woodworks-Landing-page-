import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/motion/RevealSection";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

const { ChevronLeft, Ruler, Package, Trees } = LucideIcons;

export default async function ProjectDetails({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;

  // Mock data for individual project
  const project = {
    title: "The Walnut Dining Set",
    category: "Dining Room",
    description: "A centerpiece designed for meaningful gatherings. This set features a solid American Black Walnut table with hand-cut joinery and six matching chairs upholstered in premium linen.",
    images: [
      "https://images.unsplash.com/photo-1577145745727-42b77a1c3e29?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611075402148-09a1a9e68fe3?q=80&w=1200&auto=format&fit=crop"
    ],
    specs: {
      dimensions: "96\" L x 42\" W x 30\" H",
      materials: "Solid American Black Walnut, Natural Oil Finish",
      leadTime: "8-12 Weeks",
    }
  };

  return (
    <main className="pt-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link href="/projects" className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold opacity-60 hover:text-accent hover:opacity-100 transition-all">
          {ChevronLeft ? <ChevronLeft size={14} /> : "←"}
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <RevealSection className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-6">
            {project.images.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden bg-surface-dark">
                <img src={img} alt={project.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-accent mb-4 block font-semibold">{project.category}</span>
              <h1 className="text-4xl md:text-6xl font-serif mb-8">{project.title}</h1>
              <p className="text-sm md:text-lg font-light text-primary/70 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-primary/5">
              <div className="space-y-3">
                {Ruler ? <Ruler size={20} className="text-accent" /> : null}
                <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-60">Dimensions</h4>
                <p className="text-sm font-serif">{project.specs.dimensions}</p>
              </div>
              <div className="space-y-3">
                {Trees ? <Trees size={20} className="text-accent" /> : null}
                <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-60">Materials</h4>
                <p className="text-sm font-serif">{project.specs.materials}</p>
              </div>
              <div className="space-y-3">
                {Package ? <Package size={20} className="text-accent" /> : null}
                <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-60">Lead Time</h4>
                <p className="text-sm font-serif">{project.specs.leadTime}</p>
              </div>
            </div>

            <div className="bg-surface p-10 space-y-6">
              <h3 className="text-2xl font-serif">Inquire about this piece</h3>
              <p className="text-sm font-light text-primary/70 mb-6">
                Every piece we build can be customized to your specific requirements. Contact us to discuss your vision.
              </p>
              <Link href="/contact" className="inline-block bg-primary text-surface px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-accent transition-all w-full text-center">
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>

      <Footer />
    </main>
  );
}
