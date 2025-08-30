import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Github, 
  ExternalLink, 
  Shield, 
  Users, 
  BookOpen,
  Building2
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Demo", href: "#demo" },
    { label: "API Docs", href: "#api" },
    { label: "Ministry Integration", href: "#impact" },
    { label: "Contact", href: "#contact" }
  ];

  const complianceItems = [
    "Data encrypted and auditable",
    "Stored only for program use", 
    "Government of India standards",
    "Role-based access control"
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Team Branding */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                Hacktronics
              </h3>
              <p className="text-lg text-muted-foreground mb-2">
                "नए भारत की शुरुआत डिजिटल क्रांति से पशुपालकों के हित की बात"
              </p>
              <p className="text-sm text-muted-foreground">
                Student innovators building AI + AgriTech solutions for national missions
              </p>
            </div>
            
            <Card className="bg-muted/30 p-6 mb-6">
              <h4 className="font-semibold mb-3 text-card-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Mission Statement
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering India's livestock sector through responsible AI innovation, 
                supporting government initiatives for breed improvement and rural development.
              </p>
            </Card>
            
            <div className="text-center lg:text-left">
              <p className="text-lg font-medium text-primary mb-2">
                "सटीक मूल्यांकन, सुरक्षित भविष्य"
              </p>
              <p className="text-sm text-muted-foreground">
                Accurate Scoring, Reliable Future
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-card-foreground">Resources</h5>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <BookOpen className="w-4 h-4" />
                  API Documentation
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                  Open Source Code
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Research Papers
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact & Compliance */}
          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">Contact & Support</h4>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:contact@hacktronics.ai"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@hacktronics.ai
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Ministry Partnership Ready
                </span>
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="w-full mb-6">
              <Mail className="w-4 h-4" />
              Request Pilot Program
            </Button>
            
            {/* Compliance */}
            <Card className="bg-muted/30 p-4">
              <h5 className="font-medium mb-3 text-card-foreground flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Compliance Note
              </h5>
              <div className="space-y-1">
                {complianceItems.map((item, index) => (
                  <p key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                    <span className="text-primary">•</span>
                    {item}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Hacktronics. Built for the Rashtriya Gokul Mission & Digital India initiatives.
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-xs">
                AI-Powered Livestock Solutions
              </Badge>
              <Badge variant="outline" className="text-xs">
                Government Grade Security
              </Badge>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              In compliance with Government of India data protection standards. 
              Aligned with Ministry of Fisheries, Animal Husbandry & Dairying objectives.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;