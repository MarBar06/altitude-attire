import { useEffect, useRef } from 'react';

const advantages = [
  {
    title: 'Bypasses digestion',
    description: 'No breakdown by stomach acid or liver metabolism, ideal when digestion is compromised at altitude.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Higher bioavailability',
    description: 'Up to 90–95% absorption, compared to approximately 10–20% for many oral supplements.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Consistent, time-released delivery',
    description: 'Maintains steady levels without spikes or crashes.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Gut-friendly',
    description: 'No nausea, irritation, or digestive discomfort.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Discreet & effortless',
    description: 'Apply once. No pills. No interruptions during your flight.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Clinically established technology',
    description: 'Transdermal delivery has been used in medical applications for decades.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export const ScienceSection = () => {
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
    <section id="science" ref={sectionRef} className="section-container">
      <div className="max-w-content mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div>
            <h2 className="section-heading mb-6 reveal">
              Why transdermal works,<br />especially in the air.
            </h2>
            <p className="section-subheading mb-10 reveal">
              Transdermal delivery allows active ingredients to absorb directly through the skin over time.
            </p>

            {/* Advantages List */}
            <div className="space-y-2">
              {advantages.map((advantage, index) => (
                <div
                  key={advantage.title}
                  className="advantage-item reveal"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="advantage-icon">
                    {advantage.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      {advantage.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Closing */}
          <div className="lg:sticky lg:top-32 reveal">
            <div className="p-8 md:p-10 bg-muted/30 rounded-3xl">
              <p className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">
                Designed with frequent flyers in mind.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Altessia is being developed in collaboration with cabin crew and frequent travelers who understand the physical demands of life in the air.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
