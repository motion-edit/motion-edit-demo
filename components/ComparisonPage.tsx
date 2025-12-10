
import React from 'react';
import { motion } from 'framer-motion';

const ComparisonPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-6xl mx-auto mb-16 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-4xl mx-auto max-w-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            Comparison with Closed-Source & Open-Source Models
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-light"
          >
            Qualitative analysis of our Motion-NFT method against state-of-the-art closed-source and open-source methods.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
        <div className="grid md:grid-cols-3 gap-8 mt-12">
           <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Motion Fidelity</h3>
              <p className="text-blue-800/80 text-sm">
                Our model significantly outperforms baselines in adhering to directional motion prompts, ensuring objects move exactly as described.
              </p>
           </div>
           <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-2">Identity Preservation</h3>
              <p className="text-green-800/80 text-sm">
                 Thanks to the Negative-aware component, MotionNFT maintains the visual identity of subjects and backgrounds better than competing methods.
              </p>
           </div>
           <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Complex Scenes</h3>
              <p className="text-purple-800/80 text-sm">
                 The model handles multi-object scenes and subtle deformations (like smiling or bending) with higher accuracy.
              </p>
           </div>
        </div>
        </motion.div>
        <div className="text-center max-w-7xl mx-auto mb-10 space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-xl md:text-3xl font-bold tracking-tight mb-8 text-gray-900"
        >
          Comparison with Closed-Source Models
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-8"
        >
          We conduct selective case studies of MotionNFT against leading closed-source commercial baselines: Nano-Banana, GPT-Image-1, Seedream, and Hunyuan Image. Red circles highlight failure regions where baselines exhibit spatial inertia (e.g., failing to displace the car in the bottom row) or structural hallucination (e.g., generating an artifact ``foot'' in the second row). While commercial models generally maintain high visual quality, they frequently struggle to ground complex motion changes or maintain visual consistency. MotionNFT accurately follows these dynamic instructions, ensuring geometric alignment with the ground truth.
        </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden shadow-2xl border border-gray-200 bg-gray-50 mb-12"
        >
          {/* Using placeholder as requested for the comparison chart/grid */}
          <div className="w-full bg-gray-100 flex items-center justify-center relative">
             <img 
               src="/motionedit_images/examples/fail_closed.png" 
               alt="Comparison Matrix" 
               className="w-full h-full object-cover"
             />
          </div>
        </motion.div>

        <div className="text-center max-w-7xl mx-auto mb-10 space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-xl md:text-3xl font-bold tracking-tight mb-8 text-gray-900"
        >
          Comparison with Open-Source Models
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-8"
        >
          We compare MotionNFT against state-of-the-art open-source baselines: UniWorld-V1, BAGEL, and FLUX.1 Kontext [Dev]. Red circles highlight failure regions. Baseline models exhibit different failure modes like editing inertia (e.g., failing to change the lion's pose in row 2), or motion misalignment (e.g., raising the robot's right arm instead of left arm in row 5). While baselines often struggle to execute challenging motion edits, MotionNFT achieves superior geometric grounding, accurately following semantic instructions and maintaining high motion fidelity to the ground truth.
        </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden shadow-2xl border border-gray-200 bg-gray-50 mb-12"
        >
          {/* Using placeholder as requested for the comparison chart/grid */}
          <div className="w-full bg-gray-100 flex items-center justify-center relative">
             <img 
               src="/motionedit_images/examples/fail_open.png" 
               alt="Comparison Matrix" 
               className="w-full h-full object-cover"
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ComparisonPage;
