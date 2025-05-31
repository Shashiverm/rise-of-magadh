import React from 'react';
import { GithubIcon, BookOpen, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Rise of Magadh: A Mauryan Epic</h3>
            <p className="mb-4">An interactive journey through the birth, rise, and legacy of one of history's greatest empires.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Shashiverm" className="text-amber-300 hover:text-amber-100 transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
                <BookOpen size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">References</h3>
            <ul className="space-y-2">
              <li><a href="https://en.wikipedia.org/wiki/Maurya_Empire" className="text-amber-300 hover:text-amber-100 transition-colors">Wikipedia - Maurya Empire</a></li>
              <li><a href="https://bpdpgcknk.edu.in/Content/67_88_The%20Wonder%20That%20was%20India.pdf" className="text-amber-300 hover:text-amber-100 transition-colors">The Wonder That Was India – A.L. Basham</a></li>
              <li><a href="https://ia800402.us.archive.org/35/items/in.ernet.dli.2015.126947/2015.126947.Asoka-And-The-Decline-Of-The-Mauryas_text.pdf" className="text-amber-300 hover:text-amber-100 transition-colors">Ashoka and the Decline of the Mauryas – Romila Thapar</a></li>
              <li><a href="http://library.bjp.org:8080/jspui/bitstream/123456789/80/1/R.%20Shamasastry-Kautilya%27s%20Arthashastra%20%20%20%281915%29.pdf" className="text-amber-300 hover:text-amber-100 transition-colors">The Arthashastra – Translated by R. Shamasastry</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">About the Project</h3>
            <p>This project was created to bring ancient Indian history to life through interactive web design. Our goal is to make history accessible, engaging, and inspirational.</p>
            <p className="mt-4 text-amber-300">&copy; 2025 Hackstory Project</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;