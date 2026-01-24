import { useState, useEffect } from 'react';
import logoAltessia from '@/assets/logotrans_beige.png';

const navLinks = [
  { label: 'Why Altessia', href: '#why-altessia' },
  { label: 'patches', href: '#altessia-wellness-patches' },
  { label: 'Science', href: '#science' },
  { label: 'Community', href: '#community' },
  { label: 'Join', href: '#join' },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-ivory/85 backdrop-blur-lg border-b border-sage/20 shadow-soft py-1'
          : 'bg-transparent py-2'
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo - Presencia Premium */}
          <a href="#" className="flex items-center transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src={logoAltessia} 
              alt="ALTESSIA" 
              className="w-auto" 
              style={{ 
                height: '150px',    
                minWidth: '220px',  
                objectFit: 'contain'
              }}
            />
          </a>

          {/* Desktop Navigation - Color Beige aplicado */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.15em] text-golden-beige hover:text-charcoal transition-colors duration-300 font-sans font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Color Beige aplicado a las líneas */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-golden-beige"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-golden-beige transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-golden-beige transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-golden-beige transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Color Beige aplicado a los links móviles */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? 'max-h-64 pb-8' : 'max-h-0'}`}>
          <div className="flex flex-col gap-5 pt-6 border-t border-sage/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-widest text-golden-beige font-medium hover:text-charcoal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};