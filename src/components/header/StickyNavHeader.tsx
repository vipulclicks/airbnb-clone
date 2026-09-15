import React from 'react';
import { LISTING_DATA } from '../../data/listing';

interface StickyNavHeaderProps {
  visible: boolean;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onReserveClick: () => void;
}

export const StickyNavHeader: React.FC<StickyNavHeaderProps> = ({
  visible,
  activeSection,
  onNavigate,
  onReserveClick,
}) => {
  if (!visible) return null;

  const navItems = [
    { id: 'photos', label: 'Photos' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Location' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-[#EBEBEB] transition-transform duration-200 shadow-sm animate-fade-in">
      <div className="max-w-[780px] mx-auto px-4 md:px-0 h-16 flex items-center justify-between">
        {/* Left: Section links */}
        <nav className="flex items-center gap-6 h-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`h-full text-xs font-semibold relative transition-colors flex items-center ${
                  isActive ? 'text-[#222222]' : 'text-[#717171] hover:text-[#222222]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#222222] rounded-t-sm"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Quick Price and Reserve CTA */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs font-semibold text-[#222222]">
              {LISTING_DATA.priceTotal} <span className="font-normal text-[11px] text-[#717171]">for {LISTING_DATA.priceNights}</span>
            </div>
            <div className="text-[11px] font-semibold text-[#222222] flex items-center gap-1 justify-end">
              <span>★ {LISTING_DATA.overallRating}</span>
              <span className="text-[#717171] font-normal">· {LISTING_DATA.totalReviews} reviews</span>
            </div>
          </div>
          <button
            onClick={onReserveClick}
            className="bg-[#E61E4D] hover:bg-[#D70466] text-white px-5 py-2 rounded-lg font-semibold text-xs transition-transform active:scale-95 shadow-sm cursor-pointer"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};
