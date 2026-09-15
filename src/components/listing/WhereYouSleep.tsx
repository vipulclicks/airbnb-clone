import React from 'react';
import { LISTING_DATA } from '../../data/listing';

interface WhereYouSleepProps {
  onPhotoClick?: (photoUrl: string) => void;
}

export const WhereYouSleep: React.FC<WhereYouSleepProps> = ({ onPhotoClick }) => {
  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-6">
        Where you'll sleep
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {LISTING_DATA.sleepingArrangements.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onPhotoClick && onPhotoClick(item.image)}
            className="border border-[#DDDDDD] rounded-xl p-4 hover:border-black transition-colors cursor-pointer group"
          >
            <div className="rounded-lg overflow-hidden mb-4 aspect-[3/2] bg-[#F7F7F7]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-base font-semibold text-[#222222]">
              {item.title}
            </div>
            <div className="text-sm text-[#717171] mt-0.5">
              {item.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
