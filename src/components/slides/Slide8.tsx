import { motion } from 'framer-motion';

export const Slide8 = () => (
  <div className="w-full max-w-5xl mx-auto">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-white mb-12 text-center"
    >
      Tools of the Trade
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-2xl text-blue-300 text-center mb-12"
    >
      The Python Ecosystem 🐍
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* NumPy & pandas */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-6 border border-blue-300/30 hover:scale-105 transition-transform"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">📊</div>
          <h3 className="text-2xl font-bold text-blue-300">NumPy & pandas</h3>
        </div>
        <p className="text-white/90 text-lg">For data manipulation and analysis</p>
        <div className="mt-4 bg-white/10 rounded-lg p-3">
          <code className="text-sm text-green-300">import numpy as np</code><br/>
          <code className="text-sm text-green-300">import pandas as pd</code>
        </div>
      </motion.div>

      {/* scikit-learn */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-6 border border-orange-300/30 hover:scale-105 transition-transform"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">🤖</div>
          <h3 className="text-2xl font-bold text-orange-300">scikit-learn</h3>
        </div>
        <p className="text-white/90 text-lg">The main library for ML algorithms</p>
        <div className="mt-4 bg-white/10 rounded-lg p-3">
          <code className="text-sm text-green-300">from sklearn import ...</code>
        </div>
        <div className="mt-2 bg-yellow-500/20 rounded-lg p-2">
          <p className="text-sm text-yellow-200">⭐ Most important for beginners!</p>
        </div>
      </motion.div>

      {/* Matplotlib */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30 hover:scale-105 transition-transform"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">📈</div>
          <h3 className="text-2xl font-bold text-purple-300">Matplotlib</h3>
        </div>
        <p className="text-white/90 text-lg">For data visualization</p>
        <div className="mt-4 bg-white/10 rounded-lg p-3">
          <code className="text-sm text-green-300">import matplotlib.pyplot as plt</code>
        </div>
      </motion.div>

      {/* PyTorch */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-red-300/30 hover:scale-105 transition-transform"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">🔥</div>
          <h3 className="text-2xl font-bold text-red-300">PyTorch</h3>
        </div>
        <p className="text-white/90 text-lg">For advanced deep learning</p>
        <div className="mt-4 bg-white/10 rounded-lg p-3">
          <code className="text-sm text-green-300">import torch</code>
        </div>
        <div className="mt-2 bg-blue-500/20 rounded-lg p-2">
          <p className="text-sm text-blue-200">🚀 Advanced topics</p>
        </div>
      </motion.div>
    </div>

    {/* Recommendation */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-6 border border-green-300/30"
    >
      <div className="flex items-center gap-4">
        <div className="text-5xl">💡</div>
        <div>
          <h3 className="text-2xl font-bold text-green-300 mb-2">Recommendation</h3>
          <p className="text-xl text-white/90">
            Use <span className="text-green-300 font-semibold">Anaconda</span> or <span className="text-green-300 font-semibold">Miniconda</span> for easy package management
          </p>
          <p className="text-white/70 mt-2">All these tools are free and open-source! 🎉</p>
        </div>
      </div>
    </motion.div>
  </div>
);
