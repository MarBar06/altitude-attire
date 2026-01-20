import { useEffect, useRef } from 'react';
import patchCirculation from '@/assets/patch-circulation.jpg';
import patchHydration from '@/assets/patch-hydration.jpg';
import patchDigestion from '@/assets/patch-digestion.jpg';
import patchSleep from '@/assets/patch-sleep.jpg';

const products = [
  {
    name: 'Circulation Support Patch',
    description: 'Supports healthy blood flow and reduces feelings of heaviness and swelling during long flights and extended standing.',
    image: patchCirculation,
  },
  {
    name: 'Hydration + Electrolyte Patch',
    description: 'Designed to help maintain hydration balance during travel in low-humidity environments.',
    image: patchHydration,
  },
  {
    name: 'Digestion Support Patch',
    description: 'Created to support digestive comfort during changes in routine, pressure, and travel schedules.',
    image: patchDigestion,
  },
  {
    name: 'Sleep Support Patch',
    description: 'Formulated to support relaxation and circadian rhythm adjustment to improve rest across time zones.',
    image: patchSleep,
  },
];

export const CollectionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToJoin = () => {
    const element = document.querySelector('#join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="patches" ref={sectionRef} className="section-container bg-muted/20 paper-texture">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="micro-trust mb-4 reveal">The Collection</p>
          <h2 className="section-heading reveal">
            Designed for life at altitude.
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="product-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {product.description}
                </p>
                <button 
                  onClick={scrollToJoin}
                  className="btn-secondary text-xs"
                >
                  Join pre-order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 reveal">
          <p className="text-muted-foreground text-sm md:text-base">
            Each patch is designed to be used independently or combined depending on your flight needs.
          </p>
        </div>
      </div>
    </section>
  );
};
