import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Mock data for events
const allEvents = [
  {
    id: 1,
    title: "ETH Global Summit 2024",
    date: "March 15, 2024",
    location: "San Francisco, CA",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2100&q=80",
    price: "0.5",
    category: "conference"
  },
  {
    id: 2,
    title: "Web3 Music Festival",
    date: "April 20, 2024",
    location: "Miami, FL",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2100&q=80",
    price: "0.8",
    category: "music"
  },
  {
    id: 3,
    title: "NFT Art Exhibition",
    date: "May 5, 2024",
    location: "New York, NY",
    imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=2100&q=80",
    price: "0.3",
    category: "art"
  },
  // Add more mock events here
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(allEvents);
  const heroRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  // Handle search
  useEffect(() => {
    const filtered = allEvents.filter(event => 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchQuery]);

  // Animations
  useEffect(() => {
    // Floating elements animation
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

    // Scroll animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: eventsRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(searchRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }).from(".event-card", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.4");

    // Hero section parallax
    gsap.to(heroRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Floating Background Elements */}
      <div ref={floatingElementsRef} className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
        <div className="absolute top-[30%] right-[20%] w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-[20%] left-[30%] w-24 h-24 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-xl" />
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-400/5 blur-3xl" />
        <div className="text-center relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent animate-fade-in">
            The Future of Event Ticketing
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in">
            Secure, transparent, and seamless blockchain-powered events
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="min-h-screen py-20 px-4 relative bg-black/5">
        <div className="container mx-auto">
          {/* Search Bar */}
          <div ref={searchRef} className="max-w-xl mx-auto mb-16 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search events by name, location, or category..."
              className="pl-10 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <EventCard {...event} />
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredEvents.length === 0 && (
            <div className="text-center text-gray-400 mt-8">
              No events found matching your search criteria.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
