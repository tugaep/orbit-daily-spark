
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#004aad] to-blue-700">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your Day?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their productivity with Orbit's intelligent planning system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-[#004aad] hover:bg-blue-700 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-gray-500">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
