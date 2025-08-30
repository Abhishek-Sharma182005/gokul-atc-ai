import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Wheat, Cpu, TrendingUp, Users, Award } from "lucide-react";

const ImpactSection = () => {
  const ministryImpacts = [
    {
      icon: Building2,
      ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
      impact: "Reliable ATC for RGM, PT, and PS programs",
      description: "Provides standardized, objective evaluation for Rashtriya Gokul Mission, Progeny Testing, and Pedigree Selection programs, ensuring consistent breed improvement.",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: Wheat,
      ministry: "Ministry of Agriculture & Farmers' Welfare",
      impact: "Data-driven herd improvement and farm advisories",
      description: "Enables precise livestock analytics for better farm management decisions and targeted improvement recommendations for farmers.",
      color: "bg-secondary/10 text-secondary border-secondary/20"
    },
    {
      icon: Cpu,
      ministry: "Digital India / MeitY",
      impact: "Showcasing responsible AI in agriculture and rural tech",
      description: "Demonstrates successful AI implementation in rural areas, advancing Digital India's mission of technology-driven governance.",
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    }
  ];

  const outcomes = [
    {
      icon: TrendingUp,
      metric: "95%",
      label: "Accuracy Improvement",
      description: "Over manual evaluation methods"
    },
    {
      icon: Users,
      metric: "500+",
      label: "Animals/Day",
      description: "Processing capacity per district"
    },
    {
      icon: Award,
      metric: "100%",
      label: "Standardization",
      description: "Consistent evaluation criteria"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Government Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Impact for Ministries
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our AI solution directly supports multiple government initiatives and ministerial objectives, 
            creating measurable value across the livestock ecosystem.
          </p>
        </div>

        {/* Ministry Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {ministryImpacts.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index}
                className={`p-6 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 animate-slide-up ${item.color}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <IconComponent className="w-10 h-10 mb-4" />
                  <h3 className="text-lg font-bold mb-2 leading-tight">
                    {item.ministry}
                  </h3>
                  <Badge className="mb-4 font-semibold">
                    {item.impact}
                  </Badge>
                  <p className="text-sm leading-relaxed opacity-90">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quantified Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center bg-gradient-primary text-primary-foreground shadow-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">{outcome.metric}</h3>
                <h4 className="text-lg font-semibold mb-2">{outcome.label}</h4>
                <p className="text-sm opacity-90">{outcome.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Long-term Vision */}
        <Card className="bg-gradient-secondary text-secondary-foreground p-8 text-center shadow-glow animate-fade-in">
          <h3 className="text-3xl font-bold mb-6">
            Transforming India's Livestock Sector
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">🐄 Breed Conservation</h4>
              <p className="text-sm opacity-90">Preserving indigenous cattle and buffalo breeds</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">📊 Data-Driven Decisions</h4>
              <p className="text-sm opacity-90">Evidence-based policy making and resource allocation</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">🌾 Rural Empowerment</h4>
              <p className="text-sm opacity-90">Technology access for remote farming communities</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">🚀 AI Leadership</h4>
              <p className="text-sm opacity-90">Positioning India as AI innovation leader in agriculture</p>
            </div>
          </div>
          
          <p className="text-lg mt-8 font-medium">
            "सटीक मूल्यांकन, सुरक्षित भविष्य | Accurate Scoring, Reliable Future"
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ImpactSection;