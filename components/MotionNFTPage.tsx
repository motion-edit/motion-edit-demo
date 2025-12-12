
import React from 'react';
import { motion } from 'framer-motion';

const MotionNFTPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-gray-900"
          >
            MotionNFT Framework
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-light"
          >
            We introduce <strong className="font-extrabold">MotionNFT</strong> (Motion Negative-aware Fine Tuning), a motion-aware reward framework designed for NFT training on motion editing tasks. Since our objective is to evaluate how accurately a model applies the intended action to subjects and objects in images, our reward model must quantify the alignment between model-predicted motion and the ground truth motion edit. Inspired by the use of optical flow for measuring motion between video frames, we adopt an optical flow-based motion-centric scoring framework that measures the level of alignment between input-edit motion and input-ground truth motion.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-xl border border-gray-200 mb-12"
        >
          <div className="text-center max-w-[600px] mx-auto w-full flex items-center justify-center relative">
              <img 
                src="motionedit_images/examples/motionnft_pipeline.png" 
                alt="Benchmark Result" 
                className="w-full h-full object-cover"
              />
          </div>
          <div className="p-6 bg-white border-t border-gray-100">
            <p className="text-gray-600">
              MotionNFT's Reward Scoring pipeline. For each sampled model-edited image, we measure the alignment between the input-generated optical flow and the input-ground truth optical flow along 2 perspectives--magnitude and direction--obtaining the final reward score.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-xl border border-gray-200 mb-12"
        >
          <div className="text-center max-w-[1000px] mx-auto w-full flex items-center justify-center relative">
              <img 
                src="motionedit_images/examples/motionnft_quantitative.png" 
                alt="Benchmark Result" 
                className="w-full h-full object-cover"
              />
          </div>
          <div className="p-6 bg-white border-t border-gray-100">
            {/* <h3 className="text-xl font-bold text-gray-900 mb-2">Dataset Statistics</h3> */}
            <p className="text-gray-600">
              Quantitative results on MotionEdit-Bench. Among existing methods, diffusion-based editors such as Instruct-P2P and MagicBrush perform poorly across both generative and discriminative metrics. FLUX.1 Kontext [Dev] and Qwen-Image-Edit models trained with MotionNFT yields the best overall results: for both models, applying MotionNFT boosts all generative metrics, MAS and pairwise win rate.
            </p>
          </div>
        </motion.div>

        <div className="text-center max-w-7xl mx-auto mb-16 space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-xl md:text-3xl font-bold tracking-tight mb-12 text-gray-900"
        >
          Qualitative Results: Qwen-Image-Edit
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600"
        >
          Qualitative comparison of our method to Qwen-Image-Edit and the MLLM-only reward training in Uniworld-V2. The base model frequently fails to demonstrate correct motion awareness for the edit (e.g. fail to move the subject's arms in the first row, and failing to displace the watermelon in the last row). While the MLLM-only approach improves semantic adherence, it often lacks geometric precision (e.g., caterpillar's orientation in row 7). MotionNFT leverages optical flow to bridge this gap, achieving precise motion alignment and high fidelity to the editing instructions.
        </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-[1200px] mx-auto overflow-hidden border border-gray-200 mb-12"
        >
          <div className="w-full bg-gray-100 flex items-center justify-center relative">
             <img 
               src="motionedit_images/examples/suppl_example_qwen.png" 
               alt="Qualitative Results Qwen" 
               className="w-full h-full object-cover"
             />
          </div>
        </motion.div>

        <div className="text-center max-w-7xl mx-auto mb-16 space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-xl md:text-3xl font-bold tracking-tight mb-12 text-gray-900"
        >
          Qualitative Results: Flux.1 Kontext [Dev]
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600"
        >
           Qualitative comparison of our method to FLUX.1 Kontext [Dev] and the MLLM-only reward training in UniWorld-V2. The base model often exhibits editing inertia, failing to execute structural changes such as removing the handshake (row 6) or changing the subjects' directions (row 3). MLLM-only baseline also frequently hallucinates incorrect poses (e.g., the distorted limb placement in row 5) or fails to preserve subject identity (row 2). MotionNFT is able to interpret and execute complex motion edit instructions while preserving subject appearance and visual setting.
        </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-[1200px] mx-auto overflow-hidden border border-gray-200 mb-12"
        >
          <div className="w-full bg-gray-100 flex items-center justify-center relative">
             <img 
               src="motionedit_images/examples/suppl_example_flux.png" 
               alt="Qualitative Results Flux" 
               className="w-full h-full object-cover"
             />
          </div>
        </motion.div>

        {/* <div className="p-6 bg-white border-t border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Framework Architecture</h3>
          <p className="text-gray-600">
            Overview of the MotionNFT framework, illustrating the motion alignment rewards and negative-aware fine-tuning process.
          </p>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
          <p>
            MotionNFT introduces a post-training framework that specifically targets motion alignment. By utilizing motion rewards derived from optical flow estimation, we guide the generative model to produce edits that are consistent with the desired motion vectors.
          </p>
          <p>
            Additionally, our Negative-aware FineTuning strategy helps the model avoid common artifacts and unintended changes by explicitly penalizing deviations from the non-edited regions of the image, preserving the background and subject identity.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default MotionNFTPage;
