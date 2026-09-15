import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

interface CalendarSectionProps {
  onToast: (msg: string) => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ onToast }) => {
  const [selectedStart, setSelectedStart] = useState<number | null>(18);
  const [selectedEnd, setSelectedEnd] = useState<number | null>(23);

  // October 2026 starts on Thursday (index 4 in S M T W T F S)
  // Total 31 days
  const octOffset = 4; // Sun=0, Mon=1, Tue=2, Wed=3, Thu=4
  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);

  // November 2026 starts on Sunday (index 0)
  // Total 30 days
  const novOffset = 0;
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleClear = () => {
    setSelectedStart(null);
    setSelectedEnd(null);
    onToast("Dates cleared");
  };

  const handleDayClick = (day: number) => {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(day);
      setSelectedEnd(null);
    } else if (selectedStart && !selectedEnd) {
      if (day > selectedStart) {
        setSelectedEnd(day);
      } else {
        setSelectedStart(day);
        setSelectedEnd(null);
      }
    }
  };

  const nights = selectedStart && selectedEnd ? selectedEnd - selectedStart : 5;

  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      <div className="mb-6">
        <h2 className="text-[22px] font-semibold text-[#222222]">
          {nights} nights in Candolim
        </h2>
        <p className="text-sm text-[#717171] mt-1">
          {selectedStart && selectedEnd
            ? `${selectedStart} Oct 2026 - ${selectedEnd} Oct 2026`
            : 'Select check-in date'}
        </p>
      </div>

      <div className="flex gap-8">
        {/* October 2026 */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => onToast("Previous month not available for this listing")}
              className="p-1.5 hover:bg-[#F7F7F7] rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#222222]" />
            </button>
            <span className="font-semibold text-base text-[#222222]">
              October 2026
            </span>
            <div className="w-8"></div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#717171] mb-2">
            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center text-sm font-medium">
            {/* Blank offset days */}
            {Array.from({ length: octOffset }).map((_, i) => (
              <div key={`blank-${i}`} />
            ))}

            {/* Days of month */}
            {octDays.map((day) => {
              const isStart = day === selectedStart;
              const isEnd = day === selectedEnd;
              const isInRange =
                selectedStart && selectedEnd && day > selectedStart && day < selectedEnd;

              let cellStyle = 'hover:border-black cursor-pointer rounded-full';
              if (isStart || isEnd) {
                cellStyle = 'bg-[#222222] text-white font-semibold rounded-full';
              } else if (isInRange) {
                cellStyle = 'bg-[#F7F7F7] text-[#222222] rounded-none';
              }

              return (
                <div
                  key={day}
                  onClick={() => handleDayClick(day)}
                  className={`h-10 flex items-center justify-center transition-colors text-sm ${cellStyle}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* November 2026 */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-8"></div>
            <span className="font-semibold text-base text-[#222222]">
              November 2026
            </span>
            <button
              onClick={() => onToast("Next month")}
              className="p-1.5 hover:bg-[#F7F7F7] rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#222222]" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#717171] mb-2">
            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center text-sm font-medium">
            {Array.from({ length: novOffset }).map((_, i) => (
              <div key={`nov-blank-${i}`} />
            ))}

            {novDays.map((day) => (
              <div
                key={`nov-${day}`}
                className="h-10 flex items-center justify-center text-sm text-[#717171] hover:border hover:border-black rounded-full cursor-pointer transition-colors"
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer of Calendar */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => onToast("Keyboard shortcuts: Page Up/Down to navigate months")}
          className="p-2 hover:bg-[#F7F7F7] rounded-md transition-colors"
          title="Keyboard shortcuts"
        >
          <Keyboard className="w-5 h-5 text-[#222222]" />
        </button>

        <button
          onClick={handleClear}
          className="text-sm font-semibold text-[#222222] underline hover:text-black cursor-pointer"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
};
