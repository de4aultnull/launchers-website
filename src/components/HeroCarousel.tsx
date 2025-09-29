import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Package } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "SIMPLE ET INTUITIF",
    subtitle: "Une interface pensée pour aller à l'essentiel.",
    description: "Simple, rapide et sans prise de tête.",
  },
  {
    title: "CRÉER SANS LIMITES",
    subtitle: "Imaginez, personnalisez, déployez votre launcher.",
    description: "Vos idées deviennent enfin réalisables !",
  },
  {
    title: "CRÉEZ SIMPLEMENT",
    subtitle: "Créez facilement, personnalisez à volonté.",
    description: "Votre launcher, exactement comme vous le voulez!",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(262_83%_58%_/_0.15),transparent_50%)]" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow-pulse">
              {slides[currentSlide].title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground font-medium max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>

          <div className="pt-4">
            <Link to="/auth">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 text-lg shadow-lg hover:shadow-glow transition-all group">
                Commencer
                <Package className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="pointer-events-auto bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card hover:border-primary transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="pointer-events-auto bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card hover:border-primary transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
