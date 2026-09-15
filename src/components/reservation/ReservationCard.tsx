import React from 'react';
import { LISTING_DATA } from '../../data/listing';
import { ChevronDown, Flag } from 'lucide-react';

interface ReservationCardProps {
  onReserveClick: () => void;
  onToast: (msg: string) => void;
}

export const ReservationCard: React.FC<ReservationCardProps> = ({
  onReserveClick,
  onToast,
}) => {
  return (
    <div className="sticky top-20 w-[260px]">
      <div className="border border-[#DDDDDD] rounded-2xl p-4 shadow-[0_6px_16px_rgba(0,0,0,0.12)] bg-white">
        {/* Header Price */}
        <div className="mb-4 flex items-baseline gap-1">
          <span className="text-[19px] font-bold text-[#222222] underline decoration-1 underline-offset-2">
            {LISTING_DATA.priceTotal}
          </span>
          <span className="text-[13px] text-[#222222] font-normal">
            for {LISTING_DATA.priceNights}
          </span>
        </div>

        {/* Input box matching reference */}
        <div className="border border-[#B0B0B0] rounded-xl overflow-hidden mb-3 divide-y divide-[#B0B0B0] text-xs">
          <div className="grid grid-cols-2 divide-x divide-[#B0B0B0]">
            <div className="p-2">
              <div className="font-extrabold tracking-wider text-[9px] text-[#222222]">
                CHECK-IN
              </div>
              <div className="text-xs font-normal text-[#222222] mt-0.5">
                {LISTING_DATA.dates.checkIn}
              </div>
            </div>

            <div className="p-2">
              <div className="font-extrabold tracking-wider text-[9px] text-[#222222]">
                CHECKOUT
              </div>
              <div className="text-xs font-normal text-[#222222] mt-0.5">
                {LISTING_DATA.dates.checkOut}
              </div>
            </div>
          </div>

          <div className="p-2 flex items-center justify-between">
            <div>
              <div className="font-extrabold tracking-wider text-[9px] text-[#222222]">
                GUESTS
              </div>
              <div className="text-xs font-normal text-[#222222] mt-0.5">
                {LISTING_DATA.guests}
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-[#222222]" />
          </div>
        </div>

        {/* Free cancellation banner */}
        <div className="bg-[#F7F7F7] rounded-lg py-2 px-2 text-center mb-3">
          <span className="text-[11px] text-[#222222]">
            Free cancellation before{' '}
            <strong className="font-semibold">{LISTING_DATA.dates.freeCancelDate}</strong>
          </span>
        </div>

        {/* Reserve CTA Button */}
        <button
          onClick={onReserveClick}
          className="w-full bg-[#E61E4D] hover:bg-[#D70466] active:scale-[0.98] text-white py-2.5 rounded-lg font-semibold text-sm shadow-sm transition-all cursor-pointer"
        >
          Reserve
        </button>

        {/* Subtext */}
        <div className="text-center mt-3 text-xs text-[#717171]">
          You won't be charged yet
        </div>
      </div>

      {/* Report this listing */}
      <div className="text-center mt-4">
        <button
          onClick={() => onToast("Report listing dialogue")}
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#717171] underline hover:text-[#222222] cursor-pointer"
        >
          <Flag className="w-3 h-3 fill-[#717171]" />
          <span>Report this listing</span>
        </button>
      </div>
    </div>
  );
};
