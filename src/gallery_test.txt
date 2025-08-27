import { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { loadGalleryImages } from '@/utils/imageLoader';
import { IoClose, IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { useTheme } from '@/context/ThemeContext';

const IMAGES_PER_PAGE = 24;

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const loadedImages = loadGalleryImages();
    const shuffled = [...loadedImages].sort(() => Math.random() - 0.5);
    setImages(shuffled);
    setDisplayedImages(shuffled.slice(0, IMAGES_PER_PAGE));
    setHasMore(shuffled.length > IMAGES_PER_PAGE);
  }, []);

  const loadMore = () => {
    const next = images.slice(displayedImages.length, displayedImages.length + IMAGES_PER_PAGE);
    setDisplayedImages(prev => [...prev, ...next]);
    setHasMore(displayedImages.length + IMAGES_PER_PAGE < images.length);
  };

  const handleImageClick = useCallback((img: string, idx: number) => {
    setIsLoading(true);
    setSelectedImage(img);
    setCurrentIndex(idx);
    document.body.style.overflow = 'hidden';
  }, []);

  const handlePrevious = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    const newIdx = currentIndex === 0 ? displayedImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIdx);
    setSelectedImage(displayedImages[newIdx]);
  }, [currentIndex, displayedImages]);

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    const newIdx = currentIndex === displayedImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIdx);
    setSelectedImage(displayedImages[newIdx]);
  }, [currentIndex, displayedImages]);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
    setCurrentIndex(0);
    document.body.style.overflow = 'auto';
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNext(e as unknown as React.MouseEvent) : handlePrevious(e as unknown as React.MouseEvent);
    }
  }, [handleNext, handlePrevious]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrevious(e as unknown as React.MouseEvent);
      if (e.key === 'ArrowRight') handleNext(e as unknown as React.MouseEvent);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage, handleClose, handlePrevious, handleNext]);

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-[#111111]' : 'bg-cream'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-12 text-center`}>
          Gallery
        </h2>

        <div className={`max-w-3xl mx-auto mb-12 text-lg ${theme === 'dark' ? 'text-white/80' : 'text-brown/80'} leading-relaxed text-center`}>
          <p>
            Her journey began at 17, working behind the scenes in event production—until her natural charisma brought her in front of the camera. Since then, she has built a remarkable 15-year career as an international model and emcee, gracing campaigns for TM UNIFI, AVON, McDonald's, and Pizza Hut, and walking runways for celebrated designers like Melinda Looi and Jovian Mandagie.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {displayedImages.map((img, idx) => (
            <div key={idx} className="relative w-full pb-[133%]">
              <div className="absolute inset-0">
                <div className="w-full h-full relative group cursor-pointer overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onClick={() => handleImageClick(img, idx)}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className={`${theme === 'dark' ? 'bg-white text-[#111111] hover:bg-white/90' : 'bg-brown text-cream hover:bg-brown/90'} px-8 py-4 rounded-lg font-medium transition duration-300 focus:ring-2 ${theme === 'dark' ? 'focus:ring-white' : 'focus:ring-brown'} focus:ring-offset-2`}
            >
              Load More
            </button>
          </div>
        )}

        {selectedImage &&
          ReactDOM.createPortal(
            <div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={handleClose}
              role="dialog"
              aria-modal="true"
              aria-label="Image gallery lightbox"
            >
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-60"
                onClick={e => {
                  e.stopPropagation();
                  handleClose();
                }}
                aria-label="Close lightbox"
              >
                <IoClose size={32} />
              </button>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-[60]"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <IoArrowBack size={32} />
              </button>

              {/* Updated container to enable pinch-zoom & swipe on mobile only */}
              <div
                className="relative max-h-[90vh] max-w-[90vw] overflow-auto sm:overflow-hidden"
                onClick={e => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ touchAction: 'pan-y pinch-zoom' }}
              >
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={selectedImage}
                  alt={`Gallery image ${currentIndex + 1} of ${displayedImages.length}`}
                  className="max-h-[90vh] max-w-[90vw] object-contain"
                  onLoad={() => setIsLoading(false)}
                  onError={() => setIsLoading(false)}
                />
                <div className="absolute bottom-0 left-0 right-0 text-center text-white/80 py-4 bg-black/50">
                  Image {currentIndex + 1} of {displayedImages.length}
                </div>
              </div>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-60"
                onClick={handleNext}
                aria-label="Next image"
              >
                <IoArrowForward size={32} />
              </button>
            </div>,
            document.body
          )}
      </div>
    </section>
  );
};

export default GallerySection;
