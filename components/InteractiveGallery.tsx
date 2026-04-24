'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type InteractiveGalleryProps = {
  groupedImages: Record<string, string[]>;
  sortedGroups: string[];
  projectTitle: string;
};

export default function InteractiveGallery({ groupedImages, sortedGroups, projectTitle }: InteractiveGalleryProps) {
  const allImages = sortedGroups.flatMap(group => groupedImages[group]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Or whatever it was before
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') nextImage(e as any);
      if (e.key === 'ArrowLeft') prevImage(e as any);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, allImages.length]);

  const openLightbox = (imgSrc: string) => {
    const index = allImages.indexOf(imgSrc);
    if (index !== -1) setSelectedIndex(index);
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % allImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + allImages.length) % allImages.length);
    }
  };

  const closeLightbox = () => setSelectedIndex(null);

  if (sortedGroups.length === 0) {
    return (
      <div className="glass rounded-[2rem] p-16 text-center border-dashed border-2 border-white/20 relative z-20">
        <h3 className="text-2xl font-semibold mb-4 text-white/80">No images uploaded yet</h3>
        <p className="text-white/50 max-w-md mx-auto">
          To display your designs here, drop your image files into the public directory folder.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-24 relative z-20">
        {sortedGroups.map((group) => (
          <div key={group}>
            {group !== 'Gallery' && <h2 className="text-3xl font-bold mb-8 text-white border-b border-white/10 pb-4">{group.toUpperCase()}</h2>}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
              {groupedImages[group].map((src, idx) => (
                <div 
                  key={idx} 
                  onClick={() => openLightbox(src)}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden glass border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`${projectTitle} ${group} Image ${idx + 1}`}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                     <span className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white font-medium flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
                        Expand
                     </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 p-3 rounded-full transition-all z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 lg:left-10 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 p-4 rounded-full transition-all z-10"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 lg:right-10 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 p-4 rounded-full transition-all z-10"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            {/* Image Container */}
            <motion.div 
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.95, opacity: 0 }}
               transition={{ duration: 0.3, type: "spring", damping: 25 }}
               className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4 lg:p-12"
               onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={allImages[selectedIndex]} 
                alt={`${projectTitle} Fullscreen View`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                 <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white/80 text-sm font-medium tracking-widest">
                    {selectedIndex + 1} / {allImages.length}
                 </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
