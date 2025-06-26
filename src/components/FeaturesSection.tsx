
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Orbit, Circle, CircleDot } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Orbit className="w-12 h-12 text-[#004aad]" />,
      title: "AI-Powered Planning",
      description: "Let artificial intelligence optimize your daily schedule based on your habits, priorities, and goals for maximum productivity."
    },
    {
      icon: <CircleDot className="w-12 h-12 text-[#004aad]" />,
      title: "Smart Suggestions",
      description: "Receive personalized recommendations for tasks, breaks, and activities that align with your energy levels and objectives."
    },
    {
      icon: <Circle className="w-12 h-12 text-[#004aad]" />,
      title: "Effectiveness Maximization",
      description: "Track and analyze your productivity patterns to continuously improve your daily effectiveness and achieve your goals faster."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Orbit?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of personal productivity with our intelligent planning system
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#004aad]/20"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4 animate-pulse">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
