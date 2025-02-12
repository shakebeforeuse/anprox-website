
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-20 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold bg-white rounded-full shadow-sm border border-gray-100">
              Revolutionizing Access Control
            </span>
          </div>
          
          <h1 className="animate-fade-in opacity-0 text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6" style={{ animationDelay: "0.4s" }}>
            Next Generation RFID Technology
          </h1>
          
          <p className="animate-fade-in opacity-0 text-xl text-gray-600 mb-8 max-w-2xl mx-auto" style={{ animationDelay: "0.6s" }}>
            Transform your facility management with our cutting-edge RFID readers. 
            Seamless integration, real-time monitoring, and enterprise-grade security.
          </p>
          
          <div className="animate-fade-in opacity-0 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.8s" }}>
            <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="h-12 px-8 text-lg">
              View Products
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="RFID Technology"
            className="rounded-xl shadow-2xl mx-auto max-w-4xl w-full object-cover aspect-video"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
