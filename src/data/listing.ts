export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  room: string;
}

export interface PhotoCategory {
  id: string;
  name: string;
  tagline: string;
  thumbnail: string;
  photos: PhotoItem[];
}

export interface ReviewItem {
  name: string;
  avatar?: string;
  initial?: string;
  bg?: string;
  tenure: string;
  rating: number;
  date: string;
  comment: string;
}

export const LISTING_DATA = {
  id: "romantic-jacuzzi-candolim",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyType: "Entire serviced apartment in Candolim, India",
  specs: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  guestFavorite: true,
  overallRating: 4.95,
  totalReviews: 19,
  priceTotal: "₹28,499",
  priceNights: "5 nights",
  pricePerNight: "₹5,700",
  dates: {
    checkIn: "10/18/2026",
    checkOut: "10/23/2026",
    nights: 5,
    freeCancelDate: "17 October"
  },
  guests: "2 guests",
  host: {
    name: "Mirashya Homes",
    avatar: "avatars/host_mirashya.png",
    years: "2 years hosting",
    reviewsCount: "1,463",
    rating: "4.95",
    responseRate: "100%",
    responseTime: "Responds within an hour",
    funFacts: [
      { icon: "Sparkles", label: "Born in the 80s" },
      { icon: "GraduationCap", label: "Where I went to school: NICMAR GOA" }
    ],
    coHosts: [
      { name: "Sharath", avatar: "avatars/cohost_sharath.png" },
      { name: "Aman Dev Pahwa", avatar: "avatars/cohost_aman.png" },
      { name: "Maria Karen Priyanka", avatar: "avatars/cohost_maria.png" }
    ]
  },
  highlights: [
    {
      title: "Outdoor entertainment",
      desc: "The pool and alfresco dining are great for summer trips.",
      icon: "UtensilsCrossed"
    },
    {
      title: "Designed for staying cool",
      desc: "Beat the heat with the A/C and ceiling fan.",
      icon: "Fan"
    },
    {
      title: "Self check-in",
      desc: "You can check in with the building staff.",
      icon: "DoorOpen"
    }
  ],
  description: `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples, solo travelers, or workcations!

✨ The Space:
• Private Jacuzzi on balcony/terrace patio with romantic ambient lighting
• Fully air-conditioned bedroom with plush queen double bed & warm wooden flooring
• Living room with vibrant yellow-toned lounge sofa, dining setup, and Samsung Smart TV
• High-speed Wi-Fi (100+ Mbps) suitable for remote work
• Fully equipped modular kitchen with microwave, induction cooktop, refrigerator, and cookware
• Daily housekeeping and building staff check-in available 24/7`,
  sleepingArrangements: [
    {
      title: "Bedroom",
      detail: "1 double bed",
      image: "photos/sleep_bedroom.png"
    },
    {
      title: "Living room",
      detail: "1 sofa",
      image: "photos/sleep_living.png"
    }
  ],
  amenities: [
    { name: "Kitchen", icon: "Utensils", category: "Kitchen" },
    { name: "Wifi", icon: "Wifi", category: "Internet" },
    { name: "Dedicated workspace", icon: "Laptop", category: "Office" },
    { name: "Free parking on premises", icon: "Car", category: "Parking" },
    { name: "Pool", icon: "Waves", category: "Outdoor" },
    { name: "Hot tub", icon: "Bath", category: "Bathroom" },
    { name: "Pets allowed", icon: "PawPrint", category: "Rules" },
    { name: "Exterior security cameras on property", icon: "Cctv", category: "Safety" },
    { name: "Carbon monoxide alarm", icon: "ShieldAlert", notIncluded: true, category: "Safety" },
    { name: "Smoke alarm", icon: "Flame", notIncluded: true, category: "Safety" }
  ],
  allAmenitiesCount: 50,
  reviewsBreakdown: {
    overall: 4.95,
    categories: [
      { name: "Cleanliness", score: "5.0", icon: "SprayCan" },
      { name: "Accuracy", score: "5.0", icon: "CheckCircle2" },
      { name: "Check-in", score: "5.0", icon: "Key" },
      { name: "Communication", score: "5.0", icon: "MessageSquare" },
      { name: "Location", score: "4.8", icon: "Map" },
      { name: "Value", score: "4.8", icon: "Tag" }
    ],
    tagFilters: [
      { label: "Comfort", count: 6, emoji: "🛋️" },
      { label: "Accuracy", count: 5, emoji: "✅" },
      { label: "Hot tub", count: 5, emoji: "🛁" },
      { label: "Condition", count: 4, emoji: "🏡" },
      { label: "Hospitality", count: 8, emoji: "🎁" },
      { label: "Cleanliness", count: 4, emoji: "🧴" },
      { label: "Amenities", count: 2, emoji: "🎂" }
    ],
    reviews: [
      {
        name: "Amit",
        initial: "A",
        bg: "bg-[#FDE68A] text-[#92400E]",
        tenure: "2 months on Airbnb",
        rating: 5,
        date: "1 week ago",
        comment: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property."
      },
      {
        name: "Aheesh",
        avatar: "avatars/rev_aheesh.png",
        tenure: "3 years on Airbnb",
        rating: 5,
        date: "2 weeks ago",
        comment: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again."
      },
      {
        name: "Samiksha",
        avatar: "avatars/rev_samiksha.png",
        tenure: "8 months on Airbnb",
        rating: 5,
        date: "May 2026",
        comment: "the host nitish was really great help"
      },
      {
        name: "Vedant",
        initial: "V",
        bg: "bg-[#E9D5FF] text-[#6B21A8]",
        tenure: "4 years on Airbnb",
        rating: 5,
        date: "May 2026",
        comment: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine...."
      },
      {
        name: "Vaibhav S",
        avatar: "avatars/rev_vaibhav.png",
        tenure: "3 years on Airbnb",
        rating: 5,
        date: "May 2026",
        comment: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too."
      },
      {
        name: "Mohd",
        avatar: "avatars/rev_mohd.png",
        tenure: "5 years on Airbnb",
        rating: 5,
        date: "May 2026",
        comment: "Great place. Exactly as described in the listing."
      }
    ]
  },
  location: {
    city: "Candolim, Goa, India",
    mapImage: "photos/map_candolim.png",
    highlights: "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions."
  },
  thingsToKnow: {
    cancellation: {
      title: "Cancellation policy",
      desc: "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
      sub: "Review this host's full policy for details."
    },
    houseRules: {
      title: "House rules",
      rules: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"]
    },
    safety: {
      title: "Safety & property",
      rules: ["Carbon monoxide alarm not reported", "Smoke alarm not reported", "Exterior security cameras on property"]
    }
  },
  moreStaysNearby: [
    { title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: 4.91, image: "photos/stay_1.png" },
    { title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: 4.95, image: "photos/stay_2.png" },
    { title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: 4.94, image: "photos/stay_3.png" },
    { title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: 4.96, image: "photos/stay_4.png" },
    { title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: 4.95, image: "photos/stay_5.png" }
  ]
};

