
import { CalendarDays, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  price: string;
}

const EventCard = ({ title, date, location, imageUrl, price }: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover-scale card-shadow bg-secondary/50 border-white/10">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
            {price} ETH
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-400">
            <CalendarDays className="h-4 w-4 mr-2" />
            {date}
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
