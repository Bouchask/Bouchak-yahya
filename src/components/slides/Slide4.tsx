import { motion } from 'framer-motion';

export const Slide4 = () => (
  <div className="w-full max-w-5xl mx-auto">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-white mb-12 text-center"
    >
      Supervised Learning in Detail
    </motion.h2>

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-8 border border-blue-300/30 mb-8"
    >
      <h3 className="text-3xl font-semibold text-blue-300 mb-4 text-center">🎯 Goal</h3>
      <p className="text-2xl text-white/90 text-center">
        Make predictions about future, unseen data
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
      >
        <h3 className="text-2xl font-bold text-yellow-300 mb-4">📊 Classification</h3>
        <p className="text-lg text-white/90 mb-4">Predicts a category</p>
        <div className="space-y-2 text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Spam vs. Not Spam</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Iris flower type</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Disease diagnosis</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
      >
        <h3 className="text-2xl font-bold text-purple-300 mb-4">📈 Regression</h3>
        <p className="text-lg text-white/90 mb-4">Predicts a continuous value</p>
        <div className="space-y-2 text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Student's SAT score</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>House price</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Stock market trends</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Process Flow */}
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
    >
      <h3 className="text-xl font-semibold text-blue-300 mb-4 text-center">Supervised Learning Process</h3>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <div className="bg-blue-500/30 rounded-lg px-6 py-3 text-white font-semibold">
          Training Data
        </div>
        <div className="text-white text-2xl">→</div>
        <div className="bg-purple-500/30 rounded-lg px-6 py-3 text-white font-semibold">
          Algorithm
        </div>
        <div className="text-white text-2xl">→</div>
        <div className="bg-pink-500/30 rounded-lg px-6 py-3 text-white font-semibold">
          Predictive Model
        </div>
        <div className="text-white text-2xl">→</div>
        <div className="bg-green-500/30 rounded-lg px-6 py-3 text-white font-semibold">
          Predictions
        </div>
      </div>
    </motion.div>
  </div>
);
