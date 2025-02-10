
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { Card } from "@/components/ui/card";
import { CalendarDays, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const MyTickets = () => {
  useEffect(() => {
    // GSAP animation for page elements
    gsap.from(".ticket-card", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, []);

  // Mock tickets data
  const tickets = [
    {
      id: 1,
      eventName: "ETH Global Summit 2024",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      ticketId: "#0123456789",
    },
    {
      id: 2,
      eventName: "Web3 Music Festival",
      date: "April 20, 2024",
      location: "Miami, FL",
      ticketId: "#9876543210",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          My Tickets
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tickets.map((ticket) => (
            <Card key={ticket.id} className="ticket-card p-6 bg-secondary/50 border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {ticket.eventName}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      {ticket.date}
                    </div>
                    <p className="text-sm text-gray-400">
                      Ticket ID: {ticket.ticketId}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="icon" className="border-primary/20">
                  <QrCode className="h-4 w-4 text-primary" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="w-full">
                  Transfer
                </Button>
                <Button className="w-full">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTickets;
