import React, { useState } from 'react';
import { edictData } from '../data/edictData';

const Dharma = () => {
  const [activeEdict, setActiveEdict] = useState(0);

  return (
    <section id="dharma" className="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4 text-center">
          Ashoka's Dharma
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-stone-700">
          After the bloody Kalinga War, Emperor Ashoka embraced Buddhism and promoted a policy of Dharma (righteousness) throughout his empire
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">The Transformation</h3>
            <p className="text-stone-700 mb-4">
              The Kalinga War in 260 BCE marked a turning point in Ashoka's life. The enormous suffering caused by the war—over 100,000 killed and 150,000 deported—led to profound remorse and a spiritual conversion to Buddhism.
            </p>
            <p className="text-stone-700 mb-4">
              In his 13th Rock Edict, Ashoka expressed his deep regret:
            </p>
            <blockquote className="border-l-4 border-amber-500 pl-4 italic my-6">
              <p className="text-amber-900">
                "On conquering Kalinga, the Beloved of the Gods felt remorse, for when an independent country is conquered, the slaughter, death, and deportation of people is extremely grievous to the Beloved of the Gods and weighs heavily on his mind."
              </p>
            </blockquote>
            <p className="text-stone-700">
              This transformation led him to reject violence and establish policies based on compassion, tolerance, and moral virtue—principles he called "Dhamma" (Dharma).
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-amber-700 text-amber-50 p-4">
                <h3 className="text-xl font-serif font-bold">Rock and Pillar Edicts</h3>
                <p>Ashoka erected numerous stone pillars and carved rock edicts across his empire to spread his message of Dharma</p>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {edictData.map((edict, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveEdict(index)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        index === activeEdict 
                          ? 'bg-amber-700 text-amber-50' 
                          : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                      }`}
                    >
                      {edict.title}
                    </button>
                  ))}
                </div>
                
                <div>
                  <h4 className="font-serif font-bold text-amber-900 text-lg mb-2">
                    {edictData[activeEdict].title}
                  </h4>
                  <p className="text-stone-600 text-sm mb-4">
                    {edictData[activeEdict].location}
                  </p>
                  <p className="text-stone-700 mb-4">
                    {edictData[activeEdict].content}
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded p-4">
                    <h5 className="font-medium text-amber-900 mb-2">Historical Significance</h5>
                    <p className="text-stone-700">
                      {edictData[activeEdict].significance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Principles of Dharma</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Non-violence (Ahimsa) toward all living beings</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Tolerance toward all religions and philosophies</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Obedience to parents and elders</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Generosity toward priests, ascetics, and the poor</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Moderation in spending and avoiding debt</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Welfare Measures</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Construction of hospitals for humans and animals</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Planting of medicinal herbs and trees along roads</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Building rest houses and wells for travelers</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Appointment of officials (Dharma-mahamatras) to promote welfare</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Reduced punishments and greater judicial fairness</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Buddhist Missions</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Sent missionaries to Sri Lanka, Southeast Asia, and Central Asia</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Established diplomatic relations with Hellenistic kingdoms</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Dispatched his son Mahinda to Sri Lanka to spread Buddhism</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Supported the Third Buddhist Council at Pataliputra</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>Built stupas and viharas (monasteries) throughout his empire</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dharma;