import React, { useState } from 'react';
import { LISTING_DATA } from '../../data/listing';
import {
  SprayCan,
  CheckCircle2,
  Key,
  MessageSquare,
  Map,
  Tag,
  X
} from 'lucide-react';

interface ReviewsSectionProps {
  onToast: (msg: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onToast }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAllReviewsModal, setShowAllReviewsModal] = useState(false);

  const { overall, categories, tagFilters, reviews } = LISTING_DATA.reviewsBreakdown;

  const renderCategoryIcon = (name: string) => {
    const iconClass = "w-7 h-7 text-[#222222] stroke-[1.25] mb-2";
    switch (name) {
      case 'Cleanliness': return <SprayCan className={iconClass} />;
      case 'Accuracy': return <CheckCircle2 className={iconClass} />;
      case 'Check-in': return <Key className={iconClass} />;
      case 'Communication': return <MessageSquare className={iconClass} />;
      case 'Location': return <Map className={iconClass} />;
      case 'Value': return <Tag className={iconClass} />;
      default: return <CheckCircle2 className={iconClass} />;
    }
  };

  const filteredReviews = selectedTag
    ? reviews.filter((r) =>
        r.comment.toLowerCase().includes(selectedTag.toLowerCase()) ||
        (selectedTag === 'Hot tub' && r.comment.toLowerCase().includes('property'))
      )
    : reviews;

  return (
    <div id="reviews" className="py-10 border-b border-[#EBEBEB]">
      {/* Giant Laurel Badge Card */}
      <div className="text-center my-6 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          {/* Left Laurel Wreath */}
          <svg className="w-12 h-20 text-[#222222] fill-current" viewBox="0 0 32 64">
            <path d="M16 4C13 12 8 22 8 34c0 14 7 24 16 28-4-5-8-15-8-24 0-11 4-20 8-28-5-3-9-4-8-10z" />
          </svg>

          <span className="text-7xl font-extrabold text-[#222222] tracking-tight">
            {overall}
          </span>

          {/* Right Laurel Wreath */}
          <svg className="w-12 h-20 text-[#222222] fill-current -scale-x-100" viewBox="0 0 32 64">
            <path d="M16 4C13 12 8 22 8 34c0 14 7 24 16 28-4-5-8-15-8-24 0-11 4-20 8-28-5-3-9-4-8-10z" />
          </svg>
        </div>

        <h3 className="text-[22px] font-bold text-[#222222] mt-3">
          Guest favourite
        </h3>
        <p className="text-base text-[#717171] mt-1 max-w-md">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button
          onClick={() => onToast("Airbnb Guest Favourite criteria: Ratings 4.9+, high reliability and low cancellations")}
          className="text-sm font-semibold text-[#222222] underline mt-1 hover:text-black cursor-pointer"
        >
          How reviews work
        </button>
      </div>

      {/* Category breakdown row matching screenshot 5 */}
      <div className="grid grid-cols-7 gap-4 py-8 border-b border-[#EBEBEB] items-end text-left">
        {/* Overall rating bar */}
        <div className="col-span-1 pr-2">
          <div className="text-xs font-semibold text-[#222222] mb-3">Overall rating</div>
          <div className="space-y-1.5 text-xs text-[#222222] font-semibold">
            <div className="flex items-center gap-2">
              <span>5</span>
              <div className="flex-1 h-1 bg-[#222222] rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <span>4</span>
              <div className="flex-1 h-1 bg-[#EBEBEB] rounded-full overflow-hidden">
                <div className="w-[10%] h-full bg-[#222222]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>3</span>
              <div className="flex-1 h-1 bg-[#EBEBEB] rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <span>2</span>
              <div className="flex-1 h-1 bg-[#EBEBEB] rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <span>1</span>
              <div className="flex-1 h-1 bg-[#EBEBEB] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* 6 Categories */}
        {categories.map((cat, idx) => (
          <div key={idx} className="border-l border-[#EBEBEB] pl-4">
            <div className="text-sm font-semibold text-[#222222] mb-1">{cat.name}</div>
            <div className="text-lg font-bold text-[#222222] mb-3">{cat.score}</div>
            {renderCategoryIcon(cat.name)}
          </div>
        ))}
      </div>

      {/* Filter Tag Pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto py-6 no-scrollbar">
        {tagFilters.map((tag, idx) => {
          const isSelected = selectedTag === tag.label;
          return (
            <button
              key={idx}
              onClick={() => setSelectedTag(isSelected ? null : tag.label)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'border-black bg-black text-white shadow-sm'
                  : 'border-[#DDDDDD] bg-white text-[#222222] hover:border-black'
              }`}
            >
              <span>{tag.emoji}</span>
              <span>{tag.label}</span>
              <span className={`text-xs ${isSelected ? 'text-white/80' : 'text-[#717171]'}`}>
                {tag.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-10 mt-2">
        {filteredReviews.map((rev, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center gap-3">
              {rev.avatar ? (
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#EBEBEB]"
                />
              ) : (
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-base ${
                    rev.bg || 'bg-[#FDE68A] text-[#92400E]'
                  }`}
                >
                  {rev.initial || rev.name.charAt(0)}
                </div>
              )}
              <div>
                <h4 className="font-semibold text-base text-[#222222] leading-tight">
                  {rev.name}
                </h4>
                <p className="text-sm text-[#717171]">{rev.tenure}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#222222]">
              <span>★★★★★</span>
              <span>·</span>
              <span className="text-[#717171] font-normal">{rev.date}</span>
            </div>

            <p className="text-base text-[#222222] leading-relaxed line-clamp-3">
              {rev.comment}
            </p>

            {rev.comment.length > 120 && (
              <button
                onClick={() => setShowAllReviewsModal(true)}
                className="font-semibold text-sm underline hover:text-black cursor-pointer"
              >
                Show more
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Show All Reviews Button */}
      <div className="mt-8">
        <button
          onClick={() => setShowAllReviewsModal(true)}
          className="border border-[#222222] text-[#222222] hover:bg-[#F7F7F7] px-6 py-3 rounded-lg text-base font-semibold transition-colors cursor-pointer"
        >
          Show all {LISTING_DATA.totalReviews} reviews
        </button>
      </div>

      {/* All Reviews Modal */}
      {showAllReviewsModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-[#EBEBEB] flex items-center justify-between sticky top-0 bg-white rounded-t-2xl z-10">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#222222]">★ {overall}</span>
                <span className="text-lg text-[#717171]">· {LISTING_DATA.totalReviews} reviews</span>
              </div>
              <button
                onClick={() => setShowAllReviewsModal(false)}
                className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-8 divide-y divide-[#EBEBEB]">
              {reviews.map((rev, idx) => (
                <div key={idx} className={idx > 0 ? "pt-6 space-y-3" : "space-y-3"}>
                  <div className="flex items-center gap-3">
                    {rev.avatar ? (
                      <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover" />
                    ) : (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${rev.bg}`}>
                        {rev.initial}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-base text-[#222222]">{rev.name}</div>
                      <div className="text-xs text-[#717171]">{rev.tenure}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span>★★★★★</span>
                    <span>·</span>
                    <span className="text-[#717171]">{rev.date}</span>
                  </div>
                  <p className="text-base text-[#222222] leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
