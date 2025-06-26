
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const handleLanguageChange = (language: string, code: string) => {
    setCurrentLanguage(code);
    console.log(`Language changed to: ${language}`);
    // Here you would typically implement actual language switching logic
    // such as updating a global context or calling an i18n library
  };

  return (
    <div className="absolute top-6 left-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
            {currentLanguage}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white border shadow-lg">
          <DropdownMenuItem 
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => handleLanguageChange("English", "EN")}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => handleLanguageChange("Türkçe", "TR")}
          >
            Türkçe
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
