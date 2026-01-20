import logoAltessia from '@/assets/logo-altessia.png';

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/30">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={logoAltessia} 
              alt="ALTESSIA" 
              className="h-8 w-auto object-contain"
            />
            <p className="font-serif italic text-muted-foreground">
              Feel better. Fly better.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#why-flying" className="hover:text-foreground transition-colors">Why Flying</a>
            <a href="#patches" className="hover:text-foreground transition-colors">Patches</a>
            <a href="#science" className="hover:text-foreground transition-colors">Science</a>
            <a href="#community" className="hover:text-foreground transition-colors">Community</a>
          </div>

          {/* Social / Contact */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/altessiapatch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-all"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} ALTESSIA. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 mt-2">
            Wellness patches are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};
