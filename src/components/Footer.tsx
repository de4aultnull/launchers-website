import { Link } from "react-router-dom";
import { Compass, Youtube, Twitter, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
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
            <p className="text-sm text-muted-foreground">
              © 2025 Compass Launcher - Tous droits réservés. Projet indépendant non affilié à Mojang Studios.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/studio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Studio
                </Link>
              </li>
              <li>
                <Link to="/modules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Modules
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Vidéos
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux & Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Nos réseaux sociaux</h3>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
            
            <h4 className="font-semibold text-foreground mb-2 text-sm">Newsletter</h4>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email" 
                className="flex-1 bg-input border-border text-sm"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
