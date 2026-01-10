import { Card, CardContent } from "@/components/ui/card";

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
      {cards.map((c) => (
        <Card key={c.badge} className="relative overflow-hidden rounded-2xl">
          <CardContent className="p-0">
            <div className="relative h-72">
              <img src={c.imageSrc} alt="property" className="h-full w-full object-cover" />
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
        </Card>
      ))}
    </div>
  );
}
