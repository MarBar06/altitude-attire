import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import logoAltessia from '@/assets/logo-altessia.png';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <img 
        src={logoAltessia} 
        alt="ALTESSIA" 
        className="h-10 w-auto object-contain mb-12"
      />
      <h1 className="font-serif text-6xl md:text-7xl text-foreground mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Oops! Page not found
      </p>
      <Link 
        to="/" 
        className="btn-primary"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
