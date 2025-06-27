import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const Footer = () => {
  const handleAboutUs = () => {
    // Navigate to features section
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCareers = () => {
    // Show coming soon message with smooth toast
    toast("soon :)");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@orbitapp.tech";
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">orbit</h3>
            <p className="text-gray-400">your own digital daily planner</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button 
              variant="ghost" 
              className="text-white hover:text-[#004aad] hover:bg-white/10"
              onClick={handleAboutUs}
            >
              About Us
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-[#004aad] hover:bg-white/10"
              onClick={handleCareers}
            >
              Careers
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-[#004aad] hover:bg-white/10"
              onClick={handleEmailClick}
            >
              info@orbitapp.tech
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Orbit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
