
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, Clock, ClipboardCheck } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Access Control Module",
      description: "Secure entry management system supporting keyfobs, cards, and bracelets",
      icon: Fingerprint,
      features: [
        "Wireless RFID reading capabilities",
        "Multi-format identifier support",
        "Real-time access management",
        "Advanced security protocols",
      ],
    },
    {
      title: "Time Tracking Module",
      description: "Accurate employee time tracking system with advanced clock in/out features",
      icon: Clock,
      features: [
        "Precise attendance tracking",
        "Multiple check-point support",
        "Real-time monitoring",
        "Automated reporting",
      ],
    },
    {
      title: "Check-in Module",
      description: "Comprehensive system for tracking surveillance and maintenance rounds",
      icon: ClipboardCheck,
      features: [
        "Route optimization",
        "Real-time monitoring",
        "Detailed activity logs",
        "Performance analytics",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced RFID solutions designed for modern business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
