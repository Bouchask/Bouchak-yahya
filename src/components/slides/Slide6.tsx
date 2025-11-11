import { motion } from 'framer-motion';

export const Slide6 = () => (
  <div className="w-full max-w-5xl mx-auto">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-white mb-12 text-center"
    >
      Reinforcement Learning in Detail
    </motion.h2>

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 border border-pink-300/30 mb-8"
    >
      <h3 className="text-3xl font-semibold text-pink-300 mb-4 text-center">🎯 Goal</h3>
      <p className="text-2xl text-white/90 text-center">
        Learn optimal actions through interaction
      </p>
    </motion.div>

    {/* Key Concepts */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8"
    >
      <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">Key Concepts</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="text-center">
          <div className="bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
            <span className="text-3xl">🤖</span>
          </div>
          <p className="text-white font-semibold">Agent</p>
        </div>
        <div className="text-center">
          <div className="bg-green-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
            <span className="text-3xl">🌍</span>
          </div>
          <p className="text-white font-semibold">Environment</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
            <span className="text-3xl">📍</span>
          </div>
          <p className="text-white font-semibold">State</p>
        </div>
        <div className="text-center">
          <div className="bg-orange-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
            <span className="text-3xl">⚡</span>
          </div>
          <p className="text-white font-semibold">Action</p>
        </div>
        <div className="text-center">
          <div className="bg-pink-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
            <span className="text-3xl">🏆</span>
          </div>
          <p className="text-white font-semibold">Reward</p>
        </div>
      </div>
    </motion.div>

    {/* Process Diagram */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8"
    >
      <h3 className="text-xl font-semibold text-pink-300 mb-6 text-center">Reinforcement Learning Process</h3>
      <div className="relative">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="bg-blue-500/30 rounded-lg px-8 py-4 text-white font-semibold text-center">
            <div className="text-3xl mb-2">🤖</div>
            <div>Agent</div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="text-white text-xl">→</div>
            <div className="text-sm text-orange-300">Action</div>
          </div>
          
          <div className="bg-green-500/30 rounded-lg px-8 py-4 text-white font-semibold text-center">
            <div className="text-3xl mb-2">🌍</div>
            <div>Environment</div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="text-white text-xl">→</div>
            <div className="text-sm text-purple-300">State & Reward</div>
          </div>
          
          <div className="bg-pink-500/30 rounded-lg px-8 py-4 text-white font-semibold text-center">
            <div className="text-3xl mb-2">🧠</div>
            <div>Learning</div>
          </div>
        </div>
        
        {/* Feedback loop arrow */}
        <div className="text-center mt-4">
          <div className="text-white text-2xl">↻</div>
          <p className="text-sm text-white/60">Continuous feedback loop</p>
        </div>
      </div>
    </motion.div>

    {/* Example */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30"
    >
      <h3 className="text-xl font-semibold text-yellow-300 mb-3">Example: Chess Program</h3>
      <p className="text-lg text-white/90">
        A chess program learns which moves lead to victory through trial and error, receiving rewards for winning and penalties for losing.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <span className="text-4xl">♟️</span>
        <span className="text-4xl">🏆</span>
      </div>
    </motion.div>
  </div>
);
