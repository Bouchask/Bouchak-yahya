import { motion } from 'framer-motion';

export const Slide1 = () => (
  <div className="w-full max-w-6xl mx-auto text-center">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Introduction to Machine Learning
      </h1>
      <p className="text-3xl text-blue-200 mb-12">
        Transforming Data into Knowledge
      </p>
      
      {/* Visual Elements */}
      <div className="flex justify-center gap-8 mt-16">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
        >
          <span className="text-4xl">📊</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center"
        >
          <span className="text-4xl">🧠</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center"
        >
          <span className="text-4xl">🚀</span>
        </motion.div>
      </div>
    </motion.div>
  </div>
);
