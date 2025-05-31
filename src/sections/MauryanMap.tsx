import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mapData } from '../data/mapData';

const MauryanMap = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  const handlePrevPhase = () => {
    setActivePhase((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const handleNextPhase = () => {
    setActivePhase((prev) => (prev < mapData.length - 1 ? prev + 1 : prev));
  };

  return (
    <section id="map" className="py-16 md:py-24 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4 text-center">
          The Mauryan Empire Map
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-stone-700">
          Explore the territorial expansion and reach of the Mauryan Empire through different phases
        </p>
        
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Map Display */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <img 
              src={mapData[activePhase].mapImageUrl} 
              alt={mapData[activePhase].title} 
              className="w-full h-full object-cover object-center"
            />
            
            {/* Map Title Overlay */}
            <div className="absolute top-0 left-0 w-full bg-amber-900/80 text-amber-50 p-4">
              <h3 className="text-xl font-serif font-bold">{mapData[activePhase].title}</h3>
              <p className="text-amber-200">{mapData[activePhase].period}</p>
            </div>
          </div>
          
          {/* Map Description */}
          <div className="p-6">
            <p className="text-stone-700 mb-4">{mapData[activePhase].description}</p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              {mapData[activePhase].keyPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 text-sm text-amber-900"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button 
              onClick={handlePrevPhase}
              className={`rounded-full p-2 bg-white/80 text-amber-900 shadow hover:bg-white transition-colors ${
                activePhase === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={activePhase === 0}
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button 
              onClick={handleNextPhase}
              className={`rounded-full p-2 bg-white/80 text-amber-900 shadow hover:bg-white transition-colors ${
                activePhase === mapData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={activePhase === mapData.length - 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Phase Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {mapData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activePhase ? 'bg-amber-700 scale-125' : 'bg-amber-300'
                }`}
                aria-label={`View map phase ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MauryanMap;