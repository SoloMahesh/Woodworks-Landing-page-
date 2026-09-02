import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/motion/RevealSection";

export default function AboutPage() {
  return (
    <main className="pt-32">
      <Navbar />
      
      <RevealSection className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
            <div className="flex-1 space-y-8">
              <span className="uppercase tracking-[0.3em] text-[10px] text-accent font-semibold mb-4 block">Our Story</span>
              <h1 className="text-5xl md:text-7xl font-serif">A legacy of <br /> hands and <br /> heart.</h1>
              <p className="text-sm md:text-lg font-light text-primary/70 leading-relaxed">
                Founded in 2012, Woodwork Studio began as a small workshop with a single lathe and a deep-seated belief: that the objects we surround ourselves with should be as enduring as the trees they came from.
              </p>
              <p className="text-sm md:text-lg font-light text-primary/70 leading-relaxed">
                Today, our studio is a sanctuary for traditional craftsmanship and modern design. We&apos;ve stayed true to our roots, prioritizing quality over quantity and soul over speed.
              </p>
            </div>
            <div className="flex-1">
              <div className="aspect-[4/5] bg-surface-dark overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1555505019-8c3f4c19e309?q=80&w=1000&auto=format&fit=crop" 
                  alt="Our Founder" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute bottom-8 -left-8 bg-accent p-8 text-surface max-w-xs hidden md:block">
                  <p className="text-xs uppercase tracking-widest font-bold mb-2">The Philosophy</p>
                  <p className="text-lg font-serif italic">&quot;Wood is a living medium. To work it is to enter into a dialogue with nature itself.&quot;</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-primary/5 pt-24">
            <div>
              <h3 className="text-2xl font-serif mb-6">Sustainable Sourcing</h3>
              <p className="text-sm font-light text-primary/70 leading-relaxed">
                We exclusively use timber from certified sustainable forests and reclaimed sources. Every piece we create is an investment in the future of our planet.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6">Traditional Methods</h3>
              <p className="text-sm font-light text-primary/70 leading-relaxed">
                While we embrace modern precision tools, our hearts remain in hand-cut dovetails, mortise and tenon joints, and hand-rubbed oil finishes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6">Bespoke Design</h3>
              <p className="text-sm font-light text-primary/70 leading-relaxed">
                No two projects are identical. We work closely with our clients to ensure that every dimension, wood grain, and hardware choice reflects their unique vision.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <Footer />
    </main>
  );
}
