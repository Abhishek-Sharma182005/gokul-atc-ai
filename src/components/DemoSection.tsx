import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { API_CONFIG } from "@/config/api";
import { 
  Upload, 
  Camera, 
  FileImage, 
  CheckCircle, 
  AlertTriangle,
  Cpu,
  Target,
  Wifi,
  WifiOff
} from "lucide-react";
// Abhishek Sharma - Kamdhenu AI Professional Interface
// API endpoint is now managed in /src/config/api.ts for easy updates

const DemoSection = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [dragOver, setDragOver] = useState(false);
  const [apiStatus, setApiStatus] = useState<'online' | 'offline' | 'checking'>('checking');
  const { toast } = useToast();

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setResults(null);
    processImageWithAI(file);
  };

  const checkApiStatus = async () => {
    try {
      const response = await fetch(API_CONFIG.GRADIO_ENDPOINT.replace(API_CONFIG.PREDICT_ENDPOINT, API_CONFIG.HEALTH_CHECK), {
        method: 'GET',
        signal: AbortSignal.timeout(API_CONFIG.STATUS_CHECK_TIMEOUT)
      });
      setApiStatus(response.ok ? 'online' : 'offline');
    } catch (error) {
      setApiStatus('offline');
    }
  };

  // Check API status on component mount
  useState(() => {
    checkApiStatus();
  });

  const processImageWithAI = async (file: File) => {
    setIsProcessing(true);
    
    try {
      const formData = new FormData();
      formData.append("data", file);  // Gradio expects "data" key

      const startTime = Date.now();
      const response = await fetch(API_CONFIG.GRADIO_ENDPOINT, {
        method: "POST",
        body: formData,
        signal: AbortSignal.timeout(API_CONFIG.REQUEST_TIMEOUT)
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const processingTime = ((Date.now() - startTime) / 1000).toFixed(1);

      // Gradio returns data in format: { data: [prediction_result] }
      const prediction = data.data[0];
      
      setResults({
        predicted_breed: prediction.label || prediction.breed,
        confidence: prediction.confidence || prediction.confidences?.[0]?.confidence || 0,
        processingTime: `${processingTime}s`,
        timestamp: new Date().toLocaleString()
      });

      toast({
        title: "Analysis Complete",
        description: `Detected: ${prediction.label || prediction.breed} (${((prediction.confidence || 0) * 100).toFixed(1)}% confidence)`,
      });

    } catch (error: any) {
      console.error("Error processing image:", error);
      
      if (error.name === 'AbortError') {
        toast({
          title: "Request Timeout",
          description: "The analysis took too long. Please try again.",
          variant: "destructive"
        });
      } else if (error.message.includes('Failed to fetch')) {
        setApiStatus('offline');
        toast({
          title: "Gradio Backend Offline",
          description: "Cannot connect to AI model. Please ensure your Gradio app is running in Colab.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Analysis Failed",
          description: error.message || "An error occurred during image analysis.",
          variant: "destructive"
        });
      }
      
      setResults(null);
    } finally {
      setIsProcessing(false);
    }
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
          <div className="mt-4 text-sm text-muted-foreground">
            <code className="bg-muted px-2 py-1 rounded text-xs">Endpoint: {API_CONFIG.GRADIO_ENDPOINT}</code>
          </div>
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
                  {/* Main Prediction Result */}
                  <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold text-primary mb-2">Detected Breed</h4>
                    <div className="text-3xl font-bold text-primary mb-2">{results.predicted_breed}</div>
                    <Badge variant="default" className="text-lg px-4 py-1">
                      {results.confidence.toFixed(1)}% confidence
                    </Badge>
                  </div>
                  
                  {/* Analysis Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Processing Time</p>
                      <p className="font-semibold text-card-foreground text-lg">{results.processingTime}</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Analysis Time</p>
                      <p className="font-semibold text-card-foreground text-sm">{results.timestamp}</p>
                    </div>
                  </div>
                  
                  {/* Backend Status */}
                  <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                    {apiStatus === 'online' ? (
                      <>
                        <Wifi className="w-5 h-5 text-primary" />
                        <span className="text-sm text-card-foreground">Connected to AI Model Backend</span>
                      </>
                    ) : (
                      <>
                        <WifiOff className="w-5 h-5 text-destructive" />
                        <span className="text-sm text-muted-foreground">Backend Offline</span>
                      </>
                    )}
                  </div>
                  
                  {/* Processing Info */}
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Real AI analysis completed using final_model.keras with 41 Indian cattle/buffalo breeds. 
                      Ready for BPA integration and audit trail.
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </Card>
          </div>
          
          {/* Backend Instructions */}
          <div className="mt-8">
            <Alert className="border-primary/20 bg-primary/5">
              <AlertTriangle className="h-4 w-4 text-primary" />
              <AlertDescription className="text-card-foreground">
                <strong>🚀 Kamdhenu AI Backend:</strong> Currently connected to {API_CONFIG.GRADIO_ENDPOINT}. 
                To update quickly, run in browser console: <code>updateApiEndpoint("your-new-url")</code> or edit /src/config/api.ts. 
                Ensure your Gradio app is running with <code>demo.launch(share=True)</code> for public access.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;