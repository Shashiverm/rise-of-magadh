import React, { useState } from 'react';
import { figuresData } from '../data/figuresData';
import FigureCard from '../components/FigureCard';

const KeyFigures = () => {
  const [activeFigure, setActiveFigure] = useState(0);

  return (
    <section id="key-figures" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4 text-center">
          Key Figures
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-stone-700">
          The visionaries, strategists, and rulers who shaped the Mauryan legacy
        </p>
        
        {/* Figure Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {figuresData.map((figure, index) => (
            <button
              key={index}
              onClick={() => setActiveFigure(index)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                index === activeFigure 
                  ? 'bg-amber-700 text-amber-50' 
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
              }`}
            >
              {figure.name}
            </button>
          ))}
        </div>
        
        {/* Active Figure Content */}
        <FigureCard
          name={figuresData[activeFigure].name}
          role={figuresData[activeFigure].role}
          years={figuresData[activeFigure].years}
          description={figuresData[activeFigure].description}
          achievements={figuresData[activeFigure].achievements}
          imageUrl={figuresData[activeFigure].imageUrl}
          quote={figuresData[activeFigure].quote}
        />
      </div>
    </section>
  );
};

export default KeyFigures;