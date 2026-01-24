import { useState } from 'react';
import patchHero from '@/assets/patchhero.jpg';
import { PreOrderForm } from './PreOrderForm';

export const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const scrollToLearnMore = () => {
    const element = document.querySelector('#why-flying');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center paper-texture overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      {/* Subtle cloud pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 20%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
                           radial-gradient(ellipse at 70% 80%, hsl(var(--secondary) / 0.2) 0%, transparent 40%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-golden-beige font-inter mb-4 animate-fade-up">
              Where nature meets intention
            </p>
            
            <h1 className="font-inter font-black uppercase tracking-[0.02em] text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-charcoal mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              For those who <br />
              <span className="font-inter" style={{ color: '#C6A275' }}>LIVE</span> <br />
              in the sky
            </h1>
            
            <p className="hero-subheadline mx-auto lg:mx-0 mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Feel better, fly stronger, and recover faster—every time you travel.
            </p>
            
            <p className="text-sm text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Pure ingredients. Elevated wellness. Designed for flight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => setShowForm(!showForm)}
                className="btn-primary"
              >
                Join the Pre-Order List
              </button>
              <button 
                onClick={scrollToLearnMore}
                className="btn-ghost group"
              >
                Learn more
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className={`mt-10 overflow-hidden transition-all duration-500 ${showForm ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <PreOrderForm variant="hero" />
            </div>
          </div>

          {/* Image Column */}
          <div className="relative order-first lg:order-last animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[4/5] md:aspect-[16/10] max-w-lg mx-auto lg:max-w-none">
              <div className="absolute -inset-10 bg-gradient-to-br from-golden-beige/5 to-sage/5 rounded-[3rem] blur-3xl opacity-60" />
              
              <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-elevated bg-sage/10">
                <img
                  src={patchHero}
                  alt="Cabin crew member with ALTESSIA wellness patch"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  style={{ 
                    filter: 'contrast(1.02) brightness(0.98) saturate(0.95)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};