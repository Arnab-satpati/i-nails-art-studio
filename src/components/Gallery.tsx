import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { client, queries, urlFor, GalleryImage } from '../lib/sanity';

interface GalleryProps {
  darkMode: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ darkMode }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const config = client.config?.();

        if (!config?.projectId || config.projectId === 'your-project-id') {
          console.warn('Sanity project ID not configured, using fallback data');
          setGalleryImages(defaultGalleryImages);
          setLoading(false);
          return;
        }

        const data = await client.fetch(queries.galleryImages);
        setGalleryImages(data);
      } catch (error) {
        console.warn('Error fetching gallery images from Sanity, using fallback data:', error);
        setGalleryImages(defaultGalleryImages);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  const defaultGalleryImages: GalleryImage[] = [
    {
      _id: '1',
      image: null,
      alt: 'Professional nail art design',
      category: 'Nail Art'
    },
    {
      _id: '2',
      image: null,
      alt: 'Eyelash extensions close-up',
      category: 'Eyelash Extensions'
    },
    {
      _id: '3',
      image: null,
      alt: 'Nail care treatment',
      category: 'Nail Care'
    },
    {
      _id: '4',
      image: null,
      alt: 'Permanent makeup application',
      category: 'Permanent Makeup'
    },
    {
      _id: '5',
      image: null,
      alt: 'Luxury nail design',
      category: 'Nail Art'
    },
    {
      _id: '6',
      image: null,
      alt: 'Volume lashes application',
      category: 'Eyelash Extensions'
    }
  ];

  const getDefaultImage = (category: string, index: number) => {
    const defaultImages = [
      'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3997382/pexels-photo-3997382.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3997377/pexels-photo-3997377.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];
    return defaultImages[index % defaultImages.length];
  };

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  if (loading) {
    return (
      <section id="gallery" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Work Gallery
          </h2>
          <p className={`text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Explore our stunning portfolio of nail art, eyelash extensions, and permanent makeup transformations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => {
            const imageUrl = image.image
              ? urlFor(image.image).width(600).height(600).url()
              : getDefaultImage(image.category, index);

            return (
              <div
                key={image._id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={image.alt || 'Gallery Image'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && galleryImages[selectedImage] && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <img
                src={
                  galleryImages[selectedImage].image
                    ? urlFor(galleryImages[selectedImage].image).width(1200).height(800).url()
                    : getDefaultImage(galleryImages[selectedImage].category, selectedImage)
                }
                alt={galleryImages[selectedImage].alt || 'Gallery Image'}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="font-medium">{galleryImages[selectedImage].category}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{selectedImage + 1} of {galleryImages.length}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
