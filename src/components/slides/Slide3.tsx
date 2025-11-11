import { motion } from 'framer-motion';

export const Slide3 = () => (
  <div className="w-full max-w-6xl mx-auto">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-white mb-12 text-center"
    >
      The Three Types of Machine Learning
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Supervised Learning */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-6 border border-blue-300/30 hover:scale-105 transition-transform"
      >
        <div className="text-6xl mb-4 text-center">👨‍🏫</div>
        <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">Supervised Learning</h3>
        
        <div className="space-y-3 text-white/90">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-sm font-semibold text-blue-200">Input:</p>
            <p>Labeled Data</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-sm font-semibold text-blue-200">Process:</p>
            <p>Learns a model to predict outcomes</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-sm font-semibold text-blue-200">Analogy:</p>
            <p>Learning with a teacher/answer key</p>
          </div>
        </div>
      </motion.div>

      {/* Unsupervised Learning */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30 hover:scale-105 transition-transform"
      >
        <div className="text-6xl mb-4 text-center">🔍</div>
        <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">Unsupervised Learning</h3>
        
        <div className="space-y-3 text-white/90">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-sm font-semibold text-purple-200">Input:</p>
            <p>Unlabeled Data</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-sm font-semibold text-purple-200">Process:</p>
            <p>Finds hidden patterns and structures</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-sm font-semibold text-purple-200">Analogy:</p>
            <p>Finding natural groupings in data</p>
          </div>
        </div>
      </motion.div>

      {/* Reinforcement Learning */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-6 border border-pink-300/30 hover:scale-105 transition-transform"
      >
        <div className="text-6xl mb-4 text-center">🎮</div>
        <h3 className="text-2xl font-bold text-pink-300 mb-4 text-center">Reinforcement Learning</h3>
        
        <div className="space-y-3 text-white/90">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-sm font-semibold text-pink-200">Input:</p>
            <p>Interactions with environment</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-sm font-semibold text-pink-200">Process:</p>
            <p>Learns actions to maximize reward</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-sm font-semibold text-pink-200">Analogy:</p>
            <p>Learning to play a game by trial and error</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
