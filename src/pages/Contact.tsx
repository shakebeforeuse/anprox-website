
import Navbar from "@/components/Navbar";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-8">{t.contact.title}</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <Phone className="w-12 h-12 text-primary" />
              </div>
              <p className="text-2xl font-medium text-primary mb-4">+34 956 123 456</p>
              <p className="text-xl text-gray-600">
                {t.contact.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
