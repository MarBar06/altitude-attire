import { useEffect, useRef, useState } from 'react';
import { Zap, Waves, Wind, ShieldCheck, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
// Importación de tus assets
import patch1 from '@/assets/patch1.png';
import patch2 from '@/assets/patch2.png';
import patch3 from '@/assets/patch3.png';
import patch4 from '@/assets/patch4.png';
import patch5 from '@/assets/patch5.png';

const products = [
  {
    id: 'calm',
    name: 'CALM & FOCUS',
    subtitle: 'Peak Performance Patch',
    description: 'Maintain calm, focus, and emotional control during peak service hours.',
    usage: 'Before service or during peak',
    compatibility: ['Flight Approved', 'Skin Friendly'],
    icon: <Zap size={24} strokeWidth={1.5} />,
    color: '#E5C896',
    image: patch2,
  },
  {
    id: 'fatigue',
    name: 'ANTI-FATIGUE LEGS',
    subtitle: 'Circulation & Recovery',
    description: 'Supports leg relief, venous return, and recovery for heavy-duty days.',
    usage: 'Post-flight, destination rest',
    compatibility: ['Daily Wear', 'Travel Safe'],
    icon: <Waves size={24} strokeWidth={1.5} />,
    color: '#A3AD9F',
    image: patch1,
  },
  {
    id: 'bloating',
    name: 'BLOATING & DIGEST COMFORT',
    subtitle: 'Abdominal Relief',
    description: 'Alleviate feelings of bloating and abdominal tension from air pressure.',
    usage: 'Post-meal, after landing',
    compatibility: ['Fast Acting', 'Natural'],
    icon: <Wind size={24} strokeWidth={1.5} />,
    color: '#D4AF37',
    image: patch4,
  },
  {
    id: 'skin',
    name: 'SKIN BARRIER',
    subtitle: 'Cabin Defense',
    description: 'Protect and support your skin barrier against dry, recycled cabin air.',
    usage: 'During long-haul flights',
    compatibility: ['Moisturizing', 'Invisible'],
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    color: '#8A9AAB',
    image: patch3,
  },
  {
    id: 'jetlag',
    name: 'JET LAG RESTORED',
    subtitle: 'Circadian Reset',
    description: 'Deep circadian adjustment to support sleep and rapid time-zone adaptation.',
    usage: 'Night at destination',
    compatibility: ['Night Use Only', 'Sleep Support'],
    icon: <Moon size={24} strokeWidth={1.5} />,
    color: '#F5E6BE',
    image: patch5,
  },
];

export const CollectionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Lógica para detectar si se puede scrollear
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    
    checkScroll(); // Chequeo inicial
    window.addEventListener('resize', checkScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <section id="altessia-wellness-patches" ref={sectionRef} className="section-container bg-[#FDFCFB] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Estilo "Gratis" */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-golden-beige font-inter mb-4 reveal">
            The Essentials Collection
          </p>
          <h2 className="text-4xl md:text-6xl font-inter font-black uppercase tracking-tighter text-charcoal mb-8 reveal">
            Wellness, delivered <span style={{ color: '#C6A275' }}>differently.</span>
          </h2>
          <div className="text-charcoal/70 font-inter text-sm md:text-base leading-relaxed max-w-2xl mx-auto reveal">
            <p className="mb-4">
              Designed for the modern traveler. Transdermal technology that works with your body's rhythm in flight.
            </p>
            <p className="font-black uppercase tracking-widest text-[#4A5D4E] text-xs">
              — Discover our patches —
            </p>
          </div>
        </div>

        {/* Carrusel con Controles Forzados */}
        <div className="relative mt-12 px-2 md:px-12">
          
          {/* Flecha Izquierda */}
          <button 
            onClick={() => scroll('left')}
            className={`absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-50 bg-white shadow-xl p-4 rounded-full border border-sage/20 transition-all hover:scale-110 flex items-center justify-center text-charcoal ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Flecha Derecha */}
          <button 
            onClick={() => scroll('right')}
            className={`absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-50 bg-white shadow-xl p-4 rounded-full border border-sage/20 transition-all hover:scale-110 flex items-center justify-center text-charcoal ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronRight size={28} />
          </button>

          {/* Contenedor de Scroll */}
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-6 pb-12 hide-scrollbar snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="reveal flex-none w-[85vw] md:w-[380px] snap-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-md border border-sage/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  
                  {/* Image Area con Glow */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <div 
                      className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at center, ${product.color}, transparent)` }}
                    />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-full shadow-lg text-charcoal">
                      {product.icon}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="font-inter font-black text-xl tracking-tighter text-charcoal uppercase leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-[10px] tracking-[0.15em] text-golden-beige font-bold uppercase mt-1">
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-charcoal/80 leading-relaxed mb-8 min-h-[4.5rem] italic">
                      "{product.description}"
                    </p>

                    <div className="space-y-4 pt-6 border-t border-sage/10">
                      <div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-[#C6A275] block mb-1">Optimal Use</span>
                        <p className="text-xs text-charcoal/70 font-inter">{product.usage}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.compatibility.map((tag, i) => (
                          <span key={i} className="text-[9px] uppercase font-bold tracking-tighter bg-sage/5 px-2 py-1 rounded text-[#4A5D4E] border border-sage/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Indicator */}
        <div className="md:hidden text-center mt-4">
           <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-charcoal/30">Slide to explore</span>
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-[11px] text-muted-foreground/40 italic font-inter uppercase tracking-widest">
            Non-habit forming • 100% Drug-free • TSA Compliant
          </p>
        </div>
      </div>
    </section>
  );
};