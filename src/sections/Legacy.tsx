import React from 'react';

const Legacy = () => {
  return (
    <section id="legacy" className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4 text-center">
          The Mauryan Legacy
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-stone-700">
          How the Mauryan Empire shaped the future of South Asia and beyond
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1 */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Political Legacy</h3>
              <p className="text-stone-700 mb-4">
                The Mauryan Empire provided a model of centralized governance that influenced all subsequent Indian states. Its administrative innovations included:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>A hierarchical bureaucracy with clearly defined roles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>Provincial administration through governors (Kumara)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>A sophisticated spy network and information system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>Standardized currency and taxation systems</span>
                </li>
              </ul>
              <p className="mt-4 text-stone-700">
                Later empires like the Guptas, the Delhi Sultanate, and even the British Raj adapted elements of Mauryan governance to their own rule.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Cultural Impact</h3>
              <p className="text-stone-700 mb-4">
                The Mauryan period saw significant developments in art, architecture, and literature:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>The famous Ashokan pillars with their polished sandstone and elaborate capitals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>The beginnings of the rock-cut architecture tradition seen at sites like Barabar Caves</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>Literary works including the Arthashastra and Buddhist texts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>The Lion Capital of Ashoka, now India's national emblem</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Religious Influence</h3>
              <p className="text-stone-700 mb-4">
                Ashoka's patronage of Buddhism transformed it from a regional sect to a world religion:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>Buddhist missionaries sent throughout Asia established the religion in Sri Lanka, Myanmar, Thailand, and beyond</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>The Third Buddhist Council at Pataliputra standardized Buddhist doctrine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>Construction of stupas and monasteries created centers for Buddhist learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>Ashoka's concept of religious tolerance influenced later Indian rulers</span>
                </li>
              </ul>
              <p className="mt-4 text-stone-700">
                Without Ashoka's imperial patronage, Buddhism might never have spread beyond the Gangetic plain to become one of the world's major religions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Modern Relevance</h3>
              <p className="text-stone-700 mb-4">
                The Mauryan legacy continues to influence modern India and the world:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>The Ashoka Chakra appears on India's national flag</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>Ashoka's principles of religious tolerance and non-violence inspired leaders like Mahatma Gandhi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>The concept of welfare state implemented by Ashoka remains relevant to modern governance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span>The idea of a unified Indian subcontinent influenced the modern nation-state</span>
                </li>
              </ul>
              <div className="mt-4 bg-amber-100 border-l-4 border-amber-500 p-4">
                <p className="italic text-amber-900">
                  "Ashoka's policy of conquest by Dhamma rather than by the sword has an enduring message for the world."
                </p>
                <p className="text-right text-amber-700 mt-2">— Jawaharlal Nehru, First Prime Minister of India</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6">The End of an Era</h3>
          <p className="text-lg text-stone-700 max-w-3xl mx-auto">
            Although the Mauryan Empire declined after Ashoka's death in 232 BCE and finally collapsed in 185 BCE with the assassination of the last emperor Brihadratha, its legacy endured through the centuries. The dream of a unified Indian subcontinent, governed with wisdom and compassion, continues to inspire to this day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Legacy;