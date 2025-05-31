import React from 'react';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  isActive: boolean;
  position: 'left' | 'right';
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  year,
  title,
  description,
  isActive,
  position
}) => {
  return (
    <div className={`relative flex items-center mb-16 ${
      position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
    }`}>
      {/* Timeline Dot */}
      <div className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] w-4 h-4 rounded-full transition-all duration-500">
        <div className={`w-full h-full rounded-full transition-all duration-500 ${
          isActive ? 'bg-amber-700 scale-125' : 'bg-amber-400'
        }`}></div>
      </div>
      
      {/* Content */}
      <div className={`w-full md:w-[45%] ${
        position === 'right' ? 'md:pl-0 md:pr-12 text-left' : 'md:pl-12 md:pr-0 text-left'
      }`}>
        <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 transform ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-40'
        }`}>
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-3">
            {year}
          </span>
          <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">{title}</h3>
          <p className="text-stone-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;