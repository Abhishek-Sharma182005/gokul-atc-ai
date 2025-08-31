import { Badge } from "@/components/ui/badge";

// Abhishek Sharma - Kamdhenu AI Professional Interface
const GRADIO_URL = "https://f03ad93b6fc8b3d0c4.gradio.live";

const DemoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            🐄 कामधेनु AI - Professional Interface
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Kamdhenu AI Model Studio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional-grade AI analysis for Indian cattle and buffalo breeds. 
            Advanced breed classification with confidence scoring and real-time processing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-2xl border border-border">
            <iframe
              src={GRADIO_URL}
              width="100%"
              height="800"
              className="w-full"
              style={{ border: 'none' }}
              title="Kamdhenu AI - Cattle Breed Classifier"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;