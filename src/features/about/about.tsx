import React from 'react';

import Footer from '@/components/footer';
import AboutHero from './components/about-hero';
import JoinTeam from './components/join-team';
import MissionVision from './components/mission-vision';
import OurStory from './components/our-story';
import UniqueApproach from './components/unique-approach';

export default function About() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <UniqueApproach />
      <JoinTeam />
      <Footer />
    </div>
  );
}
