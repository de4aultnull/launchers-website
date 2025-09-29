import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { 
  Users, Shield, ShoppingBag, Lock, Sparkles, Layout, 
  TrendingUp, MessageCircle, Radio, Newspaper, Target 
} from "lucide-react";

const Modules = () => {
  const modules = [
    {
      icon: Users,
      title: "Système d'Amie",
      description: "Un module pensé pour connecter votre communauté. Ajoutez, gérez et retrouvez facilement vos amis directement depuis votre launcher.",
    },
    {
      icon: Shield,
      title: "Passe de Combat",
      description: "Un module conçu pour récompenser et fidéliser vos joueurs. Créez un passe de combat unique avec des niveaux, des défis et des récompenses exclusives.",
    },
    {
      icon: ShoppingBag,
      title: "Gestion de Boutique",
      description: "Un module complet pour intégrer une boutique directement dans votre launcher. Vendez des skins, des objets et des avantages, le tout facilement accessible pour vos joueurs.",
    },
    {
      icon: Lock,
      title: "Guardian",
      description: "Un module de sécurité pour vérifier les fichiers sensibles au lancement. Protection efficace contre les triches, sans impact sur la performance du jeu.",
    },
    {
      icon: Sparkles,
      title: "Cardinal",
      description: "Un module de sécurité pour une vérification continue des fichiers et processus. Protection anti-cheat avancée, sans interruption.",
    },
    {
      icon: Layout,
      title: "Screenflow",
      description: "Un module pour personnaliser le fond et les animations de votre launcher. Créez une expérience visuelle unique, totalement à votre image.",
    },
    {
      icon: TrendingUp,
      title: "Statistiques",
      description: "Un module pour suivre les téléchargements, les versions des joueurs, temps de jeu et bien plus. Analysez les données pour améliorer l'expérience de vos utilisateurs.",
    },
    {
      icon: MessageCircle,
      title: "Discord Rich Presence",
      description: "Un module pour afficher votre launcher directement dans l'activité Discord. Permettez à vos joueurs de partager facilement leur statut de jeu avec leurs amis.",
    },
    {
      icon: Radio,
      title: "Statut Serveur",
      description: "Un module pour afficher le statut en ligne ou hors ligne de votre serveur. Informez vos joueurs en temps réel de la disponibilité de votre serveur.",
    },
    {
      icon: Newspaper,
      title: "Gestion des News",
      description: "Un module pour afficher des actualités directement dans le launcher. Modifiable par les administrateurs, il permet de tenir vos joueurs informés en temps réel.",
    },
    {
      icon: Target,
      title: "Daily Play",
      description: "Un module pour définir des objectifs de temps de jeu quotidien sur le serveur. Encouragez vos joueurs à atteindre des objectifs et récompensez-les pour leur engagement.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Nos Modules
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enrichissez votre launcher avec nos modules puissants et faciles à intégrer.
              Chaque module est conçu pour améliorer l'expérience de vos joueurs.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <module.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à améliorer votre launcher ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Découvrez comment nos modules peuvent transformer votre launcher
                et offrir une expérience exceptionnelle à votre communauté.
              </p>
              <a href="/">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-glow transition-all">
                  Commencer maintenant
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Modules;
