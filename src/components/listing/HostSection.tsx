import React from 'react';
import { LISTING_DATA } from '../../data/listing';
import { Sparkles, GraduationCap, ShieldCheck } from 'lucide-react';

interface HostSectionProps {
  onToast: (msg: string) => void;
}

export const HostSection: React.FC<HostSectionProps> = ({ onToast }) => {
  const { host } = LISTING_DATA;

  return (
    <div className="py-10 border-b border-[#EBEBEB]">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-6">
        Meet your host
      </h2>

      <div className="grid grid-cols-3 gap-8 items-start">
        {/* Left: Host Card Profile */}
        <div className="col-span-1 border border-[#DDDDDD] rounded-3xl p-6 shadow-sm bg-white">
          <div className="flex items-center justify-between">
            <div className="relative">
              <img
                src={host.avatar}
                alt={host.name}
                className="w-20 h-20 rounded-full object-cover border border-[#EBEBEB]"
              />
              {/* Red checkmark badge */}
              <div className="absolute bottom-0 right-0 bg-[#FF385C] text-white p-1 rounded-full border-2 border-white">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-[#222222]">{host.reviewsCount}</div>
              <div className="text-xs text-[#717171] font-semibold">Reviews</div>
              <div className="h-2"></div>
              <div className="text-2xl font-bold text-[#222222]">{host.rating} ★</div>
              <div className="text-xs text-[#717171] font-semibold">Rating</div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-[#222222]">{host.name}</h3>
            <p className="text-sm text-[#717171]">{host.years}</p>
          </div>
        </div>

        {/* Center/Right: Co-hosts and Host details */}
        <div className="col-span-2 space-y-6">
          {/* Co-Hosts */}
          <div>
            <h4 className="text-base font-semibold text-[#222222] mb-3">Co-Hosts</h4>
            <div className="grid grid-cols-3 gap-3">
              {host.coHosts.map((cohost, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <img
                    src={cohost.avatar}
                    alt={cohost.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#EBEBEB]"
                  />
                  <span className="text-sm text-[#222222] font-medium truncate">
                    {cohost.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fun facts */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-[#222222]">
              <Sparkles className="w-5 h-5 text-[#222222] stroke-[1.5]" />
              <span>Born in the 80s</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#222222]">
              <GraduationCap className="w-5 h-5 text-[#222222] stroke-[1.5]" />
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>

          {/* Host stats & Message Host button */}
          <div className="pt-2 space-y-4">
            <h4 className="text-base font-semibold text-[#222222]">Host details</h4>
            <div className="text-sm text-[#222222] space-y-1">
              <div>Response rate: {host.responseRate}</div>
              <div>{host.responseTime}</div>
            </div>

            <button
              onClick={() => onToast("Messaging Mirashya Homes")}
              className="border border-[#222222] text-[#222222] hover:bg-[#F7F7F7] px-6 py-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              Message host
            </button>
          </div>

          {/* Airbnb Payment Protection Notice */}
          <div className="flex items-center gap-3 pt-2 text-xs text-[#717171] border-t border-[#EBEBEB]">
            <ShieldCheck className="w-5 h-5 text-[#222222] shrink-0 stroke-[1.5]" />
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
