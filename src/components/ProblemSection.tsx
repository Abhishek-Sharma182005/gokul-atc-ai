import { Card } from "@/components/ui/card";
import { AlertTriangle, Users, TrendingDown, Clock } from "lucide-react";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: Users,
      title: "Human Dependency",
      description: "Current ATC relies on trained personnel, creating bottlenecks and inconsistency"
    },
    {
      icon: AlertTriangle,
      title: "Subjective Bias",
      description: "Manual evaluation prone to personal bias and varying interpretation of standards"
    },
    {
      icon: TrendingDown,
      title: "Fatigue Impact",
      description: "Human fatigue leads to declining accuracy throughout the evaluation process"
    },
    {
      icon: Clock,
      title: "Limited Scalability",
      description: "Time-intensive process cannot meet the growing demands of livestock evaluation"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About the Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Current Animal Type Classification (ATC) processes are done manually by trained personnel, 
            creating significant challenges in livestock evaluation programs.
          </p>
        </div>

        {/* Problem Quote */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card border-l-4 border-l-primary p-8 shadow-elegant animate-slide-up">
            <blockquote className="text-lg italic text-card-foreground leading-relaxed">
              "ATC is critical for selecting elite dams for progeny testing and pedigree selection. 
              The current manual process struggles with consistency, scalability, and objective evaluation 
              standards required for the Rashtriya Gokul Mission."
            </blockquote>
            <footer className="text-sm text-muted-foreground mt-4">
              — Ministry of Fisheries, Animal Husbandry & Dairying Problem Statement
            </footer>
          </Card>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-destructive" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Impact Statement */}
        <div className="text-center mt-16">
          <Card className="bg-primary/5 border-primary/20 p-8 max-w-3xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              The Result: Inconsistent Livestock Evaluation
            </h3>
            <p className="text-lg text-muted-foreground">
              These challenges directly impact the effectiveness of breed improvement programs, 
              hindering India's goal of enhancing indigenous cattle and buffalo breeds under 
              government initiatives.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;