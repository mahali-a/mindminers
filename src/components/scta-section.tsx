import { ArrowRight } from 'lucide-react';
import React from 'react';

import { CustomButton } from '@/components/common';

const CtaSection = () => {
  return (
    <section className="bg-[#0056D2] text-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-6xl font-bold leading-tight">
              Ready to unlock your
              <br />
              potential?
            </h2>
            <p className="text-blue-100 max-w-md mx-auto md:mx-0">
              Join the thousands of students who&apos;ve already transformed their learning with MindMiners.
            </p>
            <CustomButton
              variant="light"
              size="md"
              rounded="full"
              withIcon={true}
              endIcon={<ArrowRight className="w-4 h-4 md:w-5 md:h-5" />}
              className="w-full max-w-xs mx-auto sm:max-w-none sm:w-auto text-sm md:text-base py-2 md:py-3 px-4 md:px-8 h-auto"
              href="/enroll"
            >
              Get Started Today
            </CustomButton>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/learning-cuate.png"
              alt="Student learning"
              className="max-w-full h-auto rounded-xl object-cover max-h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
