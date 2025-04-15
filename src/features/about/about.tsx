'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import Footer from '@/components/footer';
import { fadeInLeftVariants, fadeInRightVariants, fadeInUpVariants, scaleUpVariants } from '@/lib/animation';
import AboutHero from './components/about-hero';
import JoinTeam from './components/join-team';
import MissionVision from './components/mission-vision';
import OurStory from './components/our-story';
import UniqueApproach from './components/unique-approach';

export default function About() {
  // Refs for scroll animations
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const approachRef = useRef(null);
  const joinRef = useRef(null);

  // Check if sections are in view
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.2 });
  const approachInView = useInView(approachRef, { once: true, amount: 0.2 });
  const joinInView = useInView(joinRef, { once: true, amount: 0.2 });

  return (
    <div>
      {/* Hero section */}
      <AboutHero />

      {/* Our Story section */}
      <div ref={storyRef}>
        <motion.div variants={fadeInLeftVariants} initial="hidden" animate={storyInView ? 'visible' : 'hidden'}>
          <OurStory />
        </motion.div>
      </div>

      {/* Mission and Vision section */}
      <div ref={missionRef}>
        <motion.div variants={fadeInUpVariants} initial="hidden" animate={missionInView ? 'visible' : 'hidden'}>
          <MissionVision />
        </motion.div>
      </div>

      {/* Unique Approach section */}
      <div ref={approachRef}>
        <motion.div variants={fadeInRightVariants} initial="hidden" animate={approachInView ? 'visible' : 'hidden'}>
          <UniqueApproach />
        </motion.div>
      </div>

      {/* Join Team section */}
      <div ref={joinRef}>
        <motion.div variants={scaleUpVariants} initial="hidden" animate={joinInView ? 'visible' : 'hidden'}>
          <JoinTeam />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
