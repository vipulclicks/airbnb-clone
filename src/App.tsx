import { useState, useEffect } from 'react';
import { Navbar } from './components/header/Navbar';
import { StickyNavHeader } from './components/header/StickyNavHeader';
import { ListingHeader } from './components/listing/ListingHeader';
import { HeroPhotoGrid } from './components/listing/HeroPhotoGrid';
import { PromoBanner } from './components/listing/PromoBanner';
import { GuestFavoriteCard } from './components/listing/GuestFavoriteCard';
import { HostOverview } from './components/listing/HostOverview';
import { Description } from './components/listing/Description';
import { WhereYouSleep } from './components/listing/WhereYouSleep';
import { AmenitiesSection } from './components/listing/AmenitiesSection';
import { CalendarSection } from './components/listing/CalendarSection';
import { ReviewsSection } from './components/listing/ReviewsSection';
import { LocationSection } from './components/listing/LocationSection';
import { HostSection } from './components/listing/HostSection';
import { ThingsToKnow } from './components/listing/ThingsToKnow';
import { MoreStaysNearby } from './components/listing/MoreStaysNearby';
import { ReservationCard } from './components/reservation/ReservationCard';
import { PhotoTourModal } from './components/modals/PhotoTourModal';
import { LightboxModal } from './components/modals/LightboxModal';
import { Toast } from './components/ui/Toast';
import { LISTING_DATA } from './data/listing';

export default function App() {
  const [modalState, setModalState] = useState<{
    type: 'NONE' | 'PHOTO_TOUR' | 'LIGHTBOX';
    photoId?: string;
  }>({ type: 'NONE' });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastId, setToastId] = useState<number>(0);
  const [isStickyNavVisible, setIsStickyNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('photos');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setToastId(Date.now());
  };

  // Sync state with URL params on load & popstate
  const syncWithUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const modalParam = params.get('modal');
    const modalItemParam = params.get('modalItem');

    if (modalParam === 'PHOTO_TOUR_SCROLLABLE' && modalItemParam) {
      setModalState({ type: 'LIGHTBOX', photoId: modalItemParam });
    } else if (modalParam === 'PHOTO_TOUR_SCROLLABLE') {
      setModalState({ type: 'PHOTO_TOUR' });
    } else {
      setModalState({ type: 'NONE' });
    }
  };

  useEffect(() => {
    syncWithUrl();
    window.addEventListener('popstate', syncWithUrl);
    return () => window.removeEventListener('popstate', syncWithUrl);
  }, []);

  // Update URL helper
  const updateUrl = (modal?: string, modalItem?: string) => {
    const url = new URL(window.location.href);
    if (modal) {
      url.searchParams.set('modal', modal);
    } else {
      url.searchParams.delete('modal');
    }
    if (modalItem) {
      url.searchParams.set('modalItem', modalItem);
    } else {
      url.searchParams.delete('modalItem');
    }
    window.history.pushState({}, '', url.toString());
    syncWithUrl();
  };

  // Scroll detection for sticky header and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsStickyNavVisible(scrollY > 420);

      // Section tracking
      const sections = ['location', 'reviews', 'amenities', 'photos'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenPhotoTour = () => {
    updateUrl('PHOTO_TOUR_SCROLLABLE');
  };

  const handleOpenPhoto = (photoId: string) => {
    updateUrl('PHOTO_TOUR_SCROLLABLE', photoId);
  };

  const handleCloseModal = () => {
    updateUrl(undefined, undefined);
  };

  const handleBackToGrid = () => {
    updateUrl('PHOTO_TOUR_SCROLLABLE', undefined);
  };

  const handleNavigatePhoto = (photoId: string) => {
    updateUrl('PHOTO_TOUR_SCROLLABLE', photoId);
  };

  // Reserve button and Share trigger the bottom toast
  const handleReserveClick = () => {
    showToast("You won't be charged yet");
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Main Navbar */}
      <Navbar onSearchClick={() => {}} />

      {/* Sticky Secondary Navigation Header */}
      <StickyNavHeader
        visible={isStickyNavVisible}
        activeSection={activeSection}
        onNavigate={handleScrollToSection}
        onReserveClick={handleReserveClick}
      />

      {/* Main Listing Content Container matching 780px reference grid */}
      <main className="max-w-[780px] mx-auto px-4 md:px-0">
        {/* Listing Title & Actions */}
        <ListingHeader
          title={LISTING_DATA.title}
          onToast={showToast}
        />

        {/* 5-Photo Hero Grid */}
        <HeroPhotoGrid
          onOpenPhotoTour={handleOpenPhotoTour}
          onOpenPhoto={handleOpenPhoto}
        />

        {/* Two-Column Desktop Layout (480px Left + 40px Gap + 260px Right = 780px) */}
        <div className="flex gap-10 relative">
          {/* Left Column (Primary Details) */}
          <div className="w-[480px] flex-1 min-w-0">
            {/* Property Type & Specs */}
            <div className="pb-4 border-b border-[#EBEBEB]">
              <h2 className="text-[19px] font-semibold text-[#222222]">
                {LISTING_DATA.propertyType}
              </h2>
              <div className="text-[13px] text-[#222222] mt-0.5 font-normal">
                {LISTING_DATA.specs}
              </div>
            </div>

            {/* Guest Favourite Laurel Badge */}
            <GuestFavoriteCard />

            {/* Host Overview & Feature Highlights */}
            <HostOverview />

            {/* Space Description */}
            <Description />

            {/* Where You'll Sleep */}
            <WhereYouSleep onPhotoClick={handleOpenPhotoTour} />

            {/* Amenities Section */}
            <AmenitiesSection />

            {/* Calendar Section */}
            <CalendarSection onToast={(msg) => setToastMessage(msg)} />
          </div>

          {/* Right Column (Sticky Reservation Sidebar: 260px) */}
          <div className="w-[260px] shrink-0">
            {/* Promo Discount Banner (Static, no toast) */}
            <PromoBanner />

            {/* Reservation Card Widget (Clicking Reserve triggers toast) */}
            <ReservationCard
              onReserveClick={handleReserveClick}
              onToast={(msg) => setToastMessage(msg)}
            />
          </div>
        </div>

        {/* Full-Width Lower Sections */}
        {/* Reviews Breakdown & Cards */}
        <ReviewsSection onToast={(msg) => setToastMessage(msg)} />

        {/* Location & Map */}
        <LocationSection onToast={(msg) => setToastMessage(msg)} />

        {/* Detailed Host Section */}
        <HostSection onToast={(msg) => setToastMessage(msg)} />

        {/* Things to Know */}
        <ThingsToKnow onToast={(msg) => setToastMessage(msg)} />

        {/* More Stays Nearby */}
        <MoreStaysNearby onToast={(msg) => setToastMessage(msg)} />
      </main>

      {/* Screen 2: Photo Tour Modal */}
      {modalState.type === 'PHOTO_TOUR' && (
        <PhotoTourModal
          onClose={handleCloseModal}
          onPhotoClick={handleOpenPhoto}
          onToast={showToast}
        />
      )}

      {/* Screen 3: Lightbox Modal */}
      {modalState.type === 'LIGHTBOX' && modalState.photoId && (
        <LightboxModal
          currentPhotoId={modalState.photoId}
          onBackToGrid={handleBackToGrid}
          onClose={handleCloseModal}
          onNavigatePhoto={handleNavigatePhoto}
        />
      )}

      {/* Interactive Toast Notification */}
      <Toast
        message={toastMessage}
        toastId={toastId}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
