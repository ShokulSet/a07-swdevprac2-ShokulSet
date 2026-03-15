import { VENUES_MAP } from "@/data/venues";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venue = VENUES_MAP.get(vid);

  if (!venue) {
    return (
      <main className="p-8">
        <p>Venue not found.</p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <div className="flex flex-wrap gap-8 items-start max-w-4xl mx-auto border border-gray-300 rounded-lg overflow-hidden bg-white">
        <div className="flex-1 min-w-[200px] rounded-l-lg overflow-hidden">
          <img
            src={venue.imgSrc}
            alt={venue.name}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="flex-1 min-w-[200px] p-6 flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">{venue.name}</h1>
        </div>
      </div>
    </main>
  );
}
