import React, { useState } from 'react';
import { LISTING_DATA } from '../../data/listing';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface MoreStaysNearbyProps {
  onToast: (msg: string) => void;
}

export const MoreStaysNearby: React.FC<MoreStaysNearbyProps> = ({ onToast }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [savedStays, setSavedStays] = useState<Record<number, boolean>>({});

  const toggleSave = (idx: number) => {
    setSavedStays((prev) => ({ ...prev, [idx]: !prev[idx] }));
    onToast(!savedStays[idx] ? "Saved to wishlist!" : "Removed from wishlist");
  };

  return (
    <div className="py-10 border-b border-[#EBEBEB]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-semibold text-[#222222]">
          More stays nearby
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[#222222]">
            {currentPage} / 2
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center hover:border-black disabled:opacity-40 disabled:hover:border-[#DDDDDD] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-[#222222]" />
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              disabled={currentPage === 2}
              className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center hover:border-black disabled:opacity-40 disabled:hover:border-[#DDDDDD] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 text-[#222222]" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {LISTING_DATA.moreStaysNearby.map((stay, idx) => (
          <div
            key={idx}
            className="cursor-pointer group flex flex-col"
            onClick={() => onToast(`Navigating to ${stay.title}`)}
          >
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] mb-2 bg-[#F7F7F7]">
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSave(idx);
                }}
                className="absolute top-3 right-3 p-1 text-white/90 hover:text-white drop-shadow-md"
              >
                <Heart
                  className={`w-5 h-5 ${
                    savedStays[idx]
                      ? 'fill-[#FF385C] text-[#FF385C]'
                      : 'fill-black/30 stroke-white stroke-[2]'
                  }`}
                />
              </button>
            </div>

            <h4 className="text-sm font-normal text-[#222222] line-clamp-2 leading-tight mb-1">
              {stay.title}
            </h4>
            <div className="flex items-center gap-1 text-sm text-[#222222]">
              <span className="font-semibold">{stay.price}</span>
              <span className="text-[#717171] text-xs">★ {stay.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
