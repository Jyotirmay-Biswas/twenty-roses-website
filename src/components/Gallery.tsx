
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery: React.FC = () => {
  // Updated images array with your uploaded photo as the first item
  const images = [
    { 
      id: 1, 
      src: "/lovable-uploads/ourfirstdate.jpg", 
      alt: "Our first date", 
      caption: "Our first date" 
    },
    { id: 2, src: "/lovable-uploads/bonolota.jpg", alt: "Special moment 2", caption: "A trip to Bonolota Resort" },
    { id: 3, src: "/lovable-uploads/bishnupur.jpg", alt: "Special moment 3", caption: "Bishnupur Hoping" },
    { id: 4, src: "/lovable-uploads/ghar.jpg", alt: "Special moment 4", caption: "Towards Home" },
    { id: 5, src: "/lovable-uploads/HOTTI.jpg", alt: "Special moment 5", caption: "My perfect dinner" },
    { id: 6, src: "/lovable-uploads/COLLEGE.jpg", alt: "Special moment 6", caption: "Your smile that day in College" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="birthday-container">
        <h2 className="section-title">Beautiful Memories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Every moment with you becomes a precious memory. Here's a collection of some of our favorite times together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 staggered">
          {images.map((image, index) => (
            <Card key={image.id} className="overflow-hidden card-effect golden-border bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full aspect-[4/3] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-lg font-dancing">{image.caption}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
