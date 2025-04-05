'use client';

import { ReactNode } from 'react';

interface SectionHeaderProps {
  text: string;
  svgContent?: ReactNode;
  backgroundColor?: string;
  maxWidth?: string;
}

/**
 * SectionHeader component displays a heading with an optional icon
 * in a pill-shaped container with a shadow effect.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  text,
  svgContent,
  backgroundColor = 'bg-[#FEDE70]',
  maxWidth = 'max-w-xl',
}) => {
  return (
    <div className={`relative ${maxWidth} mx-auto my-4 sm:my-6 md:my-8 px-2 sm:px-0`}>
      {/* Background shadow */}
      <div
        className={`absolute ${backgroundColor} rounded-xl sm:rounded-2xl w-full h-full top-2 sm:top-3 right-2 sm:right-3 z-0`}
      ></div>

      {/* Main white button with black border */}
      <div className="relative z-10 bg-slate-50 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-black flex items-center justify-between px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">{text}</h2>

        {/* SVG icon displayed only if provided */}
        {svgContent && <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ml-2 sm:ml-3 md:ml-4">{svgContent}</div>}
      </div>
    </div>
  );
};
