import { useEffect, useRef } from 'react';
import community1 from '@/assets/community-1.jpg';
import community2 from '@/assets/community-2.jpg';
import community3 from '@/assets/community-3.jpg';

const quotes = [
  "Only those who live in the sky know what it truly feels like.",
  "Flying is not neutral for the body.",
  "A quiet ritual between flights.",
];

const images = [community1, community2, community3];

export const CommunitySection = () => {
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
    <section id="community" ref={sectionRef} className="section-container bg-muted/20 paper-texture">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-6 reveal">
            From our community.
          </h2>
          <p className="section-subheading mx-auto reveal">
            Join a growing community of cabin crew and frequent flyers redefining what it means to travel well.
          </p>
          <p className="text-muted-foreground mt-4 reveal">
            This isn't luxury wellness. It's functional support for people who actually fly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Image Cards */}
          {images.map((image, index) => (
            <div
              key={index}
              className="reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt="ALTESSIA community"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay with quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-6">
                  <p className="quote-text text-primary-foreground text-base">
                    "{quotes[index]}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
