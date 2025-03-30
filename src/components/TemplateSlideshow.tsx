
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  image: string;
  category: string;
}

interface TemplateSlideshowProps {
  templates: Template[];
  title?: string;
  description?: string;
  onTemplateClick?: (template: Template) => void;
}

const TemplateSlideshow: React.FC<TemplateSlideshowProps> = ({
  templates,
  title,
  description,
  onTemplateClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  
  // Handle autoplay
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, templates.length]);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? templates.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === templates.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const visibleTemplates = () => {
    const visibleCount = 3; // Show 3 templates at once on desktop
    const templatesArray = [...templates];
    const result = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % templates.length;
      result.push(templatesArray[index]);
    }
    
    return result;
  };

  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="max-w-3xl mx-auto text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {description && <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>}
          </div>
        )}
        
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <Button
            size="icon"
            variant="outline"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            size="icon"
            variant="outline" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Slideshow container */}
          <div 
            ref={slideContainerRef}
            className="flex flex-row gap-6 transition-all duration-500 ease-in-out overflow-x-hidden"
          >
            {visibleTemplates().map((template, idx) => (
              <div 
                key={`${template.id}-${idx}`}
                className="w-full md:w-1/3 flex-shrink-0 group cursor-pointer"
                onClick={() => onTemplateClick?.(template)}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-medium">{template.name}</h3>
                      <p className="text-white/80 text-sm">{template.category}</p>
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="mt-2 bg-white text-gray-900 hover:bg-gray-100"
                      >
                        Use This Template
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {templates.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex 
                    ? "bg-brand-500 w-6" 
                    : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateSlideshow;
