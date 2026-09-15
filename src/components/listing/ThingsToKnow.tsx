import React from 'react';
import { LISTING_DATA } from '../../data/listing';
import { Calendar, Key, Shield } from 'lucide-react';

interface ThingsToKnowProps {
  onToast: (msg: string) => void;
}

export const ThingsToKnow: React.FC<ThingsToKnowProps> = ({ onToast }) => {
  const { thingsToKnow } = LISTING_DATA;

  return (
    <div className="py-10 border-b border-[#EBEBEB]">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-6">
        Things to know
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {/* Cancellation policy */}
        <div className="space-y-3">
          <Calendar className="w-5 h-5 text-[#222222] stroke-[1.5]" />
          <h3 className="text-base font-semibold text-[#222222]">
            {thingsToKnow.cancellation.title}
          </h3>
          <p className="text-sm text-[#717171] leading-relaxed">
            {thingsToKnow.cancellation.desc}
          </p>
          <p className="text-sm text-[#717171]">
            {thingsToKnow.cancellation.sub}
          </p>
          <button
            onClick={() => onToast("Full cancellation policy details")}
            className="text-sm font-semibold text-[#222222] underline block pt-1 hover:text-black cursor-pointer"
          >
            Learn more
          </button>
        </div>

        {/* House rules */}
        <div className="space-y-3">
          <Key className="w-5 h-5 text-[#222222] stroke-[1.5]" />
          <h3 className="text-base font-semibold text-[#222222]">
            {thingsToKnow.houseRules.title}
          </h3>
          <div className="space-y-1 text-sm text-[#717171]">
            {thingsToKnow.houseRules.rules.map((rule, idx) => (
              <div key={idx}>{rule}</div>
            ))}
          </div>
          <button
            onClick={() => onToast("Additional house rules: No smoking inside, quiet hours after 10 PM")}
            className="text-sm font-semibold text-[#222222] underline block pt-1 hover:text-black cursor-pointer"
          >
            Learn more
          </button>
        </div>

        {/* Safety & property */}
        <div className="space-y-3">
          <Shield className="w-5 h-5 text-[#222222] stroke-[1.5]" />
          <h3 className="text-base font-semibold text-[#222222]">
            {thingsToKnow.safety.title}
          </h3>
          <div className="space-y-1 text-sm text-[#717171]">
            {thingsToKnow.safety.rules.map((rule, idx) => (
              <div key={idx}>{rule}</div>
            ))}
          </div>
          <button
            onClick={() => onToast("Safety features and emergency contacts")}
            className="text-sm font-semibold text-[#222222] underline block pt-1 hover:text-black cursor-pointer"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
