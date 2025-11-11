import { motion } from 'framer-motion';

export const Slide2 = () => (
  <div className="w-full max-w-5xl mx-auto">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-white mb-12 text-center"
    >
      What is Machine Learning?
    </motion.h2>

    <div className="grid grid-cols-1 gap-8">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-4">Core Idea</h3>
        <p className="text-xl text-white/90 leading-relaxed">
          The science of algorithms that allow computers to <span className="text-yellow-300 font-semibold">learn from data</span> without being explicitly programmed.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-300/30"
      >
        <h3 className="text-2xl font-semibold text-purple-300 mb-4">💡 Key Quote</h3>
        <p className="text-2xl text-white/90 italic leading-relaxed">
          "The most exciting field of all the computer sciences!"
        </p>
        <p className="text-lg text-white/70 mt-2">— Andrew Ng & Yann LeCun</p>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
      >
        <h3 className="text-2xl font-semibold text-green-300 mb-4">Why Now?</h3>
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <p className="text-xl text-white/90 leading-relaxed">
              We live in an age of <span className="text-green-300 font-semibold">abundant data</span> and powerful, <span className="text-green-300 font-semibold">open-source tools</span> (like Python libraries).
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-5xl">📱</div>
            <div className="text-5xl">🌐</div>
            <div className="text-5xl">🐍</div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
