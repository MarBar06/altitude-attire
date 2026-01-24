import { useEffect, useRef } from 'react';
import { PreOrderForm } from './PreOrderForm';

export const CTASection = () => {
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

  return (
    <section id="join" ref={sectionRef} className="section-container py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-golden-beige font-sans mb-4 reveal">
            JOIN THE PRE ORDER LIST
          </p>
          
          <h2 className="section-heading mb-6 reveal text-4xl font-bold">
            Ready to <span className="italic font-serif" style={{ color: '#C6A275' }}> feel better</span> in the sky?
          </h2>
    
          <p className="section-subheading mx-auto mb-4 reveal text-lg">
            Be the first to access Altessia at launch.
          </p>
          
          <p className="text-muted-foreground mb-12 reveal">
            Join the pre-order list for exclusive early access and founding member pricing.
          </p>
    
          <div className="reveal">
            <PreOrderForm variant="cta" />
          </div>
        </div>
      </div>
    </section>
  );
};