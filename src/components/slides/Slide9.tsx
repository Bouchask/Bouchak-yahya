import { motion } from 'framer-motion';

export const Slide9 = () => (
  <div className="w-full max-w-6xl mx-auto">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-white mb-12 text-center"
    >
      Real-World Impact & Applications
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-2xl text-blue-300 text-center mb-12"
    >
      Machine Learning is Changing the World 🌍
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Healthcare */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-red-300/30 hover:scale-105 transition-transform"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-5xl">🏥</div>
          <h3 className="text-2xl font-bold text-red-300">Healthcare</h3>
        </div>
        <ul className="space-y-2 text-white/90">
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Detecting skin cancer from images</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Predicting COVID-19 patient needs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Drug discovery and development</span>
          </li>
        </ul>
      </motion.div>

      {/* Biology */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-6 border border-green-300/30 hover:scale-105 transition-transform"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-5xl">🧬</div>
          <h3 className="text-2xl font-bold text-green-300">Biology</h3>
        </div>
        <ul className="space-y-2 text-white/90">
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Predicting 3D protein structures (AlphaFold)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Genomic sequence analysis</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Understanding disease mechanisms</span>
          </li>
        </ul>
      </motion.div>

      {/* Climate Change */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-6 border border-blue-300/30 hover:scale-105 transition-transform"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-5xl">🌱</div>
          <h3 className="text-2xl font-bold text-blue-300">Climate Change</h3>
        </div>
        <ul className="space-y-2 text-white/90">
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Precision agriculture to optimize resources</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Weather prediction and climate modeling</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Energy consumption optimization</span>
          </li>
        </ul>
      </motion.div>

      {/* Everyday Life */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30 hover:scale-105 transition-transform"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-5xl">📱</div>
          <h3 className="text-2xl font-bold text-purple-300">Everyday Life</h3>
        </div>
        <ul className="space-y-2 text-white/90">
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Email spam filters</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Voice recognition (Siri, Alexa)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-1">✓</span>
            <span>Recommendation systems (Netflix, Spotify)</span>
          </li>
        </ul>
      </motion.div>
    </div>

    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="mt-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 border border-yellow-300/30"
    >
      <p className="text-2xl text-white text-center font-semibold">
        🚀 Machine Learning is solving problems across all industries!
      </p>
    </motion.div>
  </div>
);
