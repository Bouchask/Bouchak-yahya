
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Yahya Bouchak
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl text-purple-700 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Étudiant en SI-IA à FPK Khouribga
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Passionné par l'informatique et l'innovation technologique, je suis en quête constante d'apprentissage et de défis stimulants.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Me contacter</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/lovable-uploads/66d6a5fd-86ee-4345-a5d1-bf0dd9130a15.png"
            alt="Yahya Bouchak"
            className="rounded-2xl shadow-2xl w-64 md:w-80 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
