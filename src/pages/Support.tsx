import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Headphones, Clock, Smile, MessageSquare, Send } from "lucide-react";

const Support = () => {
  const supportFeatures = [
    {
      icon: Headphones,
      title: "7 jour sur 7",
      description: "Avec nous à chaque instant ! Notre équipe de bénévoles est disponible tous les jours pour vous accompagner dans vos démarches avec des temps de réponse record.",
    },
    {
      icon: Clock,
      title: "Assistance rapide",
      description: "Obtenez des réponses en moins de 7 jours ! Nous faisons notre maximum pour vous fournir une aide rapide et efficace afin de résoudre votre problème rapidement.",
    },
    {
      icon: Smile,
      title: "Satisfaction garantie",
      description: "Votre bonheur est notre priorité ! Nous mettons tout en œuvre pour répondre à vos attentes et garantir votre satisfaction à chaque interaction.",
    },
    {
      icon: MessageSquare,
      title: "Suivi dédié",
      description: "Un service client à votre écoute : notre équipe reste disponible après résolution pour s'assurer que tout fonctionne correctement pour vous.",
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
                SUPPORT
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un support réactif et professionnel, prêt à<br />
              résoudre vos problèmes rapidement.
            </p>
          </div>

          {/* Support Features */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Notre Support</h2>
              <p className="text-muted-foreground border border-border rounded-full inline-block px-6 py-2">
                Avec nous à chaque instant !
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-xl group"
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
          </section>

          {/* Contact Form */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Contactez-nous !</h2>
            </div>

            <Card className="max-w-2xl mx-auto p-8 bg-card/80 backdrop-blur-sm border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Formulaire de Contact</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      placeholder="Nom..."
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse Mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Adresse..."
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet de votre demande</Label>
                  <Input
                    id="subject"
                    placeholder="Objet..."
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Description détaillée de votre demande</Label>
                  <Textarea
                    id="message"
                    placeholder="Message..."
                    rows={6}
                    className="bg-input border-border resize-none"
                  />
                </div>

                <div className="flex justify-center">
                  <Button 
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-glow transition-all"
                  >
                    Envoyer
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Card>
          </section>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'une assistance immédiate ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rejoignez notre Discord pour obtenir de l'aide rapidement de notre communauté
                et de notre équipe de support.
              </p>
              <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-8 shadow-lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Rejoindre le Discord
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
