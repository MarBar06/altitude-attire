import logoAltessia from '@/assets/logotrans_beige.png';

export const Footer = () => {
  return (
    <footer className="bg-ivory border-t border-sage/10"> {/* Cambiado a ivory para coherencia */}
      <div className="max-w-content mx-auto px-8 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Logo & Slogan - Ajustado para mayor presencia */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <img 
              src={logoAltessia} 
              alt="ALTESSIA" 
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-500 hover:scale-105" 
              /* h-14 (56px) en móvil y h-16 (70px) en desktop para un logo más imponente */
            />
            <p className="font-serif italic text-charcoal/60 text-sm tracking-wide">
              Feel better. <span className="text-golden-beige">Fly better.</span>
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-charcoal/60">
            <a href="#why-flying" className="hover:text-golden-beige transition-colors">Why Flying</a>
            <a href="#patches" className="hover:text-golden-beige transition-colors">Patches</a>
            <a href="#science" className="hover:text-golden-beige transition-colors">Science</a>
            <a href="#community" className="hover:text-golden-beige transition-colors">Community</a>
          </nav>

          {/* Social / Contact */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/altessiapatch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-11 h-11 rounded-full border border-sage/20 flex items-center justify-center text-charcoal/40 hover:text-charcoal hover:border-charcoal transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-16 pt-8 border-t border-sage/10 text-center">
          <p className="text-[10px] uppercase tracking-widest text-charcoal/40">
            © {new Date().getFullYear()} ALTESSIA. All rights reserved.
          </p>
          <p className="text-[9px] leading-relaxed text-charcoal/30 mt-4 max-w-xl mx-auto italic">
            Wellness patches are not intended to diagnose, treat, cure, or prevent any disease. 
            Designed for travel support.
          </p>
        </div>
      </div>
    </footer>
  );
};
