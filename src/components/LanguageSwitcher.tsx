
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: 'en' | 'tr', displayName: string) => {
    setLanguage(newLanguage);
    console.log(`Language changed to: ${displayName}`);
  };

  const getDisplayLanguage = () => {
    return language === 'en' ? 'EN' : 'TR';
  };

  return (
    <div className="absolute top-6 left-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
            {getDisplayLanguage()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white border shadow-lg">
          <DropdownMenuItem 
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => handleLanguageChange('en', 'English')}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => handleLanguageChange('tr', 'Türkçe')}
          >
            Türkçe
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
