
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  const handleFormRedirect = () => {
    window.open("https://forms.gle/aVr2nhrNbWfoxEYA9", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#004aad] to-blue-700">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your Day?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who want to transform their productivity with Orbit's intelligent planning system.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mb-8">
              <div className="flex flex-col items-center">
                <Button 
                  size="lg" 
                  className="bg-[#004aad] hover:bg-blue-700 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 mb-4"
                  onClick={handleFormRedirect}
                >
                  Join the Waitlist
                </Button>
                <p className="text-sm text-gray-500">
                  No credit card required • Be the first to know
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/d36a75ae-fe2f-42ba-9c29-77dc6b99dd66.png" 
                  alt="QR Code for Orbit signup form"
                  className="w-32 h-32 mb-2"
                />
                <p className="text-sm text-gray-500">
                  Scan to join waitlist
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
