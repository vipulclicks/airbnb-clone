import React from 'react';
import { LISTING_DATA } from '../../data/listing';
import { UtensilsCrossed, Fan, DoorOpen } from 'lucide-react';

export const HostOverview: React.FC = () => {
  return (
    <div className="py-6 border-b border-[#EBEBEB]">
      {/* Host Avatar & Basic Info */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={LISTING_DATA.host.avatar}
          alt={LISTING_DATA.host.name}
          className="w-12 h-12 rounded-full object-cover border border-[#EBEBEB]"
        />
        <div>
          <h2 className="text-base font-semibold text-[#222222]">
            Hosted by {LISTING_DATA.host.name}
          </h2>
          <p className="text-sm text-[#717171]">
            {LISTING_DATA.host.years}
          </p>
        </div>
      </div>

      {/* Feature Highlights with icons */}
      <div className="space-y-6 pt-2">
        <div className="flex items-start gap-4">
          <UtensilsCrossed className="w-6 h-6 text-[#222222] mt-0.5 shrink-0 stroke-[1.5]" />
          <div>
            <div className="text-base font-semibold text-[#222222]">
              Outdoor entertainment
            </div>
            <p className="text-sm text-[#717171]">
              The pool and alfresco dining are great for summer trips.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Fan className="w-6 h-6 text-[#222222] mt-0.5 shrink-0 stroke-[1.5]" />
          <div>
            <div className="text-base font-semibold text-[#222222]">
              Designed for staying cool
            </div>
            <p className="text-sm text-[#717171]">
              Beat the heat with the A/C and ceiling fan.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <DoorOpen className="w-6 h-6 text-[#222222] mt-0.5 shrink-0 stroke-[1.5]" />
          <div>
            <div className="text-base font-semibold text-[#222222]">
              Self check-in
            </div>
            <p className="text-sm text-[#717171]">
              You can check in with the building staff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
