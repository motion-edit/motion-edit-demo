
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DEMOS } from '../constants';

const Features: React.FC = () => {
  const [selectedId, setSelectedId] = useState(DEMOS[0].id);
  const selectedDemo = DEMOS.find(d => d.id === selectedId) || DEMOS[0];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left Sidebar - Thumbnails */}
          <div className="w-full lg:w-24 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide shrink-0">
            {DEMOS.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedId(demo.id)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0 transition-all duration-300 border-2 ${
                  selectedId === demo.id ? 'border-blue-500 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={demo.beforeImage} alt={`Demo ${demo.id}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 w-full grid lg:grid-cols-[1.2fr_auto_1fr] gap-8 items-center">
            
            {/* Before Column */}
            <div className="space-y-4">
              <motion.div 
                key={`before-${selectedId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-900"
              >
                <img src={selectedDemo.beforeImage} alt="Before" className="w-full h-full object-cover opacity-90" />
                <div className="absolute top-6 right-6">
                  <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-white/10">Input</span>
                </div>
              </motion.div>
              
              <p className="text-center text-gray-500 font-medium text-lg mt-4">Before</p>

              <div className="bg-white border border-gray-100 p-3 rounded-lg flex gap-2 items-center shadow-sm">
                <span className="text-blue-500 font-semibold text-sm whitespace-nowrap">Prompt:</span>
                <span className="text-gray-800 text-sm">{selectedDemo.beforePrompt}</span>
              </div>
            </div>

            {/* Transition Arrow */}
            <div className="hidden lg:flex flex-col items-center justify-center text-gray-300">
               <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                  <path d="M10 50 C 40 50, 60 40, 110 10" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
                  <path d="M105 5 L 110 10 L 100 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>

            {/* After Column */}
            <div className="space-y-12">
               
               {/* Top Image Group */}
               <div>
                  <motion.div
                      key={`after-main-${selectedId}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-white bg-gray-900"
                  >
                    <img src={selectedDemo.afterImage} alt="After 1" className="w-full h-full object-cover" />
                      <div className="absolute top-6 right-6">
                        <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-white/10">Motion-NFT Generated</span>
                      </div>
                  </motion.div>
                  <p className="text-center text-gray-500 font-medium text-lg mt-4">After</p>
               </div>

               {/* Bottom Image Group */}
               <div>
                 <motion.div
                   key={`after-sub-${selectedId}`}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2, duration: 0.5 }}
                   className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-white bg-gray-900 ml-12"
                 >
                   <img src={selectedDemo.finalImage} alt="After 2" className="w-full h-full object-cover" />
                 </motion.div>
                 
                 <p className="text-center text-gray-500 font-medium text-lg mt-4 ml-12">Ground Truth</p>
               </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
