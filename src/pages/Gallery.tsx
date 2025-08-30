import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon, Video, Music, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { loadGalleryImages, getImagesByCategory, getCategoryInfo } from '@/utils/imageLoader';

const IMAGES_PER_PAGE = 24;

// Define the image type
interface GalleryImage {
  src: string;
  category: string;
  title: string;
  description: string;
  id: string;
}

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Load images on component mount
  useEffect(() => {
    const images = loadGalleryImages();
    setAllImages(images);
    setFilteredImages(images);
    setDisplayedImages(images.slice(0, IMAGES_PER_PAGE));
    setHasMore(images.length > IMAGES_PER_PAGE);
  }, []);

  // Update filtered images when filter changes
  useEffect(() => {
    const filtered = getImagesByCategory(filter);
    setFilteredImages(filtered);
    setDisplayedImages(filtered.slice(0, IMAGES_PER_PAGE));
    setHasMore(filtered.length > IMAGES_PER_PAGE);
    setCurrentImageIndex(0);
  }, [filter]);

  const loadMore = () => {
    const next = filteredImages.slice(displayedImages.length, displayedImages.length + IMAGES_PER_PAGE);
    setDisplayedImages(prev => [...prev, ...next]);
    setHasMore(displayedImages.length + IMAGES_PER_PAGE < filteredImages.length);
  };

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === displayedImages.length - 1 ? 0 : prev + 1
    );
  }, [displayedImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? displayedImages.length - 1 : prev - 1
    );
  }, [displayedImages.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  }, [nextImage, prevImage]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  const categories = [
    { key: 'all', label: 'All', icon: ImageIcon },
    { key: 'Events', label: 'Events', icon: Calendar },
    { key: 'Stage Setup', label: 'Stage Setup', icon: Video },
    { key: 'Back Line', label: 'Back Line', icon: Music },
    { key: 'Projects', label: 'Projects', icon: Video },
    { key: 'Concerts', label: 'Concerts', icon: Music }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at our recent work and see how we bring events to life with 
            professional sound, lighting, and entertainment services across Malaysia.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const count = category.key === 'all' 
              ? allImages.length 
              : allImages.filter(img => img.category === category.key).length;
            
            return (
              <Button
                key={category.key}
                variant={filter === category.key ? "default" : "outline"}
                onClick={() => setFilter(category.key)}
                className={
                  filter === category.key
                    ? "bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90"
                    : "border-bass-light text-muted-foreground hover:border-neon-blue hover:text-neon-blue"
                }
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label} ({count})
              </Button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {displayedImages.map((item, index) => (
            <Card key={item.id} className="bass-card group overflow-hidden cursor-pointer">
              <div className="relative overflow-hidden" onClick={() => openLightbox(index)}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback for missing images
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjM0Y0NTU5Ii8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4K';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bass-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="secondary"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    View Full Size
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mb-20">
            <Button 
              variant="outline"
              size="lg"
              onClick={loadMore}
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-bass-dark"
            >
              Load More Images
            </Button>
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-7xl max-h-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Image Container */}
              <div
                className="relative max-h-[90vh] max-w-[90vw] overflow-auto sm:overflow-hidden"
                onClick={(e) => e.stopPropagation()}
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
                  src={displayedImages[currentImageIndex]?.src}
                  alt={displayedImages[currentImageIndex]?.title}
                  className="max-h-[90vh] max-w-[90vw] object-contain"
                  onLoad={() => setIsLoading(false)}
                  onError={() => setIsLoading(false)}
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 text-center text-white/80 py-4 bg-black/50">
                  <h3 className="text-xl font-semibold mb-2">
                    {displayedImages[currentImageIndex]?.title}
                  </h3>
                  <p className="text-sm opacity-80 mb-2">
                    {displayedImages[currentImageIndex]?.description}
                  </p>
                  <p className="text-xs opacity-60">
                    {currentImageIndex + 1} of {displayedImages.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-bass-gray to-bass-light rounded-2xl">
          <h2 className="text-3xl font-display font-bold gradient-text mb-4">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to create stunning visuals and unforgettable experiences for your next event in Kuala Lumpur and beyond.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90"
          >
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;