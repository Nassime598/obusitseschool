import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Image {
  url: string;
  alt: string;
  caption?: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images: Image[] = [
    {
      url: "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Students in classroom",
      caption: "Students engaged in collaborative learning"
    },
    {
      url: "https://images.pexels.com/photos/8535191/pexels-photo-8535191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "School library",
      caption: "Our well-equipped library"
    },
    {
      url: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201910/mit-african-students-association-00_0.png?itok=AIEY3Q9a",
      alt: "School sports",
      caption: "Sports activities for holistic development"
    },
    {
      url: "https://s3.amazonaws.com/one-org/us/wp-content/uploads/2017/08/14104516/RoomtoRead2.jpg",
      alt: "Science lab",
      caption: "Students in our science laboratory"
    },
    {
      url: "https://images.unsplash.com/photo-1548102268-3d7dc56b01e1?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "School event",
      caption: "Cultural events at Obusitse"
    },
    {
      url: "https://www.developafrica.org/sites/default/files/FAWE%20Girl.jpg",
      alt: "Computer lab",
      caption: "Our computer literacy program"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="section bg-slate-50">
      <div className="container">
        <div className="section-title">
          <h2>School Gallery</h2>
          <p>Glimpses of life and learning at Obusitse Middle School</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <div 
              key={index}
              className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.02]"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-slate-600">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
            <button 
              className="absolute text-white top-4 right-4 hover:text-teal-400"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute transform -translate-y-1/2 left-4 top-1/2"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft className="w-10 h-10 text-white hover:text-teal-400" />
            </button>
            
            <div className="relative max-w-4xl mx-auto">
              <img 
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="max-h-[80vh] w-auto mx-auto"
              />
              
              <div className="p-4 mt-2 text-center text-white bg-black/50 backdrop-blur-sm rounded-lg">
                <p>{images[selectedImage].caption}</p>
              </div>
            </div>
            
            <button 
              className="absolute transform -translate-y-1/2 right-4 top-1/2"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight className="w-10 h-10 text-white hover:text-teal-400" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;