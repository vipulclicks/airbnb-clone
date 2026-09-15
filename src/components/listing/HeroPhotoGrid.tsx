import React from 'react';
import { HERO_PHOTOS } from '../../data/listing';

interface HeroPhotoGridProps {
  onOpenPhotoTour: () => void;
  onOpenPhoto: (photoId: string) => void;
}

export const HeroPhotoGrid: React.FC<HeroPhotoGridProps> = ({
  onOpenPhotoTour,
  onOpenPhoto,
}) => {
  return (
    <div id="photos" className="relative rounded-2xl overflow-hidden mt-1 mb-5">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[325px] w-full">
        {/* Main Photo (Left Half: cols 1-2, rows 1-2) */}
        <div
          onClick={() => onOpenPhoto(HERO_PHOTOS[0].id)}
          className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden group"
        >
          <img
            src={HERO_PHOTOS[0].url}
            alt={HERO_PHOTOS[0].title}
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </div>

        {/* Top Right Photo 1 */}
        <div
          onClick={() => onOpenPhoto(HERO_PHOTOS[1].id)}
          className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group"
        >
          <img
            src={HERO_PHOTOS[1].url}
            alt={HERO_PHOTOS[1].title}
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </div>

        {/* Top Right Photo 2 (Jacuzzi) */}
        <div
          onClick={() => onOpenPhoto(HERO_PHOTOS[2].id)}
          className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group"
        >
          <img
            src={HERO_PHOTOS[2].url}
            alt={HERO_PHOTOS[2].title}
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </div>

        {/* Bottom Right Photo 1 (Bedroom) */}
        <div
          onClick={() => onOpenPhoto(HERO_PHOTOS[3].id)}
          className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group"
        >
          <img
            src={HERO_PHOTOS[3].url}
            alt={HERO_PHOTOS[3].title}
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </div>

        {/* Bottom Right Photo 2 (Amor de Goa exterior) */}
        <div
          onClick={() => onOpenPhoto(HERO_PHOTOS[4].id)}
          className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group"
        >
          <img
            src={HERO_PHOTOS[4].url}
            alt={HERO_PHOTOS[4].title}
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </div>
      </div>

      {/* "Show all photos" Overlay Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenPhotoTour();
        }}
        className="absolute bottom-3 right-3 z-10 bg-white hover:bg-[#F7F7F7] text-[#222222] border border-[#222222] px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 cursor-pointer"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
          <circle cx="2" cy="2" r="1.5" />
          <circle cx="8" cy="2" r="1.5" />
          <circle cx="14" cy="2" r="1.5" />
          <circle cx="2" cy="8" r="1.5" />
          <circle cx="8" cy="8" r="1.5" />
          <circle cx="14" cy="8" r="1.5" />
          <circle cx="2" cy="14" r="1.5" />
          <circle cx="8" cy="14" r="1.5" />
          <circle cx="14" cy="14" r="1.5" />
        </svg>
        <span>Show all photos</span>
      </button>
    </div>
  );
};
