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
    <section id="join" ref={sectionRef} className="section-container">
      <div className="max-w-content mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-heading mb-6 reveal">
            Ready to feel better in the sky?
          </h2>
          <p className="section-subheading mx-auto mb-4 reveal">
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
