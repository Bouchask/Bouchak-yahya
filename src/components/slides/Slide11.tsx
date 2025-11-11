import { motion } from 'framer-motion';

export const Slide11 = () => (
  <div className="w-full max-w-4xl mx-auto text-center">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-8xl mb-8">🙏</div>
      
      <h1 className="text-6xl font-bold text-white mb-6">
        Thank You!
      </h1>
      
      <p className="text-3xl text-blue-300 mb-12">
        Questions?
      </p>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8"
      >
        <h3 className="text-2xl font-bold text-purple-300 mb-6">Next Steps</h3>
        <div className="space-y-4 text-left text-white/90">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📚</span>
            <div>
              <p className="font-semibold text-lg">Learn More</p>
              <p className="text-white/70">Explore online courses on Coursera, edX, or fast.ai</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <p className="font-semibold text-lg">Practice</p>
              <p className="text-white/70">Try Kaggle competitions and datasets</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🤝</span>
            <div>
              <p className="font-semibold text-lg">Join Communities</p>
              <p className="text-white/70">Connect with ML practitioners on GitHub, Reddit, and Discord</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔬</span>
            <div>
              <p className="font-semibold text-lg">Build Projects</p>
              <p className="text-white/70">Start with simple projects and gradually increase complexity</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-blue-300/30"
      >
        <h3 className="text-xl font-bold text-blue-300 mb-3">Recommended Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/90">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold">📖 Books</p>
            <p className="text-sm text-white/70">Python Machine Learning by Sebastian Raschka</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold">🎓 Courses</p>
            <p className="text-sm text-white/70">Andrew Ng's Machine Learning on Coursera</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold">🌐 Websites</p>
            <p className="text-sm text-white/70">scikit-learn.org, kaggle.com</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold">🎥 Videos</p>
            <p className="text-sm text-white/70">3Blue1Brown, StatQuest on YouTube</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-8"
      >
        <p className="text-2xl text-white/90 font-semibold mb-2">
          Ready to start your ML journey? 🚀
        </p>
        <p className="text-lg text-white/70">
          The best time to start was yesterday. The second best time is now!
        </p>
      </motion.div>
    </motion.div>
  </div>
);
