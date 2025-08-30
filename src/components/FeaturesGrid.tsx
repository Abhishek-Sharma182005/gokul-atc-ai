import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Smartphone, 
  Globe, 
  Languages, 
  FileCheck, 
  RefreshCw,
  Zap,
  Shield
} from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Automated AI-based Scoring",
      description: "Computer vision algorithms provide consistent, objective evaluation of livestock physical parameters",
      status: "Core Feature"
    },
    {
      icon: Globe,
      title: "BPA Integration via Secure API",
      description: "Seamless integration with Bharat Pashudhan App for automatic record synchronization",
      status: "Government Ready"
    },
    {
      icon: Smartphone,
      title: "Offline-First Mobile App (PWA)",
      description: "Works without internet connectivity, syncs when connection is available",
      status: "Rural Ready"
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Available in English and Hindi for accessibility across diverse user groups",
      status: "Inclusive Design"
    },
    {
      icon: FileCheck,
      title: "Audit-Ready Documentation",
      description: "Complete traceability with image, GPS coordinates, timestamp, and model version",
      status: "Compliance Ready"
    },
    {
      icon: RefreshCw,
      title: "Continuous Model Improvement",
      description: "Retraining pipeline incorporates new data and feedback for enhanced accuracy",
      status: "Future Proof"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant results with confidence scores and breed classification predictions",
      status: "High Performance"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "JWT authentication, encrypted data storage, and role-based access control",
      status: "Secure"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Core Feature": return "bg-primary/10 text-primary";
      case "Government Ready": return "bg-blue-500/10 text-blue-600";
      case "Rural Ready": return "bg-secondary/10 text-secondary";
      case "Inclusive Design": return "bg-purple-500/10 text-purple-600";
      case "Compliance Ready": return "bg-orange-500/10 text-orange-600";
      case "Future Proof": return "bg-cyan-500/10 text-cyan-600";
      case "High Performance": return "bg-yellow-500/10 text-yellow-600";
      case "Secure": return "bg-red-500/10 text-red-600";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Key Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive AI Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every feature designed to meet the specific needs of government livestock 
            evaluation programs and rural field operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  
                  <Badge 
                    className={`text-xs mb-3 ${getStatusColor(feature.status)}`}
                  >
                    ✅ {feature.status}
                  </Badge>
                  
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground leading-tight">
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary text-primary-foreground p-8 max-w-4xl mx-auto shadow-glow animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">
              Ready for Government Deployment
            </h3>
            <p className="text-lg opacity-95 mb-6">
              All features have been designed and tested to meet the stringent requirements 
              of government livestock evaluation programs and rural deployment scenarios.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Rashtriya Gokul Mission Compatible
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                BPA Integration Ready
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Field Tested
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;