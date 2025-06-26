
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  return (
    <div className="absolute top-6 left-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
            EN
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white border shadow-lg">
          <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
            English
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
            Türkçe
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
