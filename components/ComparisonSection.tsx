import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Comparison with Base Model (Qwen-Image-Edit)
          </h2>
        </div>
        <div className="p-4 text-center">
          <p className="text-xl tracking-tight mb-8 text-gray-600">
            Qualitative examples of our MotionNFT. The baseline Qwen-Image-Edit model often fails to execute the instructed motion (circled regions), producing edits that do not match the required action change (red underlines). With MotionNFT training, the model succeeds in performing precise motion edits that closely align with the ground-truth transformations.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50">
          {/* Dummy image placeholder as requested */}
          <div className="w-full bg-gray-100 flex items-center justify-center relative">
             <img 
               src="motionedit_images/examples/motionnft_results_v2.png" 
               alt="Comparison with base model" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;