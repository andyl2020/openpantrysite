import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_d2e1c9cd-4117-4e23-8dec-208e60b558d7/artifacts/egwff55q_group%20photo%20with%20patrice.jpg',
      alt: 'Group workshop with Patrice and participants',
      title: 'Community Workshop'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d2e1c9cd-4117-4e23-8dec-208e60b558d7/artifacts/8x9x9qde_1%20PXL_20260131_034055861.MP.jpg',
      alt: 'Participants proudly displaying decorated cakes',
      title: 'Beautiful Creations'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d2e1c9cd-4117-4e23-8dec-208e60b558d7/artifacts/zc6lz6zu_2%20PXL_20251029_184657327.MP.jpg',
      alt: 'Hands-on cake decorating session',
      title: 'Learning Together'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d2e1c9cd-4117-4e23-8dec-208e60b558d7/artifacts/zu09yshp_hero%20image%20patrice.jpg',
      alt: 'Individual cake decorating practice',
      title: 'Creative Expression'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Workshop <span className="text-[#00A5B8]">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFB5B5] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a peek at the joy, creativity, and beautiful cakes created in our workshops
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
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