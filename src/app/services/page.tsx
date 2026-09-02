import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/motion/RevealSection";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

const { Hammer, Ruler, PenTool, Sparkles, Check } = LucideIcons;

const serviceDetails = [
  {
    title: "Bespoke Furniture",
    description: "From statement dining tables to custom-fitted shelving units, we design and build furniture that fits your space perfectly. Every piece starts with a conversation and ends with a masterpiece.",
    features: ["Custom wood selection", "Tailored dimensions", "Premium hardware", "Lifetime warranty"],
    icon: PenTool ? <PenTool className="text-accent" size={40} /> : null,
    image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Architectural Millwork",
    description: "We collaborate with architects and interior designers to create seamless, high-end wooden elements for residential and commercial spaces.",
    features: ["Built-in cabinetry", "Wall paneling", "Staircases", "Ceiling treatments"],
    icon: Ruler ? <Ruler className="text-accent" size={40} /> : null,
    image: "https://images.unsplash.com/photo-1558211583-d28f972752e1?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Handcrafted Heirloom Restoration",
    description: "Breathe new life into your cherished antiques. We use period-correct techniques and materials to restore structural integrity while preserving character.",
    features: ["Surface refinishing", "Joint repair", "Veneer replacement", "Hardware sourcing"],
    icon: Sparkles ? <Sparkles className="text-accent" size={40} /> : null,
    image: "https://images.unsplash.com/photo-1622391038550-93437731f2f0?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <Navbar />
      
      <RevealSection className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <span className="uppercase tracking-[0.3em] text-[10px] text-accent font-semibold mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Crafting solutions for modern living.</h1>
            <p className="text-sm md:text-lg font-light text-primary/70 leading-relaxed">
              We offer a range of specialized woodworking services, each grounded in traditional techniques and executed with contemporary vision.
            </p>
          </div>

          <div className="space-y-32">
            {serviceDetails.map((service, index) => (
              <div key={index} className={`flex flex-col gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
                <div className="flex-1 space-y-8">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl md:text-5xl font-serif">{service.title}</h2>
                  <p className="text-sm md:text-base font-light text-primary/70 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-xs uppercase tracking-widest font-semibold opacity-80">
                        {Check ? <Check size={14} className="text-accent" /> : "✓"}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href="/contact" className="inline-block bg-primary text-surface px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-all">
                      Request Quote
                    </Link>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[16/10] overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <Footer />
    </main>
  );
}
