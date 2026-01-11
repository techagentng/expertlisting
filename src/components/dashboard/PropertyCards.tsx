import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

type PropertyCard = {
  imageSrc: string;
  badge: string;
  title: string;
};

type PropertyCardsProps = {
  cards?: PropertyCard[];
};

export default function PropertyCards({
  cards = [
    {
      imageSrc: "/House1.jpg",
      badge: "Most Clicked",
      title: "Urban Prime Plaza Premiere",
    },
    {
      imageSrc: "/house2.png",
      badge: "Most Watchlisted",
      title: "Urban Prime Plaza Premiere",
    },
    {
      imageSrc: "/house3.png",
      badge: "Hottest Listing",
      title: "Urban Prime Plaza Premiere",
    },
  ],
}: PropertyCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {cards.map((c, index) => (
        <Card key={c.badge} className="relative overflow-visible rounded-2xl p-0">
          <CardContent className="p-0">
            <div className="relative h-80">
              <img
                src={c.imageSrc}
                alt="property"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-10 left-4 space-y-1 text-white">
                <p className="text-xs uppercase tracking-wide">{c.badge}</p>
                <p className="text-lg font-semibold">{c.title}</p>
              </div>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white" />
                <span className="h-2 w-2 rounded-full bg-white/50" />
                <span className="h-2 w-2 rounded-full bg-white/50" />
              </div>
            </div>
          </CardContent>
          {index === 2 && (
            <button
              className="absolute top-1/3 -right-4 z-10 grid h-16 w-16 place-items-center rounded-full bg-zinc-800 shadow-xl transition-transform hover:scale-105 active:scale-95"
              aria-label="Open chat"
            >
              <div className="relative">
                <MessageSquare className="h-6 w-6 fill-white text-white" />
                <MessageSquare className="absolute -right-1.5 -top-1.5 h-5 w-5 fill-white text-white" />
              </div>
            </button>
          )}
        </Card>
      ))}
    </div>
  );
}
