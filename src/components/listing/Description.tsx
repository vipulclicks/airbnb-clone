import React, { useState } from 'react';
import { LISTING_DATA } from '../../data/listing';
import { ChevronRight, X } from 'lucide-react';

export const Description: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      {/* Translation banner */}
      <div className="bg-[#F7F7F7] rounded-xl p-4 text-sm text-[#222222] mb-6 flex items-center justify-between">
        <span>
          Some info has been automatically translated.{' '}
          <button className="font-semibold underline hover:text-black">
            Show original
          </button>
        </span>
      </div>

      {/* Description Snippet */}
      <div className="space-y-4 text-base text-[#222222] leading-relaxed line-clamp-4 whitespace-pre-line">
        {LISTING_DATA.description}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="mt-4 text-base font-semibold text-[#222222] underline flex items-center gap-1 hover:text-black"
      >
        <span>Show more</span>
        <ChevronRight className="w-4 h-4 mt-0.5" />
      </button>

      {/* Full Description Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-[#EBEBEB] flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#222222]">About this space</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 text-base text-[#222222] leading-relaxed whitespace-pre-line">
              {LISTING_DATA.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
