import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Upload, 
  Camera, 
  FileImage, 
  CheckCircle, 
  AlertTriangle,
  Cpu,
  Target
} from "lucide-react";

const DemoSection = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setResults(null);
    simulateProcessing();
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setResults({
        predictions: [
          { breed: "Gir", confidence: 92.5, origin: "Gujarat" },
          { breed: "Sahiwal", confidence: 86.3, origin: "Punjab" },
          { breed: "Red Sindhi", confidence: 78.9, origin: "Sindh" }
        ],
        measurements: {
          bodyLength: "145.2 cm",
          heightAtWithers: "132.8 cm", 
          chestWidth: "67.4 cm",
          rumpAngle: "24.7°"
        },
        score: 8.7,
        confidence: 94.2,
        processingTime: "2.3s"
      });
      setIsProcessing(false);
    }, 3000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files[0] && files[0].type.startsWith('image/')) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Live Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            AI Model Demonstration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Upload an image of cattle or buffalo to see our AI in action. 
            Get instant breed classification and physical parameter analysis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="p-8 animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground flex items-center gap-2">
                <Upload className="w-6 h-6 text-primary" />
                Upload Image
              </h3>
              
              {!uploadedFile ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                    dragOver 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-card-foreground">
                      Drop image here or click to upload
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Supports JPG, PNG, WebP images of cattle or buffalo
                    </p>
                  </div>
                  
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer" asChild>
                      <span>
                        <FileImage className="w-4 h-4" />
                        Choose File
                      </span>
                    </Button>
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <FileImage className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">{uploadedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(uploadedFile.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  
                  {isProcessing && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-primary">
                        <Cpu className="w-5 h-5 animate-spin" />
                        <span className="font-medium">Processing image...</span>
                      </div>
                      <Progress value={66} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        Analyzing physical parameters and breed characteristics
                      </p>
                    </div>
                  )}
                  
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setUploadedFile(null);
                      setResults(null);
                      setIsProcessing(false);
                    }}
                    className="w-full"
                  >
                    Upload Different Image
                  </Button>
                </div>
              )}
            </Card>

            {/* Results Section */}
            <Card className="p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 text-card-foreground flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Analysis Results
              </h3>
              
              {!results && !isProcessing && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    Upload an image to see AI analysis results
                  </p>
                </div>
              )}
              
              {isProcessing && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-primary animate-spin" />
                  </div>
                  <p className="text-primary font-medium">Analyzing image...</p>
                </div>
              )}
              
              {results && (
                <div className="space-y-6">
                  {/* Overall Score */}
                  <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold text-primary mb-2">ATC Score</h4>
                    <div className="text-4xl font-bold text-primary">{results.score}/10</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {results.confidence}% confidence
                    </p>
                  </div>
                  
                  {/* Breed Predictions */}
                  <div>
                    <h4 className="font-semibold mb-3 text-card-foreground">Top Breed Predictions</h4>
                    <div className="space-y-2">
                      {results.predictions.map((pred: any, index: number) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <div>
                            <span className="font-medium text-card-foreground">{pred.breed}</span>
                            <span className="text-sm text-muted-foreground ml-2">({pred.origin})</span>
                          </div>
                          <Badge variant={index === 0 ? "default" : "secondary"}>
                            {pred.confidence}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Physical Measurements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-card-foreground">Physical Measurements</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(results.measurements).map(([key, value]) => (
                        <div key={key} className="p-3 bg-muted/30 rounded-lg text-center">
                          <p className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="font-semibold text-card-foreground">{value as string}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Processing Info */}
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Analysis completed in {results.processingTime}. 
                      Ready for BPA integration and audit trail.
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </Card>
          </div>
          
          {/* Demo Note */}
          <div className="mt-8">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Demo Note:</strong> This is a simulated demonstration. 
                The actual AI model processes real livestock images with the same interface and provides 
                actual breed classification and measurements for government use.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;