import { useState } from 'react';
import patchHero from '@/assets/patch-hero.jpg';
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
    <section className="relative min-h-screen flex items-center paper-texture">
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

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow - uppercase, letter-spaced, golden beige */}
            <p className="text-xs uppercase tracking-[0.2em] text-golden-beige font-sans mb-4 animate-fade-up">
              Where nature meets intention
            </p>
            
            <h1 className="hero-headline mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              For those who live<br />in the sky.
            </h1>
            
            <p className="hero-subheadline mx-auto lg:mx-0 mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Feel better, fly stronger, and recover faster—every time you travel.
            </p>
            
            <p className="text-sm text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Pure ingredients. Elevated wellness. Designed for flight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400">
              <button 
                onClick={() => setShowForm(!showForm)}
                className="btn-primary"
              >
                Join the Pre-Order List
              </button>
              <button 
                onClick={scrollToLearnMore}
                className="btn-ghost"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Form reveal */}
            <div className={`mt-10 overflow-hidden transition-all duration-500 ${showForm ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <PreOrderForm variant="hero" />
            </div>
          </div>

          {/* Hero Image - Editorial lifestyle photograph */}
          <div className="relative order-first lg:order-last animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[16/10] max-w-lg mx-auto lg:max-w-none">
              {/* Subtle decorative glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-golden-beige/10 to-sage/10 rounded-[2rem] blur-3xl" />
              
              {/* Main editorial image */}
              <img
                src={patchHero}
                alt="Cabin crew member with ALTESSIA wellness patch - a quiet moment of self-care in transit"
                className="relative z-10 w-full h-full object-cover object-center rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
