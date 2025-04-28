'use client';

import { motion } from 'framer-motion';

import GradientBadge from '@/components/gradient-badge';

const EnrollmentHeader = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const avatarsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="text-center mt-10 max-w-3xl mx-auto mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <GradientBadge text="NEVER STOP LEARNING" className="mb-6" />
      </motion.div>

      <div className="md:w-3xl mx-auto space-y-6 text-center">
        <motion.h1 className="text-4xl md:text-6xl font-bold text-gray-900" variants={itemVariants}>
          Take the first step towards smarter learning
        </motion.h1>

        <motion.p className="text-lg text-center mx-auto text-gray-600 w-5/6" variants={itemVariants}>
          Fill out the form below to secure your spot and take the first step towards a brighter future with MindMiners.
        </motion.p>

        <motion.div className="flex items-center justify-center gap-3" variants={itemVariants}>
          <motion.div className="flex -space-x-3" variants={avatarsVariants}>
            <div className="w-10 h-10 rounded-full border-2 border-[#0056D2] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#0056D2] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#0056D2] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div className="items-center gap-2" variants={itemVariants}>
            <motion.div
              className="flex text-pink-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                staggerChildren: 0.1,
              }}
            >
              {'★★★★★'.split('').map((star, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.2 + i * 0.1,
                  }}
                >
                  {star}
                </motion.span>
              ))}
            </motion.div>
            <motion.span className="text-gray-600 text-sm" variants={itemVariants}>
              (1.5k+ Reviews)
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EnrollmentHeader;
