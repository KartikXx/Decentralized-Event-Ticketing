import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import gsap from "gsap";

// Mock data for events
const events = [
  {
    id: 1,
    title: "ETH Global Summit 2024",
    date: "March 15, 2024",
    location: "San Francisco, CA",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2100&q=80",
    price: "0.5",
  },
  {
    id: 2,
    title: "Web3 Music Festival",
    date: "April 20, 2024",
    location: "Miami, FL",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2100&q=80",
    price: "0.8",
  },
  {
    id: 3,
    title: "NFT Art Exhibition",
    date: "May 5, 2024",
    location: "New York, NY",
    imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=2100&q=80",
    price: "0.3",
  },
];

const Index = () => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floatingElementsRef.current) {
      const elements = floatingElementsRef.current.children;
      
      Array.from(elements).forEach((element, index) => {
        gsap.to(element, {
          y: "random(-20, 20)",
          x: "random(-20, 20)",
          rotation: "random(-15, 15)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Floating Background Elements */}
      <div ref={floatingElementsRef} className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
        <div className="absolute top-[30%] right-[20%] w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-[20%] left-[30%] w-24 h-24 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-xl" />
        
        {/* Floating Cryptocurrency Elements - Only near header */}
        <img 
          src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
          alt="Ethereum"
          className="absolute top-[15%] right-[15%] w-12 h-12 opacity-50"
        />
        <img 
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" 
          alt="Bitcoin"
          className="absolute top-[20%] left-[20%] w-10 h-10 opacity-50"
        />
      </div>

      <Navigation />
      
      {/* Hero Section with enhanced styling */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-400/5 blur-3xl -z-10" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Discover & Secure Your Event Tickets
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in">
            Experience the future of event ticketing with blockchain technology.
            Secure, transparent, and seamless.
          </p>
        </div>
      </section>

      {/* Events Grid with enhanced styling */}
      <section className="pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
