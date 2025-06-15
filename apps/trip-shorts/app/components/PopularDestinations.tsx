import Image from "next/image";
import { popularDestinations } from "../../lib/constants/locations";

export function PopularDestinations() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-800 mb-3">인기 여행지</h2>
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {popularDestinations.map((dest, index) => (
          <div key={index} className="flex-shrink-0 text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2 ring-2 ring-blue-200">
              <Image
                src={dest.image}
                alt={dest.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600">{dest.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
