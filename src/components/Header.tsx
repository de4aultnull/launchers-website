import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Compass className="h-8 w-8 text-primary transition-transform group-hover:rotate-180 duration-500" />
              <div className="absolute inset-0 blur-xl bg-primary/30 group-hover:bg-primary/50 transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">COMPASS</span>
              <span className="text-xs text-primary font-semibold -mt-1">LAUNCHER</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Accueil
            </Link>
            <Link to="/studio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Studio
            </Link>
            <Link to="/modules" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Modules
            </Link>
            <Link to="/decouverte" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Découverte
            </Link>
            <Link to="/support" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border">
              <div className="w-5 h-4 rounded-sm bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center text-white text-xs font-bold">
                FR
              </div>
            </div>
            
            <Link to="/auth">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-lg hover:shadow-glow transition-all">
                Connexion
              </Button>
            </Link>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Accueil
              </Link>
              <Link to="/studio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Studio
              </Link>
              <Link to="/modules" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Modules
              </Link>
              <Link to="/decouverte" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Découverte
              </Link>
              <Link to="/support" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
