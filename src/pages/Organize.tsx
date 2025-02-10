
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, TrendingUp, Ticket, Users } from "lucide-react";

const Organize = () => {
  useEffect(() => {
    // GSAP animation for page elements
    gsap.from(".dashboard-card", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, []);

  const stats = [
    { title: "Total Sales", value: "1,234", icon: TrendingUp },
    { title: "Active Events", value: "12", icon: Ticket },
    { title: "Total Attendees", value: "3,456", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Event Dashboard
          </h1>
          <Button className="bg-primary hover:bg-primary/90">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="dashboard-card p-6 bg-secondary/50 border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                </div>
                <stat.icon className="h-8 w-8 text-primary opacity-80" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organize;
