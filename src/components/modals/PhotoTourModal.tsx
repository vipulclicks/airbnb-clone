import React, { useRef } from 'react';
import { PHOTO_CATEGORIES } from '../../data/listing';
import { ChevronLeft, Share, Heart } from 'lucide-react';

interface PhotoTourModalProps {
  onClose: () => void;
  onPhotoClick: (photoId: string) => void;
  onToast: (msg: string) => void;
}

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  onClose,
  onPhotoClick,
  onToast,
}) => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToCategory = (catId: string) => {
    const el = sectionRefs.current[catId];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fade-in">
      {/* Sticky Header matching screenshot */}
      <header className="sticky top-0 z-20 bg-white border-b border-[#EBEBEB] px-6 h-16 flex items-center justify-between">
        <button
          onClick={onClose}
          className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors cursor-pointer"
          title="Back to listing"
        >
          <ChevronLeft className="w-5 h-5 text-[#222222]" />
        </button>

        <h2 className="text-base font-semibold text-[#222222]">
          Photo tour
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onToast("Share options")}
            className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors cursor-pointer"
            title="Share"
          >
            <Share className="w-5 h-5 text-[#222222]" />
          </button>
          <button
            onClick={() => onToast("Saved to wishlist!")}
            className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors cursor-pointer"
            title="Save"
          >
            <Heart className="w-5 h-5 text-[#222222]" />
          </button>
        </div>
      </header>

      <div className="max-w-[1120px] mx-auto px-6 py-6">
        {/* Category Navigation Thumbnails Row matching screenshot */}
        <div className="mb-12">
          <div className="flex items-start gap-4 overflow-x-auto pb-4 no-scrollbar">
            {PHOTO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className="flex flex-col items-center min-w-[78px] text-center group cursor-pointer"
              >
                <div className="w-[78px] h-[74px] rounded-xl overflow-hidden border border-[#DDDDDD] group-hover:border-black transition-colors mb-2 bg-[#F7F7F7]">
                  <img
                    src={cat.thumbnail}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-xs font-semibold text-[#222222] group-hover:underline">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Room Sections matching screenshot */}
        <div className="space-y-16 pb-24">
          {PHOTO_CATEGORIES.map((category) => (
            <div
              key={category.id}
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
              className="grid grid-cols-12 gap-8 scroll-mt-24"
            >
              {/* Left Column: Room Name and Amenity Tagline */}
              <div className="col-span-4 sticky top-24 self-start">
                <h3 className="text-2xl font-bold text-[#222222] mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-[#717171] leading-relaxed">
                  {category.tagline}
                </p>
              </div>

              {/* Right Column: Photos Grid */}
              <div className="col-span-8 space-y-4">
                {/* Asymmetric layout for room photos */}
                {category.photos.length > 0 && (
                  <div
                    onClick={() => onPhotoClick(category.photos[0].id)}
                    className="rounded-2xl overflow-hidden cursor-pointer group aspect-[16/10] bg-[#F7F7F7]"
                  >
                    <img
                      src={category.photos[0].url}
                      alt={category.photos[0].caption}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                )}

                {category.photos.length > 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {category.photos.slice(1, 3).map((photo) => (
                      <div
                        key={photo.id}
                        onClick={() => onPhotoClick(photo.id)}
                        className="rounded-xl overflow-hidden cursor-pointer group aspect-[4/3] bg-[#F7F7F7]"
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {category.photos.length > 3 && (
                  <div className="grid grid-cols-2 gap-4">
                    {category.photos.slice(3).map((photo) => (
                      <div
                        key={photo.id}
                        onClick={() => onPhotoClick(photo.id)}
                        className="rounded-xl overflow-hidden cursor-pointer group aspect-[4/3] bg-[#F7F7F7]"
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
