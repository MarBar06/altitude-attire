import { useEffect, useRef } from 'react';

export const SolutionSection = () => {
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
    <section ref={sectionRef} className="section-container">
      <div className="max-w-content mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading mb-6 reveal">
            Wellness, delivered differently.
          </h2>
          <p className="section-subheading mx-auto mb-8 reveal">
            Altessia wellness patches are designed to support the body during travel, 
            using a transdermal delivery format that aligns with the unique conditions of flight.
          </p>
          <p className="text-xs text-muted-foreground/60 reveal">
            They are not intended to diagnose, treat, cure or prevent any disease.
          </p>
        </div>
      </div>
    </section>
  );
};
