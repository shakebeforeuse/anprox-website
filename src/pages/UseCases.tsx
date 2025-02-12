
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Shield } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      title: "Facilities Access Control",
      description: "Comprehensive wireless access control system for managing multiple entry points",
      icon: Building2,
      details: [
        "Wireless operation up to hundreds of meters",
        "Support for multiple RFID formats",
        "Group-based access management",
        "Time-based access rules",
        "Handles hundreds of users and locks",
      ],
    },
    {
      title: "Employee Time Tracking",
      description: "Advanced time and attendance system with multi-point verification",
      icon: Users,
      details: [
        "Multi-point clock in/out capability",
        "Photo verification system",
        "Physical presence confirmation",
        "Real-time attendance monitoring",
        "Automated time tracking",
      ],
    },
    {
      title: "Maintenance & Surveillance Check-in",
      description: "Reliable system for tracking and logging maintenance and security rounds",
      icon: Shield,
      details: [
        "Real-time round tracking",
        "Detailed activity logging",
        "Performance monitoring",
        "Route optimization",
        "Compliance reporting",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Use Cases</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our RFID solutions can transform your operations
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex md:flex-row gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{useCase.title}</CardTitle>
                    <CardDescription className="text-lg mb-4">
                      {useCase.description}
                    </CardDescription>
                    <CardContent className="px-0">
                      <ul className="grid md:grid-cols-2 gap-2">
                        {useCase.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default UseCases;
