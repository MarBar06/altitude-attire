import { useEffect, useRef } from 'react';

const impacts = [
  {
    title: 'Circulation Stress',
    description: 'Prolonged sitting or standing at altitude reduces blood flow, contributing to swelling, heaviness, and discomfort, especially in the legs and feet.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Low Cabin Humidity',
    description: 'Cabin humidity drops to 10–20%, which may increase fluid loss, drying the skin, and impairing circulation and focus.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Digestive Discomfort',
    description: 'Cabin pressure and reduced oxygen slow digestion, increasing bloating, gas, and gastrointestinal discomfort.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Immune System Suppression',
    description: 'Low humidity, disrupted sleep, and repeated exposure to enclosed environments can temporarily weaken immune response.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Fatigue & Burnout',
    description: 'Frequent altitude changes, physical demands, and long duty hours drain energy reserves faster than normal daily life.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Sleep Disruption',
    description: 'Crossing time zones confuses your circadian rhythm—awake when you should sleep, exhausted when you need to perform.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
];

export const ProblemSection = () => {
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
    <section id="why-flying" ref={sectionRef} className="section-container bg-muted/30 paper-texture">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-4 reveal">
            Flying is not neutral for the body.
          </h2>
          <p className="section-subheading mx-auto reveal">
            Only those who live in the sky know what it truly feels like.
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-prose-lg mx-auto text-center mb-16 reveal">
          <p className="text-muted-foreground leading-relaxed">
            Flying does more than make you tired—it places real physiological stress on the body.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            During flight, factors such as cabin pressure, low humidity, prolonged sitting or standing, and disrupted schedules may contribute to physical discomfort and fatigue.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <div
              key={impact.title}
              className="impact-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mb-4 text-primary">
                {impact.icon}
              </div>
              <h3>{impact.title}</h3>
              <p>{impact.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="text-center mt-16 reveal">
          <p className="font-serif text-xl md:text-2xl text-foreground italic">
            This is the hidden cost of life in the sky.
          </p>
        </div>
      </div>
    </section>
  );
};
