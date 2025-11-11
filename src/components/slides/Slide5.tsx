import { motion } from 'framer-motion';

export const Slide5 = () => (
  <div className="w-full max-w-5xl mx-auto">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-white mb-12 text-center"
    >
      Unsupervised Learning in Detail
    </motion.h2>

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-300/30 mb-8"
    >
      <h3 className="text-3xl font-semibold text-purple-300 mb-4 text-center">🎯 Goal</h3>
      <p className="text-2xl text-white/90 text-center">
        Explore data structure without predefined labels
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
      >
        <h3 className="text-2xl font-bold text-yellow-300 mb-4">🔗 Clustering</h3>
        <p className="text-lg text-white/90 mb-4">Grouping data into meaningful subgroups</p>
        <div className="space-y-2 text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Customer segmentation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Market research</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Social network analysis</span>
          </div>
        </div>
        
        {/* Visual representation of clustering */}
        <div className="mt-6 bg-white/5 rounded-lg p-4">
          <div className="flex justify-around items-center">
            <div className="space-y-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            </div>
            <div className="space-y-2">
              <div className="w-3 h-3 rounded-full bg-purple-400"></div>
              <div className="w-3 h-3 rounded-full bg-purple-400"></div>
              <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            </div>
            <div className="space-y-2">
              <div className="w-3 h-3 rounded-full bg-pink-400"></div>
              <div className="w-3 h-3 rounded-full bg-pink-400"></div>
              <div className="w-3 h-3 rounded-full bg-pink-400"></div>
            </div>
          </div>
          <p className="text-center text-xs text-white/60 mt-2">Data grouped into clusters</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">📉 Dimensionality Reduction</h3>
        <p className="text-lg text-white/90 mb-4">Compressing data while keeping its essence</p>
        <div className="space-y-2 text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Faster processing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Better visualization</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Noise reduction</span>
          </div>
        </div>
        
        {/* Visual representation */}
        <div className="mt-6 bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl mb-1">📊</div>
              <p className="text-xs text-white/60">High Dimensions</p>
            </div>
            <div className="text-2xl text-white">→</div>
            <div className="text-center">
              <div className="text-3xl mb-1">📈</div>
              <p className="text-xs text-white/60">Low Dimensions</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30"
    >
      <p className="text-xl text-white/90 text-center italic">
        💡 No "right answers" - the algorithm discovers patterns on its own!
      </p>
    </motion.div>
  </div>
);
