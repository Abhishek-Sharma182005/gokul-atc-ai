import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Target, Smartphone, Globe, Shield, TrendingUp } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Analysis",
      description: "Advanced computer vision extracts physical parameters: body length, height at withers, chest width, rump angle"
    },
    {
      icon: Target,
      title: "Objective Scoring",
      description: "Outputs standardized scores with confidence levels, eliminating human bias and subjectivity"
    },
    {
      icon: Smartphone,
      title: "Offline-First Mobile",
      description: "Works without internet connectivity, with queued sync for low-connectivity rural areas"
    },
    {
      icon: Globe,
      title: "BPA Integration",
      description: "Seamless auto-record integration with Bharat Pashudhan App via secure API"
    },
    {
      icon: Shield,
      title: "Audit-Ready",
      description: "Complete traceability with image, GPS, timestamp, and model version recording"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Retraining pipeline ensures model improvement with new data and feedback"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Our Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            AI-Driven Animal Type Classification
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI technology that transforms subjective livestock evaluation 
            into precise, standardized, and scalable assessment.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center bg-gradient-primary text-primary-foreground shadow-glow animate-scale-in">
            <h3 className="text-2xl font-bold mb-4">95% Accuracy</h3>
            <p>Consistent, objective evaluation surpassing human performance</p>
          </Card>
          
          <Card className="p-8 text-center bg-gradient-secondary text-secondary-foreground shadow-glow animate-scale-in" 
                style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4">10x Faster</h3>
            <p>Process hundreds of animals per day with instant results</p>
          </Card>
          
          <Card className="p-8 text-center border-2 border-primary shadow-elegant animate-scale-in" 
                style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 text-primary">100% Traceable</h3>
            <p className="text-muted-foreground">Complete audit trail for government compliance</p>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technical Highlight */}
        <div className="mt-16">
          <Card className="bg-muted/50 p-8 animate-fade-in">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Built with Government-Grade Standards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Multi-Language Support</h4>
                  <p className="text-sm text-muted-foreground">English, Hindi interface for field personnel</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Minimal Training Required</h4>
                  <p className="text-sm text-muted-foreground">User-friendly interface operable by anyone</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Data Security</h4>
                  <p className="text-sm text-muted-foreground">Encrypted storage, role-based access control</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;