// 5 Hero Grid Photos
export const HERO_PHOTOS = [
  { id: "1000", url: "photos/hero_main.png", title: "Outdoor lounge & terrace jacuzzi" },
  { id: "1001", url: "photos/hero_patio_seating.png", title: "Patio seating" },
  { id: "1002", url: "photos/hero_jacuzzi.png", title: "Private Jacuzzi deck" },
  { id: "1003", url: "photos/hero_bedroom.png", title: "Air-conditioned master bedroom" },
  { id: "1004", url: "photos/hero_exterior.png", title: "Amor De Goa complex exterior" }
];

// All 43 photos categorized into 9 groups matching the reference app
export const PHOTO_CATEGORIES: PhotoCategory[] = [
  {
    id: "living_room_1",
    name: "Living room 1",
    tagline: "Sofa · Air conditioning · Ceiling fan · TV",
    thumbnail: "category-thumbs/living_room_1.png",
    photos: [
      { id: "1000", url: "photos/living_room_1_main.png", caption: "Spacious air-conditioned living room with orange couch and wooden decor", room: "Living room 1" },
      { id: "1001", url: "photos/living_room_1_sub1.png", caption: "Smart TV with wooden credenza and warm ambient lighting", room: "Living room 1" },
      { id: "1002", url: "photos/living_room_1_sub2.png", caption: "Dining table and open plan living room layout", room: "Living room 1" },
      { id: "1003", url: "photos/sleep_living.png", caption: "Comfortable sofa seating with patterned rug", room: "Living room 1" },
      { id: "1004", url: "photos/living_room_1_main.png", caption: "Living room entrance view", room: "Living room 1" }
    ]
  },
  {
    id: "living_room_2",
    name: "Living room 2",
    tagline: "Ceiling fan · Hot tub",
    thumbnail: "category-thumbs/living_room_2.png",
    photos: [
      { id: "1005", url: "photos/living_room_2_main.png", caption: "Outdoor wicker lounge chairs and jacuzzi deck", room: "Living room 2" },
      { id: "1006", url: "photos/hero_patio_seating.png", caption: "Wicker patio coffee table with comfortable cushions", room: "Living room 2" },
      { id: "1007", url: "photos/hero_jacuzzi.png", caption: "Private bubbling jacuzzi tub with wooden deck surround", room: "Living room 2" },
      { id: "1008", url: "photos/living_room_2_sub1.png", caption: "Jacuzzi jets and evening wall sconces", room: "Living room 2" },
      { id: "1009", url: "photos/living_room_2_sub2.png", caption: "High ceiling patio courtyard view", room: "Living room 2" }
    ]
  },
  {
    id: "full_kitchen",
    name: "Full kitchen",
    tagline: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    thumbnail: "category-thumbs/full_kitchen.png",
    photos: [
      { id: "1010", url: "photos/kitchen_main.png", caption: "Fully equipped kitchen with wooden cabinetry, microwave, and kettle", room: "Full kitchen" },
      { id: "1011", url: "photos/kitchen_sub.png", caption: "Granite kitchen counter with modern cooktop and dinnerware", room: "Full kitchen" },
      { id: "1012", url: "photos/kitchen_main.png", caption: "Refrigerator, storage cabinets, and prep area", room: "Full kitchen" },
      { id: "1013", url: "photos/kitchen_sub.png", caption: "Kitchen accessories and complimentary tea & coffee", room: "Full kitchen" }
    ]
  },
  {
    id: "bedroom",
    name: "Bedroom",
    tagline: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    thumbnail: "category-thumbs/bedroom.png",
    photos: [
      { id: "1014", url: "photos/bedroom_main.png", caption: "Master bedroom with double bed, soft linen, and polished wooden flooring", room: "Bedroom" },
      { id: "1015", url: "photos/bedroom_sub1.png", caption: "Spacious wardrobe, mirror, and doorway to the patio", room: "Bedroom" },
      { id: "1016", url: "photos/bedroom_sub2.png", caption: "Bedside lighting, air conditioner, and cozy ambiance", room: "Bedroom" },
      { id: "1017", url: "photos/sleep_bedroom.png", caption: "Natural sunlight through bedroom window with curtains", room: "Bedroom" },
      { id: "1018", url: "photos/hero_bedroom.png", caption: "Bedroom overview with designer ceiling fan", room: "Bedroom" }
    ]
  },
  {
    id: "full_bathroom",
    name: "Full bathroom",
    tagline: "Hairdryer · Hot water · Shampoo · Shower gel",
    thumbnail: "category-thumbs/full_bathroom.png",
    photos: [
      { id: "1019", url: "photos/bathroom_main.png", caption: "Modern marble bathroom with backlit oval mirror and glass shower partition", room: "Full bathroom" },
      { id: "1020", url: "photos/bathroom_main.png", caption: "Wall-hung toilet, premium chrome fixtures, and hot water shower", room: "Full bathroom" },
      { id: "1021", url: "photos/bathroom_main.png", caption: "Vanity counter with fresh towels and toiletries", room: "Full bathroom" },
      { id: "1022", url: "photos/bathroom_main.png", caption: "Shower enclosure with rain shower head", room: "Full bathroom" }
    ]
  },
  {
    id: "gym",
    name: "Gym",
    tagline: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    thumbnail: "category-thumbs/gym.png",
    photos: [
      { id: "1023", url: "photos/gym_main.png", caption: "Resident fitness center with cardio treadmills and stationary bicycles", room: "Gym" },
      { id: "1024", url: "photos/gym_main.png", caption: "Free weights, dumbbells rack, and exercise mats", room: "Gym" },
      { id: "1025", url: "photos/gym_main.png", caption: "Air-conditioned fitness studio overlooking the grounds", room: "Gym" }
    ]
  },
  {
    id: "exterior",
    name: "Exterior",
    tagline: "Building facade · Balcony · Architecture",
    thumbnail: "category-thumbs/exterior.png",
    photos: [
      { id: "1026", url: "photos/hero_exterior.png", caption: "Amor De Goa building exterior and yellow colonial facade", room: "Exterior" },
      { id: "1027", url: "photos/exterior_main.png", caption: "Aerial drone shot of Amor De Goa complex in Candolim", room: "Exterior" },
      { id: "1028", url: "photos/hero_exterior.png", caption: "Main driveway and secure gated entrance", room: "Exterior" },
      { id: "1029", url: "photos/exterior_main.png", caption: "Balconies overlooking lush North Goa greenery", room: "Exterior" }
    ]
  },
  {
    id: "pool",
    name: "Pool",
    tagline: "Shared swimming pool · Sun loungers",
    thumbnail: "category-thumbs/pool.png",
    photos: [
      { id: "1030", url: "photos/pool_main.png", caption: "Large central swimming pool in the inner courtyard", room: "Pool" },
      { id: "1031", url: "photos/pool_main.png", caption: "Crystal clear pool water with sundeck loungers", room: "Pool" },
      { id: "1032", url: "photos/pool_main.png", caption: "Evening illuminated pool view surrounded by palm trees", room: "Pool" }
    ]
  },
  {
    id: "additional_photos",
    name: "Additional photos",
    tagline: "Atmosphere · Lighting · Amenities",
    thumbnail: "category-thumbs/additional_photos.png",
    photos: [
      { id: "1033", url: "photos/hero_main.png", caption: "Romantic evening ambiance on the private jacuzzi terrace", room: "Additional photos" },
      { id: "1034", url: "photos/living_room_1_main.png", caption: "Living room details and warm interior aesthetics", room: "Additional photos" },
      { id: "1035", url: "photos/hero_jacuzzi.png", caption: "Jacuzzi ready with hydrotherapy massage jets", room: "Additional photos" },
      { id: "1036", url: "photos/bedroom_main.png", caption: "Cozy bedroom lighting for a restful stay", room: "Additional photos" },
      { id: "1037", url: "photos/kitchen_main.png", caption: "Cooking essentials and breakfast nook", room: "Additional photos" },
      { id: "1038", url: "photos/bathroom_main.png", caption: "Clean and sanitized bathroom space", room: "Additional photos" },
      { id: "1039", url: "photos/sleep_living.png", caption: "Comfortable convertible seating space", room: "Additional photos" },
      { id: "1040", url: "photos/hero_patio_seating.png", caption: "Outdoor reading corner and coffee table", room: "Additional photos" },
      { id: "1041", url: "photos/stay_2.png", caption: "Neighborhood resort features", room: "Additional photos" },
      { id: "1042", url: "photos/stay_4.png", caption: "Candolim beach getaway lifestyle", room: "Additional photos" }
    ]
  }
];

// Flat list of all 43 photos for easy indexing in Lightbox
export const ALL_PHOTOS: PhotoItem[] = PHOTO_CATEGORIES.flatMap((c) => c.photos);
