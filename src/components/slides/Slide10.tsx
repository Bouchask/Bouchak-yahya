import { motion } from 'framer-motion';

export const Slide10 = () => (
  <div className="w-full max-w-5xl mx-auto">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-white mb-12 text-center"
    >
      Summary & Conclusion
    </motion.h2>

    <div className="space-y-6">
      {/* Recap */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border border-blue-300/30"
      >
        <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">📚 Recap</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">👨‍🏫</div>
            <p className="text-white font-semibold">Supervised Learning</p>
            <p className="text-white/70 text-sm mt-1">Learn from labeled data</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">🔍</div>
            <p className="text-white font-semibold">Unsupervised Learning</p>
            <p className="text-white/70 text-sm mt-1">Discover patterns</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">🎮</div>
            <p className="text-white font-semibold">Reinforcement Learning</p>
            <p className="text-white/70 text-sm mt-1">Learn through interaction</p>
          </div>
        </div>
      </motion.div>

      {/* Process */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30"
      >
        <h3 className="text-2xl font-bold text-purple-300 mb-4">🔄 Process</h3>
        <p className="text-xl text-white/90">
          Follow a structured workflow: <span className="text-yellow-300">Preprocess → Train → Evaluate → Deploy</span>
        </p>
      </motion.div>

      {/* Outlook */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-6 border border-green-300/30"
      >
        <h3 className="text-2xl font-bold text-green-300 mb-4">🚀 Outlook</h3>
        <p className="text-xl text-white/90">
          A powerful and accessible field with Python, ready to solve complex problems across all industries
        </p>
      </motion.div>

      {/* Final Message */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 border border-yellow-300/30"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">✨</div>
          <h3 className="text-4xl font-bold text-yellow-300 mb-4">
            An Exciting Journey Ahead!
          </h3>
          <p className="text-2xl text-white/90">
            The future of AI and Machine Learning is in your hands
          </p>
        </div>
      </motion.div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
      >
        <h3 className="text-xl font-bold text-white mb-4 text-center">Key Takeaways</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/90">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>ML learns from data without explicit programming</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Three main types: Supervised, Unsupervised, Reinforcement</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Python ecosystem makes ML accessible to everyone</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Real-world applications are transforming industries</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
