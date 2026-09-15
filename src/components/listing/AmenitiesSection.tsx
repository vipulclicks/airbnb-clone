import React, { useState } from 'react';
import { LISTING_DATA } from '../../data/listing';
import {
  Utensils,
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  PawPrint,
  Cctv,
  ShieldAlert,
  Flame,
  X
} from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const [showAllModal, setShowAllModal] = useState(false);

  // Map icon names to Lucide components
  const renderIcon = (name: string, notIncluded?: boolean) => {
    const iconClass = `w-6 h-6 stroke-[1.5] ${notIncluded ? 'text-[#717171] line-through' : 'text-[#222222]'}`;
    switch (name) {
      case 'Kitchen':
        return <Utensils className={iconClass} />;
      case 'Wifi':
        return <Wifi className={iconClass} />;
      case 'Dedicated workspace':
        return <Laptop className={iconClass} />;
      case 'Free parking on premises':
        return <Car className={iconClass} />;
      case 'Pool':
        return <Waves className={iconClass} />;
      case 'Hot tub':
        return <Bath className={iconClass} />;
      case 'Pets allowed':
        return <PawPrint className={iconClass} />;
      case 'Exterior security cameras on property':
        return <Cctv className={iconClass} />;
      case 'Carbon monoxide alarm':
        return <ShieldAlert className={iconClass} />;
      case 'Smoke alarm':
        return <Flame className={iconClass} />;
      default:
        return <Utensils className={iconClass} />;
    }
  };

  const categorizedAmenities = [
    {
      title: "Bathroom",
      items: ["Private Jacuzzi / Hot tub", "Hairdryer", "Hot water", "Shampoo", "Shower gel", "Body soap", "Cleaning products"]
    },
    {
      title: "Bedroom and laundry",
      items: ["Double bed", "Bed linen", "Cotton linen", "Extra pillows and blankets", "Room-darkening blinds", "Iron", "Clothes drying rack", "Wardrobe and hangers"]
    },
    {
      title: "Entertainment",
      items: ["Smart TV (43 inch)", "High-speed Wi-Fi (100 Mbps)", "Bluetooth sound system", "Books and reading material"]
    },
    {
      title: "Heating and cooling",
      items: ["Air conditioning", "Ceiling fan"]
    },
    {
      title: "Home safety",
      items: ["Exterior security cameras on property", "First aid kit", "Fire extinguisher"]
    },
    {
      title: "Kitchen and dining",
      items: ["Full Kitchen", "Refrigerator", "Microwave", "Cooking basics (pots, pans, oil, salt, pepper)", "Dishes and silverware", "Mini fridge", "Electric stove / Induction", "Kettle", "Wine glasses", "Toaster", "Blender", "Dining table"]
    },
    {
      title: "Outdoor",
      items: ["Shared swimming pool", "Private balcony / terrace", "Outdoor dining area", "Sun loungers"]
    },
    {
      title: "Parking and facilities",
      items: ["Free parking on premises", "Free street parking", "Elevator in building", "Gym / Fitness center"]
    },
    {
      title: "Services",
      items: ["Pets allowed", "Self check-in", "Building staff on-site 24/7", "Long-term stays allowed", "Luggage drop-off allowed"]
    },
    {
      title: "Not included",
      items: ["Carbon monoxide alarm", "Smoke alarm"],
      isNotIncluded: true
    }
  ];

  return (
    <div id="amenities" className="py-8 border-b border-[#EBEBEB]">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-6">
        What this place offers
      </h2>

      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        {LISTING_DATA.amenities.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            {renderIcon(item.name, item.notIncluded)}
            <span
              className={`text-base ${
                item.notIncluded
                  ? 'line-through text-[#717171]'
                  : 'text-[#222222]'
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAllModal(true)}
        className="mt-8 border border-[#222222] text-[#222222] hover:bg-[#F7F7F7] px-6 py-3 rounded-lg text-base font-semibold transition-colors cursor-pointer"
      >
        Show all {LISTING_DATA.allAmenitiesCount} amenities
      </button>

      {/* All Amenities Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-[#EBEBEB] flex items-center justify-between sticky top-0 bg-white rounded-t-2xl z-10">
              <h3 className="text-xl font-semibold text-[#222222]">
                What this place offers
              </h3>
              <button
                onClick={() => setShowAllModal(false)}
                className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto divide-y divide-[#EBEBEB] space-y-6">
              {categorizedAmenities.map((cat, idx) => (
                <div key={idx} className={idx > 0 ? "pt-6" : ""}>
                  <h4 className="text-lg font-semibold text-[#222222] mb-4">
                    {cat.title}
                  </h4>
                  <div className="space-y-4">
                    {cat.items.map((amenity, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-3 text-base text-[#222222]">
                        <span className={cat.isNotIncluded ? "line-through text-[#717171]" : ""}>
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
