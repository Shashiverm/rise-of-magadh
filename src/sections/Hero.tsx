import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (title) {
      title.classList.add('animate-fade-in');
    }
    
    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('animate-fade-in');
      }, 400);
    }
    
    if (button) {
      setTimeout(() => {
        button.classList.add('animate-fade-in');
      }, 800);
    }
  }, []);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: 'url("https://cihs.blog/wp-content/uploads/2024/08/akhand-bharat-manifestation-of-spiritual-nationalism-.jpg")',
          filter: 'brightness(0.4)'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-amber-50 mb-6 opacity-0 transition-opacity duration-1000"
        >
          Rise of Magadh: A Mauryan Epic
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto mb-10 opacity-0 transition-opacity duration-1000"
        >
          Journey through the birth of India's first great empire — from Chandragupta's revolution to Ashoka's enlightenment
        </p>
        <div 
          ref={buttonRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <a 
            href="#about" 
            className="inline-block bg-amber-700 hover:bg-amber-800 text-amber-50 font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            Begin the Journey
          </a>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#FFECD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;