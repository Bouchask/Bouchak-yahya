import { motion } from 'framer-motion';

export const Slide7 = () => (
  <div className="w-full max-w-5xl mx-auto">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-white mb-12 text-center"
    >
      The Machine Learning Workflow
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-2xl text-blue-300 text-center mb-12"
    >
      The Roadmap to Success
    </motion.p>

    <div className="space-y-6">
      {/* Step 1 */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-6 border border-blue-300/30"
      >
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            1
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Data Preprocessing</h3>
            <p className="text-white/90">Clean and shape raw data (handle missing values, scale features)</p>
          </div>
          <div className="text-4xl">🧹</div>
        </div>
      </motion.div>

      {/* Arrow */}
      <div className="flex justify-center">
        <div className="text-white text-3xl">↓</div>
      </div>

      {/* Step 2 */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30"
      >
        <div className="flex items-center gap-4">
          <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            2
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Training & Selection</h3>
            <p className="text-white/90">Train multiple models, compare them, and select the best one using cross-validation</p>
          </div>
          <div className="text-4xl">🎓</div>
        </div>
      </motion.div>

      {/* Arrow */}
      <div className="flex justify-center">
        <div className="text-white text-3xl">↓</div>
      </div>

      {/* Step 3 */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-6 border border-green-300/30"
      >
        <div className="flex items-center gap-4">
          <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            3
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-300 mb-2">Model Evaluation</h3>
            <p className="text-white/90">Test the final model on unseen data to check its real-world performance</p>
          </div>
          <div className="text-4xl">📊</div>
        </div>
      </motion.div>

      {/* Arrow */}
      <div className="flex justify-center">
        <div className="text-white text-3xl">↓</div>
      </div>

      {/* Step 4 */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-6 border border-orange-300/30"
      >
        <div className="flex items-center gap-4">
          <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            4
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-orange-300 mb-2">Prediction</h3>
            <p className="text-white/90">Deploy the model to make predictions on new data</p>
          </div>
          <div className="text-4xl">🚀</div>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
    >
      <p className="text-center text-white/90 italic">
        💡 This is a repeatable process - iterate to improve your model!
      </p>
    </motion.div>
  </div>
);
