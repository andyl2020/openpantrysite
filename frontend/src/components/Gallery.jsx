import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { siteImages } from '@/lib/siteAssets';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const galleryImages = [
    {
      url: siteImages.galleryWorkshop,
      alt: 'Open Pantry workshop moment',
      eyebrow: 'Workshop',
      title: 'Community Workshop',
      caption: 'A cozy Open Pantry workshop in full swing.'
    },
    {
      url: siteImages.galleryDecoratedCakes,
      alt: 'Participants proudly displaying decorated cakes',
      eyebrow: 'Finished Cakes',
      title: 'Beautiful Creations',
      caption: 'Finished cakes ready for their proud photo moment.'
    },
    {
      url: siteImages.galleryHandsOn,
      alt: 'Hands-on cake decorating session',
      eyebrow: 'Hands-On',
      title: 'Learning Together',
      caption: 'Decorating, learning, and plenty of icing along the way.'
    },
    {
      url: siteImages.galleryCouples,
      alt: 'Couple enjoying a cake decorating activity together',
      eyebrow: 'Date Night',
      title: 'Creative Expression',
      caption: 'A sweet decorating experience made for sharing.'
    },
    {
      url: siteImages.galleryCreativeMoment01,
      alt: 'Open Pantry workshop candid moment',
      eyebrow: 'Candid Joy',
      title: 'More Sweet Moments',
      caption: 'Another slice of the laughter and creativity from class.'
    },
    {
      url: siteImages.galleryCreativeMoment02,
      alt: 'Open Pantry cake decorating gathering',
      eyebrow: 'Cake Time',
      title: 'Creative Energy',
      caption: 'A behind-the-scenes look at another cozy decorating session.'
    },
    {
      url: siteImages.galleryCreativeMoment03,
      alt: 'Open Pantry workshop celebration moment',
      eyebrow: 'Highlights',
      title: 'Workshop Glow',
      caption: 'More community, color, and cake-decorating fun.'
    }
  ];

  const scrollGallery = (direction) => {
    const rail = galleryRef.current;
    if (!rail) {
      return;
    }

    const scrollAmount = Math.min(rail.clientWidth * 0.85, 420);
    rail.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white via-[#FFF9F6] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Workshop <span className="text-[#00A5B8]">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFB5B5] rounded-full mb-6"></div>
            <p className="text-xl text-gray-600">
              Scroll through cozy class moments, finished cakes, and extra snapshots from the Open Pantry community.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <div className="inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-black/5">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#00A5B8]">
                {galleryImages.length} Photos
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-500">Swipe or scroll</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollGallery(-1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-[#00A5B8] hover:text-[#00A5B8]"
                  aria-label="Scroll gallery left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollGallery(1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-[#00A5B8] hover:text-[#00A5B8]"
                  aria-label="Scroll gallery right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-[#FFF9F6] to-transparent lg:block"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-white to-transparent lg:block"></div>

          <div
            ref={galleryRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pr-4 scroll-smooth"
          >
            {galleryImages.map((image, index) => (
              <article
                key={image.url}
                className="group relative flex-none snap-start overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 w-[84vw] sm:w-[25rem] lg:w-[28rem] cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#00A5B8] shadow-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-[28rem] object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-6 pb-6 pt-20">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FFD4D4]">
                    {image.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{image.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{image.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
