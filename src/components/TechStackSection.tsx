import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Server, 
  Shield, 
  Smartphone, 
  Cloud,
  Code,
  Zap
} from "lucide-react";

const TechStackSection = () => {
  const techCategories = [
    {
      icon: Brain,
      title: "AI/ML Stack",
      color: "bg-purple-500",
      technologies: [
        { name: "TensorFlow/Keras", description: "final_model.keras (EfficientNet backbone)" },
        { name: "Transfer Learning", description: "Pre-trained models fine-tuned for livestock" },
        { name: "Computer Vision", description: "Image preprocessing and feature extraction" },
        { name: "Mixed Precision", description: "Optimized training for faster inference" }
      ]
    },
    {
      icon: Server,
      title: "Backend Infrastructure",
      color: "bg-blue-500",
      technologies: [
        { name: "FastAPI", description: "High-performance API framework" },
        { name: "TensorFlow Serving", description: "Production ML model serving" },
        { name: "PostgreSQL", description: "Robust relational database" },
        { name: "S3-Compatible Storage", description: "Scalable object storage for images" }
      ]
    },
    {
      icon: Smartphone,
      title: "Frontend & Mobile",
      color: "bg-secondary",
      technologies: [
        { name: "Next.js", description: "React framework with SSR capabilities" },
        { name: "TailwindCSS", description: "Utility-first CSS framework" },
        { name: "shadcn UI", description: "Modern component library" },
        { name: "PWA Support", description: "Offline-first mobile experience" }
      ]
    },
    {
      icon: Shield,
      title: "Security & Auth",
      color: "bg-red-500",
      technologies: [
        { name: "JWT Authentication", description: "Secure token-based authentication" },
        { name: "Role-based Access", description: "Granular permission management" },
        { name: "Data Encryption", description: "End-to-end encrypted data storage" },
        { name: "Audit Logging", description: "Complete activity tracking" }
      ]
    },
    {
      icon: Cloud,
      title: "Integration & APIs",
      color: "bg-cyan-500",
      technologies: [
        { name: "BPA Integration", description: "REST API for Bharat Pashudhan App" },
        { name: "Offline Sync", description: "Queue-based data synchronization" },
        { name: "GPS Integration", description: "Location tracking and mapping" },
        { name: "Multi-language", description: "i18n support (English/Hindi)" }
      ]
    },
    {
      icon: Zap,
      title: "Performance",
      color: "bg-yellow-500",
      technologies: [
        { name: "Model Optimization", description: "Quantization and pruning for speed" },
        { name: "Image Compression", description: "Efficient storage and transfer" },
        { name: "Caching Strategy", description: "Redis for faster data access" },
        { name: "Load Balancing", description: "Scalable request handling" }
      ]
    }
  ];

  const apiEndpoints = [
    { endpoint: "/predict", description: "Image upload and breed classification", method: "POST" },
    { endpoint: "/syncBPA", description: "Synchronize data with Bharat Pashudhan App", method: "POST" },
    { endpoint: "/auditLogs", description: "Retrieve audit trail and activity logs", method: "GET" },
    { endpoint: "/health", description: "System health and model status check", method: "GET" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Technical Architecture
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade technology stack designed for reliability, scalability, 
            and government compliance requirements.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-card-foreground">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="border-l-2 border-primary/20 pl-3">
                        <h4 className="font-medium text-sm text-card-foreground">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {tech.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* API Endpoints */}
        <Card className="p-8 mb-16 animate-slide-up">
          <h3 className="text-2xl font-bold mb-6 text-center text-card-foreground flex items-center justify-center gap-2">
            <Code className="w-6 h-6 text-primary" />
            Integration-Ready API Endpoints
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {apiEndpoints.map((api, index) => (
              <div 
                key={index}
                className="p-4 bg-muted/30 rounded-lg border border-border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Badge 
                    variant={api.method === 'POST' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {api.method}
                  </Badge>
                  <code className="text-sm font-mono text-primary">
                    {api.endpoint}
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">
                  {api.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Model Architecture */}
        <Card className="bg-gradient-primary text-primary-foreground p-8 text-center shadow-glow animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">
            AI Model Architecture
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <Database className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Input Processing</h4>
              <p className="text-sm opacity-90">224×224 RGB images with augmentation pipeline</p>
            </div>
            
            <div>
              <Brain className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Feature Extraction</h4>
              <p className="text-sm opacity-90">EfficientNet backbone with transfer learning</p>
            </div>
            
            <div>
              <Zap className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Classification</h4>
              <p className="text-sm opacity-90">Multi-class softmax for breed prediction</p>
            </div>
            
            <div>
              <Shield className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Output</h4>
              <p className="text-sm opacity-90">Confidence scores + physical measurements</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white/10 rounded-lg">
            <p className="text-sm">
              <strong>Model File:</strong> final_model.keras | 
              <strong> Training:</strong> Transfer learning + Fine-tuning | 
              <strong> Inference:</strong> &lt;3s per image
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TechStackSection;