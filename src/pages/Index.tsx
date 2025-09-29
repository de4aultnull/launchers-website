import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Settings, Shield, Zap, Headphones, Users, Layout, 
  Lock, Sparkles, Check, ShoppingCart, HelpCircle 
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Settings,
      title: "Super personnalisable",
      description: "Vous pouvez tout modifier pour créer un launcher unique. Interface, thèmes, fonctionnalités, les créateurs rêvent déjà.",
    },
    {
      icon: Shield,
      title: "Stable & Fonctionnel",
      description: "Notre système de mise à jour automatique intégré garantit une stabilité optimale pour vos lancements via l'autoréparation et les mises à jour en continu.",
    },
    {
      icon: Lock,
      title: "Sécurisé",
      description: "Toutes les données sont cryptées en SSL et sécurisées. Si un fichier suspicieux est détecté, nous vous préviendrions automatiquement en cas de risque.",
    },
    {
      icon: Headphones,
      title: "Support Rapide",
      description: "Une communauté est disponible 24h/7j et peut vous aider en contactant nos développeurs. Pour des problèmes plus complexes contacter le support par mail.",
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Une plateforme accessible, compréhensible, avec des options à la fois puissantes et claires pour les débutants et plus avancés sans se perdre.",
    },
    {
      icon: Layout,
      title: "Système Moderne",
      description: "Offre à vos joueurs une expérience visuelle unique, moderne, et fluide, grace à un système de thème et d'options d'affichage personalisable.",
    },
    {
      icon: Sparkles,
      title: "Protection Anti-Cheat",
      description: "La plateforme intégrée est anti-cheat : clair, paramétrable, ultra léger et peu détectable pour assurer la sécurité sans ralentir la performance de l'utilisateur.",
    },
    {
      icon: Zap,
      title: "Totalement Intelligent",
      description: "Un système intelligent qui s'adapte à votre serveur et à votre communauté. Installation simple, prise en charge de java automatique, conseils intelligents pour une expérience exceptionnelle.",
    },
  ];

  const pricingPlans = [
    {
      name: "Essentiel",
      price: "0€",
      period: "/mois",
      description: "Tout ce qu'il vous faut pour débuter sur des bases solides.",
      features: [
        "Création d'un unique launcher",
        "1 thème offert",
        "Thème personnalisable",
        "Discord Rich Présence",
        "Téléchargement optimisé",
        "Anti-Cheat basique",
        "Statistiques de téléchargement",
        "Crédit \"Compass Launcher\"",
      ],
      cta: "Commencer",
      highlighted: false,
    },
    {
      name: "Plus",
      price: "5.99€",
      period: "/mois",
      description: "Boostez votre launcher avec plus de personalisation et de puissance.",
      features: [
        "Tout Essentiel +",
        "Création de 2 launchers",
        "3 thèmes offerts",
        "Gestion des mises à jours",
        "Obfuscation avancé du code",
        "Accès aux animations",
        "Crédit personnalisable",
        "2 modules offerts",
      ],
      cta: "Souscrire",
      highlighted: false,
    },
    {
      name: "Ultra",
      price: "9.99€",
      period: "/mois",
      description: "Puissance, sécurité et personnalisation premium pour votre launcher",
      features: [
        "Tout Essentiel et Plus +",
        "Création de 5 launchers",
        "3 thème offert",
        "5go de stockage cloud",
        "Anti-Cheat amélioré",
        "Accès aux widgets",
        "5 modules offerts",
        "Support technique prioritaire",
      ],
      cta: "Souscrire",
      highlighted: true,
    },
    {
      name: "Ultimate",
      price: "14.99€",
      period: "/mois",
      description: "Puissance, sécurité et personnalisation premium pour votre launcher",
      features: [
        "Tout Essentiel et Plus +",
        "Accès à tout les modules",
        "Accès à tout les thèmes",
        "10go de stockage cloud",
        "Statistiques complètes",
        "Gestion des permissions",
        "Accès aux versions en avant-première",
        "Protection avancée du launcher",
      ],
      cta: "Souscrire",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Qu'est-ce que Compass Launcher ?",
      answer: "Compass Launcher est une plateforme complète permettant de créer, personnaliser et gérer vos propres launchers Minecraft. Simple d'utilisation, il offre des fonctionnalités avancées pour créer une expérience unique pour votre communauté.",
    },
    {
      question: "Comment créer un launcher avec Compass Launcher ?",
      answer: "Créer un launcher est très simple : inscrivez-vous, choisissez un plan adapté à vos besoins, personnalisez l'apparence et les fonctionnalités via notre interface intuitive, puis déployez votre launcher en quelques clics.",
    },
    {
      question: "Quels avantages de je garde à un plan payant ?",
      answer: "Les plans payants offrent plus de launchers, des thèmes supplémentaires, l'accès aux modules premium, du stockage cloud, un anti-cheat renforcé, un support prioritaire et bien plus encore selon le plan choisi.",
    },
    {
      question: "Est-ce que je peux changer de plan à tout moment ?",
      answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre espace client. Les changements prennent effet immédiatement.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section with Carousel */}
        <HeroCarousel />

        {/* Launcher Premium Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Launcher Premium</h2>
              <p className="text-muted-foreground border border-border rounded-full inline-block px-6 py-2">
                Fonctionnalités avancées.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {features.slice(4, 8).map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Nos Tarifs</h2>
              <p className="text-muted-foreground border border-border rounded-full inline-block px-6 py-2">
                La qualité à un prix !
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-6 relative overflow-hidden transition-all hover:shadow-xl ${
                    plan.highlighted
                      ? "border-primary/50 bg-card shadow-lg"
                      : "border-border/50 bg-card/50"
                  }`}
                >
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-primary" : ""}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-glow"
                        : "bg-card border border-border hover:border-primary hover:bg-card"
                    }`}
                  >
                    {plan.cta}
                    {plan.cta === "Souscrire" && <ShoppingCart className="ml-2 h-4 w-4" />}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">...Des questions ?</h2>
              <p className="text-muted-foreground border border-border rounded-full inline-block px-6 py-2">
                Chaque question à une réponse !
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-lg px-6 hover:border-primary/50 transition-all"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-left font-semibold flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Beta Signup Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                ...Rejoindre la <span className="text-primary">Bêta</span>
              </h2>
              <p className="text-muted-foreground border border-border rounded-full inline-block px-6 py-2 mb-6">
                L'innovation passe par vous !
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Rejoignez notre bêta exclusive et façonnez l'avenir de<br />
                Compass Launcher Studio !
              </p>
            </div>

            <div className="flex gap-2 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Email..." 
                className="flex-1 bg-input border-border"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-glow">
                Rejoindre la bêta
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">...Payements</h2>
              <p className="text-muted-foreground border border-border rounded-full inline-block px-6 py-2 mb-6">
                Nos moyens de payements
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Avec plusieurs solutions de paiement à votre disposition, régler vos achats<br />
                n'a jamais été aussi simple et rapide !
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center p-4">
                <svg className="w-full h-auto" viewBox="0 0 60 25" fill="none">
                  <path d="M10.8 8.4h6v12.4h-6V8.4z" fill="#FF5F00"/>
                  <path d="M11.2 14.6c0-2.5 1.2-4.8 3-6.2-1.3-1-3-1.6-4.8-1.6C4.8 6.8 1 10.6 1 15.2s3.8 8.4 8.4 8.4c1.8 0 3.5-.6 4.8-1.6-1.8-1.4-3-3.7-3-6.2z" fill="#EB001B"/>
                  <path d="M27.6 14.6c0 4.6-3.8 8.4-8.4 8.4-1.8 0-3.5-.6-4.8-1.6 1.8-1.4 3-3.7 3-6.2 0-2.5-1.2-4.8-3-6.2 1.3-1 3-1.6 4.8-1.6 4.6 0 8.4 3.8 8.4 8.4z" fill="#F79E1B"/>
                </svg>
              </div>
              <div className="w-32 h-20 bg-[#635BFF] rounded-lg flex items-center justify-center p-4">
                <span className="text-white font-bold text-2xl">stripe</span>
              </div>
              <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center p-4">
                <svg className="w-full h-auto" viewBox="0 0 100 32" fill="none">
                  <path d="M12 4.917v22.167c0 .504.406.916.906.916h6.188c.5 0 .906-.412.906-.916V4.917c0-.504-.406-.917-.906-.917h-6.188c-.5 0-.906.413-.906.917z" fill="#253B80"/>
                  <path d="M35.889 10.25c-1.625-.938-3.906-1.375-6.844-1.375h-7.625c-.5 0-.937.375-1 .875l-3 18.875c-.062.375.219.688.594.688h4.343c.5 0 .938-.375 1-.875l.813-5.063c.062-.5.5-.875 1-.875h2.313c4.812 0 8.562-1.938 9.625-7.563.469-2.437.031-4.375-1.219-5.687z" fill="#253B80"/>
                  <path d="M70.452 10.25c-1.625-.938-3.906-1.375-6.844-1.375h-7.625c-.5 0-.937.375-1 .875l-3 18.875c-.062.375.219.688.594.688h4.062c.5 0 .938-.375 1-.875l.75-4.688c.063-.5.5-.875 1-.875h2.313c4.812 0 8.562-1.938 9.625-7.563.469-2.437.031-4.375-1.219-5.687z" fill="#179BD7"/>
                  <path d="M50.952 18c-.469 2.75-2.5 4.625-5.25 4.625-1.344 0-2.438-.438-3.156-1.25-.719-.813-1-1.938-.781-3.188.406-2.75 2.5-4.687 5.187-4.687 1.313 0 2.375.438 3.094 1.25.75.813 1.031 1.938.906 3.25z" fill="#253B80"/>
                  <path d="M85.577 18c-.469 2.75-2.5 4.625-5.25 4.625-1.344 0-2.438-.438-3.156-1.25-.719-.813-1-1.938-.781-3.188.406-2.75 2.5-4.687 5.187-4.687 1.313 0 2.375.438 3.094 1.25.75.813 1.031 1.938.906 3.25z" fill="#179BD7"/>
                  <path d="M92.014 13.75h-4.094c-.281 0-.531.125-.656.344l-3.781 5.562-1.594-5.312c-.125-.375-.469-.594-.875-.594h-4.031c-.344 0-.594.344-.469.656l3 8.813-2.813 3.969c-.25.344 0 .812.406.812h4.094c.281 0 .531-.125.656-.344l9.125-13.25c.219-.344-.031-.812-.437-.812z" fill="#253B80"/>
                </svg>
              </div>
              <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center p-4">
                <svg className="w-full h-auto" viewBox="0 0 48 32" fill="black">
                  <path d="M47.994 11.333c0-1.667-1.34-3.007-2.993-3.007H30.66c-1.653 0-2.993 1.34-2.993 3.007v9.334c0 1.666 1.34 3.006 2.993 3.006H45c1.654 0 2.994-1.34 2.994-3.006v-9.334zM27 11.333C27 9.493 25.507 8 23.667 8H9.333C7.493 8 6 9.493 6 11.333v9.334C6 22.507 7.493 24 9.333 24h14.334C25.507 24 27 22.507 27 20.667v-9.334z"/>
                </svg>
              </div>
              <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center p-4">
                <svg className="w-full h-auto" viewBox="0 0 48 32" fill="none">
                  <path d="M24 2C12.954 2 4 10.954 4 22s8.954 20 20 20 20-8.954 20-20S35.046 2 24 2z" fill="#EA4335"/>
                  <path d="M24 12.5v7L32 22l-8 2.5v7c5.523 0 10-4.477 10-10s-4.477-10-10-10z" fill="#4285F4"/>
                  <path d="M24 12.5c-5.523 0-10 4.477-10 10s4.477 10 10 10v-7l-8-2.5 8-2.5v-7z" fill="#34A853"/>
                  <path d="M24 19.5L16 22l8 2.5 8-2.5-8-2.5z" fill="#FAB908"/>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
