import React, { useRef, useEffect, useState } from 'react';
import TimelineEvent from '../components/TimelineEvent';
import { timelineData } from '../data/timelineData';

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the timeline we've scrolled (0 to 1)
      let scrollProgress = (windowHeight - timelineTop) / (timelineHeight + windowHeight);
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      
      // Map this progress to an event index
      const eventIndex = Math.floor(scrollProgress * timelineData.length);
      setActiveEvent(Math.min(eventIndex, timelineData.length - 1));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="timeline" className="py-16 md:py-24 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-12 text-center">
          The Mauryan Timeline
        </h2>
        
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-1 bg-amber-300 transform md:translate-x-[-50%]"></div>
          
          {/* Timeline Events */}
          {timelineData.map((event, index) => (
            <TimelineEvent
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              isActive={index <= activeEvent}
              position={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;