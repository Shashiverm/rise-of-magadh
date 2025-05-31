import React, { useRef, useEffect } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      const children = sectionRef.current.querySelectorAll('.animate-on-scroll');
      children.forEach(child => {
        observer.observe(child);
      });
    }
    
    return () => {
      if (sectionRef.current) {
        const children = sectionRef.current.querySelectorAll('.animate-on-scroll');
        children.forEach(child => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-8 text-center animate-on-scroll opacity-0 transition-opacity duration-1000">
            The Mauryan Empire
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300 text-lg">
              The Mauryan Empire stands as one of ancient India's most influential and extensive political entities. Founded in 322 BCE by Chandragupta Maurya with the guidance of his advisor Chanakya, it unified nearly the entire Indian subcontinent for the first time in recorded history.
            </p>
            
            <div className="my-8 bg-amber-50 border-l-4 border-amber-700 p-6 shadow-sm animate-on-scroll opacity-0 transition-opacity duration-1000 delay-500">
              <p className="text-amber-900 italic font-medium">
                "The Mauryan period represents the first great climax of Indian history and culture... It saw the flowering of an imperial vision that would influence all subsequent empires in Indian history."
              </p>
              <p className="text-right text-amber-700 mt-2">— Romila Thapar, Historian</p>
            </div>
            
            <p className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-700 text-lg">
              At its height under Emperor Ashoka (r. 268-232 BCE), the empire stretched from present-day Afghanistan and parts of Persia in the west to Bengal and Assam in the east, and from the Himalayas in the north to the plateau of the Deccan in the south. More than just a political entity, the Mauryan Empire represented a unique fusion of centralized administration, philosophical thought, religious tolerance, and cultural advancement.
            </p>
            
            <p className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-900 text-lg">
              This historical journey explores the rise of the empire from humble beginnings, through its golden age of prosperity and ethical governance, to its gradual decline — a story that continues to resonate with lessons for governance, power, and moral leadership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-amber-100 p-6 rounded-lg shadow-sm animate-on-scroll opacity-0 transition-opacity duration-1000 delay-1000">
              <h3 className="font-serif font-bold text-amber-900 mb-2">322-185 BCE</h3>
              <p>Duration of the Mauryan Empire, spanning nearly 140 years of rule across the Indian subcontinent</p>
            </div>
            
            <div className="bg-amber-100 p-6 rounded-lg shadow-sm animate-on-scroll opacity-0 transition-opacity duration-1000 delay-1100">
              <h3 className="font-serif font-bold text-amber-900 mb-2">5 Million km²</h3>
              <p>Estimated area of the empire at its peak, making it one of the largest empires of its time</p>
            </div>
            
            <div className="bg-amber-100 p-6 rounded-lg shadow-sm animate-on-scroll opacity-0 transition-opacity duration-1000 delay-1200">
              <h3 className="font-serif font-bold text-amber-900 mb-2">3 Great Emperors</h3>
              <p>Chandragupta Maurya, Bindusara, and Ashoka each contributed uniquely to the empire's legacy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;