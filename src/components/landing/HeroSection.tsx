import { useEffect, useRef } from 'react';
import { PreOrderForm } from './PreOrderForm';
import heroImage from '@/assets/Cabincrew4.png';

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      heroRef.current?.classList.add('visible');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-ivory opacity-0 transition-opacity duration-1000 [&.visible]:opacity-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Column */}
          <div className="flex flex-col space-y-8 z-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-golden-beige font-black animate-fade-in">
                Redefining In-Flight Wellness
              </p>
              <h1 className="text-5xl md:text-7xl font-inter font-black uppercase tracking-tighter text-charcoal leading-[0.9] animate-slide-up">
                Arrive <br />
                <span className="italic-emphasis italic">Refreshed</span>
              </h1>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-md font-medium leading-relaxed animate-slide-up [animation-delay:200ms]">
                Experience the first clinical-grade wellness patches designed specifically for the modern traveler.
              </p>
            </div>

            <div className="w-full max-w-md animate-slide-up [animation-delay:400ms]">
              <PreOrderForm variant="hero" />
            </div>
          </div>

          {/* Image Column */}
          <div className="relative h-[500px] lg:h-[700px] w-full animate-fade-in [animation-delay:600ms]">
            <div className="absolute inset-0 bg-sage/5 rounded-2xl transform rotate-3 scale-95" />
            <img 
              src={heroImage} 
              alt="Altessia Wellness Experience" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};