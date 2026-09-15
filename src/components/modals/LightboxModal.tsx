import React, { useEffect } from 'react';
import { ALL_PHOTOS } from '../../data/listing';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxModalProps {
  currentPhotoId: string;
  onBackToGrid: () => void;
  onClose: () => void;
  onNavigatePhoto: (photoId: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  currentPhotoId,
  onBackToGrid,
  onClose,
  onNavigatePhoto,
}) => {
  const currentIndex = Math.max(
    0,
    ALL_PHOTOS.findIndex((p) => p.id === currentPhotoId)
  );
  const currentPhoto = ALL_PHOTOS[currentIndex] || ALL_PHOTOS[0];
  const totalCount = ALL_PHOTOS.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigatePhoto(ALL_PHOTOS[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalCount - 1) {
      onNavigatePhoto(ALL_PHOTOS[currentIndex + 1].id);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalCount]);

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col select-none animate-fade-in">
      {/* Lightbox Top Header matching screenshot */}
      <header className="h-16 px-6 border-b border-[#EBEBEB] flex items-center justify-between">
        {/* Left: 9-dot grid icon to go back to Photo Tour Grid */}
        <button
          onClick={onBackToGrid}
          className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors cursor-pointer text-[#222222]"
          title="Back to all photos grid"
        >
          {/* 9-dot grid icon */}
          <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
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
        </button>

        {/* Center: Current Room name */}
        <h3 className="text-sm font-semibold text-[#222222]">
          {currentPhoto.room}
        </h3>

        {/* Right: Counter and Close */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold text-[#222222]">
            {currentIndex + 1} of {totalCount}
          </span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors cursor-pointer text-[#222222]"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Photo Display */}
      <div className="flex-1 relative flex items-center justify-center p-6 bg-white overflow-hidden">
        {/* Left Nav Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-8 z-10 w-12 h-12 rounded-full border border-[#DDDDDD] flex items-center justify-center shadow-md transition-all ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed bg-white/70'
              : 'bg-white hover:border-black active:scale-95 cursor-pointer'
          }`}
          title="Previous photo"
        >
          <ChevronLeft className="w-5 h-5 text-[#222222]" />
        </button>

        {/* Centered Image */}
        <div className="max-w-4xl max-h-[78vh] flex items-center justify-center">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.caption}
            key={currentPhoto.id}
            className="max-h-[78vh] w-auto object-contain rounded-lg shadow-sm animate-fade-in"
          />
        </div>

        {/* Right Nav Arrow */}
        <button
          onClick={handleNext}
          disabled={currentIndex === totalCount - 1}
          className={`absolute right-8 z-10 w-12 h-12 rounded-full border border-[#DDDDDD] flex items-center justify-center shadow-md transition-all ${
            currentIndex === totalCount - 1
              ? 'opacity-30 cursor-not-allowed bg-white/70'
              : 'bg-white hover:border-black active:scale-95 cursor-pointer'
          }`}
          title="Next photo"
        >
          <ChevronRight className="w-5 h-5 text-[#222222]" />
        </button>
      </div>
    </div>
  );
};
