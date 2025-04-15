'use client';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import GradientBadge from './gradient-badge';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const decorationVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: [0, 15, 12],
      transition: {
        duration: 1,
        delay: 1.2,
        ease: 'easeOut',
      },
    },
  };

  const decorationVariantsReverse = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: [0, -15, -12],
      transition: {
        duration: 1,
        delay: 1.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-0">
      <motion.div
        className="relative max-w-7xl bg-[#FFF9E9] rounded-3xl mx-2 my-4 sm:my-6 border-2 sm:border-4 border-[#0057FF] overflow-hidden shadow-[-5px_5px_0px_0px_#0057FF] sm:shadow-[-10px_10px_0px_0px_#0057FF]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* <div className={`absolute bg-red-500 rounded-2xl w-full h-full top-3 right-3 z-0`}></div> */}
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-8 md:pt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <GradientBadge text="NEVER STOP LEARNING" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-3 sm:mb-4"
            >
              Unleash your mind&apos;s
              <br className="hidden sm:block" />
              full potential
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-xl"
            >
              Discover innovative learning techniques designed to
              <br className="hidden sm:block" />
              enhance cognitive abilities and life skills.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 items-center justify-center w-full"
            >
              <motion.div variants={buttonVariants} className="w-full sm:w-auto">
                <Button className="bg-[#0057FF] shadow-lg hover:bg-[#0057FF]/90 text-[#FEDE70] px-6 sm:px-8 py-3 sm:py-4 h-auto text-base rounded-full w-full sm:w-auto">
                  Get Started
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center">
                <div className="flex -space-x-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-8 sm:w-12 h-8 sm:h-12 rounded-full border-2 border-[#0057FF] overflow-hidden"
                  >
                    <img src="/images/snap-1.png" alt="User" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="w-8 sm:w-12 h-8 sm:h-12 rounded-full border-2 border-[#0057FF] overflow-hidden"
                  >
                    <img src="/images/snap-2.png" alt="User" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="w-8 sm:w-12 h-8 sm:h-12 rounded-full border-2 border-[#0057FF] overflow-hidden"
                  >
                    <img src="/images/snap-3.png" alt="User" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
                <div className="items-center gap-2">
                  <motion.div
                    className="flex text-pink-400 text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    {'★★★★★'.split('').map((star, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.9 + i * 0.1,
                        }}
                      >
                        {star}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.span
                    className="text-gray-600 text-xs sm:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    (1.5k+ Reviews)
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div>
          {/* Images section */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 px-4 sm:px-10 pb-6 sm:pb-10"
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="rounded-xl sm:rounded-2xl overflow-hidden" variants={imageVariants}>
              <img src="/images/person-1.png" alt="Student with book" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="rounded-xl sm:rounded-2xl overflow-hidden" variants={imageVariants}>
              <img src="/images/person-2.png" alt="Student with laptop" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="rounded-xl sm:rounded-2xl overflow-hidden" variants={imageVariants}>
              <img src="/images/person-3.png" alt="Business person" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="rounded-xl sm:rounded-2xl overflow-hidden" variants={imageVariants}>
              <img src="/images/person-4.png" alt="Business presentation" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements - hidden on mobile */}
        <motion.div
          className="sm:block hidden absolute top-50 left-60 w-12 sm:w-30 h-12 sm:h-30"
          variants={decorationVariants}
          initial="hidden"
          animate="visible"
        >
          <img src="/analysis.svg" alt="Book" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="sm:block absolute hidden top-50 right-60 w-12 sm:w-30 h-12 sm:h-30"
          variants={decorationVariantsReverse}
          initial="hidden"
          animate="visible"
        >
          <img src="/brain.svg" alt="Book" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
