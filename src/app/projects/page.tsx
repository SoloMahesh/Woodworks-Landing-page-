import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/motion/RevealSection";
import Link from "next/link";

const allProjects = [
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
  {
    title: "Floating Cedar Shelves",
    category: "Wall Decor",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop",
    slug: "floating-cedar-shelves",
  },
  {
    title: "Hand-Carved Bed Frame",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&auto=format&fit=crop",
    slug: "hand-carved-bed-frame",
  },
  {
    title: "Ash Wood Armchair",
    category: "Seating",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop",
    slug: "ash-wood-armchair",
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-32">
      <Navbar />
      
      <RevealSection className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <span className="uppercase tracking-[0.3em] text-[10px] text-accent font-semibold mb-4 block">Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Selected Works</h1>
            <p className="text-sm md:text-base font-light text-primary/70 leading-relaxed">
              A collection of our most distinguished pieces, each reflecting our commitment to premium materials and uncompromising craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {allProjects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index} className="group overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden bg-surface-dark">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-accent mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-serif group-hover:text-accent transition-colors">{project.title}</h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest opacity-40">0{index + 1}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      <Footer />
    </main>
  );
}
