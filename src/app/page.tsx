import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { RevealSection } from "@/components/motion/RevealSection";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

const { Hammer, Ruler, PenTool, Sparkles } = LucideIcons;

const services = [
  {
    title: "Custom Furniture",
    description: "One-of-a-kind pieces tailored to your specific space and lifestyle needs.",
    icon: PenTool ? <PenTool className="text-accent" size={32} /> : null,
  },
  {
    title: "Precision Joinery",
    description: "Traditional woodworking techniques meeting modern architectural demands.",
    icon: Hammer ? <Hammer className="text-accent" size={32} /> : null,
  },
  {
    title: "Interior Millwork",
    description: "Elevating interiors with custom cabinetry, shelving, and wall treatments.",
    icon: Ruler ? <Ruler className="text-accent" size={32} /> : null,
  },
  {
    title: "Restoration",
    description: "Preserving the legacy of heirloom pieces with expert care and attention.",
    icon: Sparkles ? <Sparkles className="text-accent" size={32} /> : null,
  },
];

const featuredProjects = [
  {
    title: "The Walnut Dining Set",
    category: "Dining Room",
    image: "https://images.unsplash.com/photo-1577145745727-42b77a1c3e29?q=80&w=800&auto=format&fit=crop",
    slug: "walnut-dining-set",
  },
  {
    title: "Minimalist Oak Desk",
    category: "Workspace",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
    slug: "minimalist-oak-desk",
  },
  {
    title: "Artisanal Coffee Table",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
    slug: "artisanal-coffee-table",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <RevealSection className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.3em] text-[10px] text-accent font-semibold mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif">Curated Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, index) => (
              <div key={index} className="space-y-6 group">
                <div className="mb-8 transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif">{service.title}</h3>
                <p className="text-sm font-light text-primary/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Featured Projects */}
      <RevealSection className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="uppercase tracking-[0.3em] text-[10px] text-accent font-semibold mb-4 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif">Featured Creations</h2>
            </div>
            <Link href="/projects" className="text-xs uppercase tracking-widest border-b border-primary py-1 hover:text-accent hover:border-accent transition-colors">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index} className="group overflow-hidden relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="mt-6">
                  <span className="text-[10px] uppercase tracking-widest text-accent mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-serif group-hover:text-accent transition-colors">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Craftsmanship / About Snippet */}
      <RevealSection className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="aspect-square bg-accent/10 absolute -top-8 -left-8 w-full h-full -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1581417478175-a9ef18f210c1?q=80&w=1000&auto=format&fit=crop" 
              alt="Craftsmanship" 
              className="w-full h-auto grayscale-[0.2]"
            />
          </div>
          <div className="flex-1 space-y-8">
            <span className="uppercase tracking-[0.3em] text-[10px] text-accent font-semibold block">The Workshop</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Meticulous Detail, <br /> Timeless Soul.</h2>
            <p className="text-sm md:text-base font-light text-primary/70 leading-relaxed">
              Every curve, every joint, and every finish is executed with surgical precision and artistic intuition. We believe that true luxury lies in the unseen details—the structural integrity that lasts generations.
            </p>
            <p className="text-sm md:text-base font-light text-primary/70 leading-relaxed">
              We source only the finest sustainable hardwoods, ensuring that each piece of furniture is not only beautiful but also respectful of the environment.
            </p>
            <Link href="/about" className="inline-block bg-primary text-surface px-10 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-all">
              Learn Our Process
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* CTA Section */}
      <RevealSection className="py-32 px-6 bg-primary text-surface text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif">Have a vision in mind?</h2>
          <p className="text-sm md:text-lg font-light opacity-80 leading-relaxed">
            Let&apos;s collaborate to bring your dream space to life. Our consultations are a journey of discovery and design.
          </p>
          <Link href="/contact" className="inline-block border border-surface/30 text-surface px-12 py-5 text-xs uppercase tracking-widest font-semibold hover:bg-surface hover:text-primary transition-all">
            Start Your Project
          </Link>
        </div>
      </RevealSection>

      <Footer />
    </main>
  );
}
