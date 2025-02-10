
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-semibold text-white">
            EventChain
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
              Discover
            </Link>
            <Link to="/my-tickets" className="text-sm text-gray-300 hover:text-white transition-colors">
              My Tickets
            </Link>
            <Link to="/organize" className="text-sm text-gray-300 hover:text-white transition-colors">
              Organize
            </Link>
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
