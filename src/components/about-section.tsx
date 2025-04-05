'use client';

// Ensure you import motion directly from framer-motion
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from './section-header';

const AboutSection = () => {
  return (
    <section className="py-10 sm:py-16 md:py-24 md:mb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile header - shown only on smaller screens */}
        <div className="md:hidden text-center mb-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-block heading-pill"
          >
            <SectionHeader text="Who we are 🧠" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            <div className="hidden md:inline-flex items-center gap-2 bg-brand-lightBlue px-4 py-2 rounded-full mb-2">
              <SectionHeader text="Who we are 🧠" />
            </div>

            <p className="text-gray-600 text-base sm:text-lg text-center md:text-left">
              We believe that learning is more than just acquiring knowledge—it&apos;s about transforming how you think.
              Our mission is to empower minds through effective learning techniques, ensuring that every individual
              reaches their fullest potential.
            </p>

            <Button className="bg-[#0057FF]  hover:bg-[#0057FF]/90  text-white px-6 sm:px-8 py-3 sm:py-4 h-auto text-base rounded-md w-full sm:w-auto">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl sm:rounded-3xl overflow-hidden border-2 border-white shadow-[-5px_5px_0px_0px_#FEDE70] sm:shadow-[-10px_10px_0px_0px_#FEDE70] order-1 md:order-2 mb-6 md:mb-0">
            <img src="/images/books.png" alt="Team of neuroscientists" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
