import React from 'react';

export const PromoBanner: React.FC = () => {
  return (
    <div className="border border-[#DDDDDD] rounded-xl p-3 flex items-center justify-between shadow-[0_1px_4px_rgba(0,0,0,0.04)] bg-white mb-6">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
          {/* Green Tag Icon */}
          <svg className="w-5 h-5 fill-[#22C55E]" viewBox="0 0 24 24">
            <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 6.33 7 5.5 7z" />
          </svg>
        </div>
        <div>
          <div className="text-[13px] font-semibold text-[#222222] leading-tight">
            Get 10% off your next stay.
          </div>
          <span className="text-xs text-[#222222] font-semibold underline cursor-pointer">
            Terms apply
          </span>
        </div>
      </div>

      <button className="px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all border bg-[#F7F7F7] hover:bg-[#EBEBEB] text-[#222222] border-[#DDDDDD] cursor-pointer">
        Claim
      </button>
    </div>
  );
};
