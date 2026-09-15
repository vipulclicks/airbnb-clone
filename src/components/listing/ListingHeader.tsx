import React, { useState } from 'react';
import { Share, Heart } from 'lucide-react';

interface ListingHeaderProps {
  title: string;
  onToast: (msg: string) => void;
}

export const ListingHeader: React.FC<ListingHeaderProps> = ({ title, onToast }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    onToast("Share options");
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="pt-4 pb-2.5 flex items-baseline justify-between gap-4">
      <div>
        <h1 className="text-[22px] font-semibold text-[#222222] tracking-tight leading-tight">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3.5 text-xs font-semibold text-[#222222]">
        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 underline underline-offset-2 hover:bg-[#F7F7F7] active:bg-[#EBEBEB] px-2 py-1 rounded-md transition-colors cursor-pointer"
        >
          <Share className="w-3.5 h-3.5" />
          <span>Share</span>
        </button>

        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 underline underline-offset-2 hover:bg-[#F7F7F7] active:bg-[#EBEBEB] px-2 py-1 rounded-md transition-colors cursor-pointer"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${
              isSaved ? 'fill-[#FF385C] text-[#FF385C]' : 'text-[#222222]'
            }`}
          />
          <span>{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
};
