import React from 'react';
import { LISTING_DATA } from '../../data/listing';

export const GuestFavoriteCard: React.FC = () => {
  return (
    <div className="border border-[#DDDDDD] rounded-2xl py-3.5 px-4 flex items-center justify-between my-5 bg-white shadow-sm">
      {/* Left: Laurel Wreath & Label matching original */}
      <div className="flex items-center gap-2 shrink-0">
        <img
          src="photos/laurel_wreath_text.png"
          alt="Guest favourite"
          className="h-9 w-auto object-contain"
        />
      </div>

      {/* Center: Reassurance Text */}
      <div className="text-left px-2 max-w-[220px]">
        <p className="text-[13px] font-semibold text-[#222222] leading-snug">
          One of the most loved homes on Airbnb, according to guests
        </p>
      </div>

      {/* Right: Rating & Review count */}
      <div className="flex items-center gap-3.5 shrink-0">
        <div className="text-center">
          <div className="text-base font-bold text-[#222222]">
            {LISTING_DATA.overallRating}
          </div>
          <div className="flex text-[9px] text-[#222222] tracking-tighter">
            ★★★★★
          </div>
        </div>

        <div className="h-7 w-px bg-[#DDDDDD]"></div>

        <div className="text-center">
          <div className="text-base font-bold text-[#222222]">
            {LISTING_DATA.totalReviews}
          </div>
          <div className="text-[11px] font-semibold text-[#222222] underline">
            Reviews
          </div>
        </div>
      </div>
    </div>
  );
};
