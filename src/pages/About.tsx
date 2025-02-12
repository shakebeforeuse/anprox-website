
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">{t.about.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white p-6">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Co-founder"
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <CardContent className="px-0">
                <h3 className="text-xl font-semibold mb-2">{t.about.john.name}</h3>
                <p className="text-gray-600">{t.about.john.role}</p>
              </CardContent>
            </Card>
            <Card className="bg-white p-6">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Co-founder"
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <CardContent className="px-0">
                <h3 className="text-xl font-semibold mb-2">{t.about.sarah.name}</h3>
                <p className="text-gray-600">{t.about.sarah.role}</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-semibold mb-6">{t.about.philosophy.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t.about.philosophy.text}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">{t.about.offices.ireland.title}</h3>
              </div>
              <p className="text-gray-600">
                {t.about.offices.ireland.description}
              </p>
            </Card>
            <Card className="bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">{t.about.offices.cadiz.title}</h3>
              </div>
              <p className="text-gray-600">
                {t.about.offices.cadiz.description}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
