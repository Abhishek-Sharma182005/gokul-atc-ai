import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Cpu, 
  BarChart3, 
  CheckCircle, 
  Cloud,
  ArrowRight
} from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Camera,
      title: "Capture Animal Image",
      description: "Field personnel use mobile app to capture high-quality images of cattle/buffaloes",
      details: "GPS coordinates, timestamp, and metadata automatically recorded",
      color: "bg-blue-500"
    },
    {
      number: "02", 
      icon: Cpu,
      title: "AI Processing",
      description: "Advanced computer vision algorithms analyze physical parameters in real-time",
      details: "Body length, height at withers, chest width, rump angle measurements",
      color: "bg-purple-500"
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Extract Measurements & Compute Score",
      description: "AI model generates standardized ATC score with confidence levels",
      details: "Breed classification predictions with top-3 matches and percentages",
      color: "bg-secondary"
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Confirm / Override by Field Worker",
      description: "Human verification step allows expert review and manual override if needed",
      details: "Quality control ensures accuracy while maintaining human oversight",
      color: "bg-orange-500"
    },
    {
      number: "05",
      icon: Cloud,
      title: "Sync to BPA Database",
      description: "Data automatically syncs to Bharat Pashudhan App with complete metadata",
      details: "Offline-first design queues data when connectivity is limited",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Process Flow
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Simple 5-step process transforms complex livestock evaluation into 
            streamlined, accurate, and traceable digital workflow.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 mb-16 last:mb-0 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Card className="p-8 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div 
                        className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                      >
                        {step.number}
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                          {step.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        <p className="text-sm text-muted-foreground/80 italic">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Icon */}
                <div className={`flex-shrink-0 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center shadow-glow`}>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-32">
                    <ArrowRight className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Technical Specifications */}
        <div className="mt-20">
          <Card className="bg-card p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center text-card-foreground">
              Technical Specifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">AI Model</h4>
                <p className="text-sm text-muted-foreground">EfficientNet backbone with transfer learning</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">Image Processing</h4>
                <p className="text-sm text-muted-foreground">224×224 resize, augmentation, landmark extraction</p>
              </div>
              
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Processing Time</h4>
                  <p className="text-sm text-muted-foreground">&lt; 3 seconds per image analysis</p>
                </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">Accuracy Rate</h4>
                <p className="text-sm text-muted-foreground">95%+ on test datasets</p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Camera className="w-5 h-5" />
            Try the Demo
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;