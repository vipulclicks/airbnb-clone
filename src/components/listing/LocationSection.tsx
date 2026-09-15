import React from 'react';
import { LISTING_DATA } from '../../data/listing';
import { ChevronRight, Plus, Minus, Search } from 'lucide-react';

interface LocationSectionProps {
  onToast: (msg: string) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onToast }) => {
  return (
    <div id="location" className="py-10 border-b border-[#EBEBEB]">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-2">
        Where you'll be
      </h2>
      <p className="text-base text-[#222222] mb-6">
        {LISTING_DATA.location.city}
      </p>

      {/* Map Card Container */}
      <div className="relative rounded-2xl overflow-hidden border border-[#DDDDDD] h-72 mb-4 group bg-[#DCE7EB]">
        <img
          src={LISTING_DATA.location.mapImage}
          alt="Map of Candolim, Goa"
          className="w-full h-full object-cover"
        />

        {/* Floating Map Controls */}
        <div className="absolute top-4 left-4 flex flex-col gap-1 bg-white rounded-lg shadow-md border border-[#DDDDDD] p-1">
          <button
            onClick={() => onToast("Search nearby places")}
            className="p-1.5 hover:bg-[#F7F7F7] rounded text-[#222222]"
            title="Search map"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-1 bg-white rounded-lg shadow-md border border-[#DDDDDD] p-1">
          <button
            onClick={() => onToast("Zoom in")}
            className="p-1.5 hover:bg-[#F7F7F7] rounded text-[#222222]"
            title="Zoom in"
          >
            <Plus className="w-4 h-4" />
          </button>
          <div className="h-px bg-[#DDDDDD] mx-1"></div>
          <button
            onClick={() => onToast("Zoom out")}
            className="p-1.5 hover:bg-[#F7F7F7] rounded text-[#222222]"
            title="Zoom out"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-sm font-semibold text-[#222222] mb-6">
        Exact location will be provided after booking.
      </p>

      {/* Neighbourhood highlights */}
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-[#222222]">
          Neighbourhood highlights
        </h3>
        <p className="text-base text-[#717171] leading-relaxed">
          {LISTING_DATA.location.highlights}
        </p>
        <button
          onClick={() => onToast("Candolim is known for water sports, beach shacks, and vibrant dining.")}
          className="text-base font-semibold text-[#222222] underline flex items-center gap-1 hover:text-black pt-1"
        >
          <span>Show more</span>
          <ChevronRight className="w-4 h-4 mt-0.5" />
        </button>
      </div>
    </div>
  );
};
