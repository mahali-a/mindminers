'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { CustomButton } from '@/components/common';
import { SectionHeader } from './section-header';

const CorporateSection = () => {
  return (
    <section className="section-container max-w-7xl mx-auto mt-10 sm:mt-20 mb-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 bg-[#E4EFFF] rounded-xl sm:rounded-2xl relative md:grid-cols-2 gap-4 sm:gap-8 items-center overflow-visible">
        <div className="rounded-xl pt-6 md:pt-0">
          <div className="gap-4 sm:gap-8 items-center">
            <div className="p-4 sm:p-6 md:p-10 space-y-3 sm:space-y-5">
              <div className="text-center md:text-left mb-2">
                <div className="md:hidden">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="inline-block heading-pill"
                  >
                    <SectionHeader text="Corporate training solutions" />
                  </motion.div>
                </div>

                <div className="hidden md:block">
                  <div className="inline-block heading-pill">
                    <SectionHeader text="Corporate training solutions" />
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-base sm:text-lg text-center md:text-left">
                Empower your team with tailored brain enhancement sessions and impactful conferences. Our corporate
                training solutions are designed to foster innovation and productivity in the workplace.
              </p>
              <div className="flex justify-center md:justify-start">
                <CustomButton
                  variant="primary"
                  size="md"
                  withIcon={true}
                  endIcon={<ArrowRight className="w-4 h-4 md:w-5 md:h-5" />}
                  className="w-full sm:w-auto text-sm md:text-base py-2 md:py-3 px-4 md:px-6 h-auto"
                  href="mailto:info@mindminers.com"
                >
                  Book a session
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        <div className="relative md:absolute md:right-[-0px] md:-top-30 h-[300px] sm:h-[400px] md:h-[500px] md:z-10">
          <img
            src="/images/person-with-laptop.png"
            alt="Corporate training"
            className="w-full h-full object-cover  md:rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
