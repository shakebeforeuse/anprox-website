
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const UseCases = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const useCases = [
    {
      title: t.useCases.facilities.title,
      description: t.useCases.facilities.description,
      icon: Building2,
      details: t.useCases.facilities.details,
    },
    {
      title: t.useCases.timeTracking.title,
      description: t.useCases.timeTracking.description,
      icon: Users,
      details: t.useCases.timeTracking.details,
    },
    {
      title: t.useCases.maintenance.title,
      description: t.useCases.maintenance.description,
      icon: Shield,
      details: t.useCases.maintenance.details,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">{t.useCases.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.useCases.subtitle}
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
