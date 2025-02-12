
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, Clock, ClipboardCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Products = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const products = [
    {
      title: t.products.accessControl.title,
      description: t.products.accessControl.description,
      icon: Fingerprint,
      features: t.products.accessControl.features,
    },
    {
      title: t.products.timeTracking.title,
      description: t.products.timeTracking.description,
      icon: Clock,
      features: t.products.timeTracking.features,
    },
    {
      title: t.products.checkIn.title,
      description: t.products.checkIn.description,
      icon: ClipboardCheck,
      features: t.products.checkIn.features,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">{t.products.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.products.subtitle}
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
