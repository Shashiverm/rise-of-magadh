import React from 'react';

interface FigureCardProps {
  name: string;
  role: string;
  years: string;
  description: string[];
  achievements: string[];
  imageUrl: string;
  quote?: {
    text: string;
    source: string;
  };
}

const FigureCard: React.FC<FigureCardProps> = ({
  name,
  role,
  years,
  description,
  achievements,
  imageUrl,
  quote
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Image */}
        <div className="h-64 lg:h-auto lg:col-span-1 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <p className="text-amber-50 text-sm">{years}</p>
            <h3 className="text-2xl font-serif font-bold text-amber-50">{name}</h3>
            <p className="text-amber-100">{role}</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 lg:col-span-2">
          <div className="prose prose-lg max-w-none">
            {description.map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
            
            {quote && (
              <blockquote className="border-l-4 border-amber-500 pl-4 italic my-6">
                <p className="text-amber-900">{quote.text}</p>
                <footer className="text-amber-700 font-medium">— {quote.source}</footer>
              </blockquote>
            )}
            
            <h4 className="font-serif font-bold text-amber-900 mt-6 mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigureCard;