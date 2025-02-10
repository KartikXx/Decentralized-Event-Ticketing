
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";

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
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Discover & Secure Your Event Tickets
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Experience the future of event ticketing with blockchain technology.
            Secure, transparent, and seamless.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
