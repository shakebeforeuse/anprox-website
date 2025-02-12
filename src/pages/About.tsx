
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated problem solvers with a passion for simplicity
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
                <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                <p className="text-gray-600">Co-founder & Technical Director</p>
              </CardContent>
            </Card>
            <Card className="bg-white p-6">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Co-founder"
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <CardContent className="px-0">
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-gray-600">Co-founder & Operations Director</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-semibold mb-6">Our Philosophy</h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe in the power of simplicity. Our life's work has been dedicated to solving complex problems with elegant, straightforward solutions. This philosophy guides everything we do, from product design to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Northern Ireland Office</h3>
              </div>
              <p className="text-gray-600">
                Our research and development hub, focusing on innovative RFID solutions.
              </p>
            </Card>
            <Card className="bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Cádiz HQ</h3>
              </div>
              <p className="text-gray-600">
                Our headquarters in the south of Spain, where we coordinate our global operations.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
