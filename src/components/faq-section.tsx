'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

import { SectionHeader } from './section-header';

// FAQ data
const faqs = [
  {
    question: 'What is Mind Miners, and how does it work?',
    answer:
      'Mind Miners is a brain enhancement program that combines cognitive science with specialized learning techniques to help an individual overcome learning barriers, memory retention challenges and congnitive challenges. Our approach focuses on addressing underlying cognitive patterns that cause anxiety and learning blocks, rather than just teaching content',
  },
  {
    question: 'Who can benefit from MindMiners?',
    answer:
      'Ourprograms are designed for learners of all ages who experience memory loss, weak focus and learning difficulties. We have specialized programs for children, teenagers, adults educational facilities and corporate entities; each tailored to address age-appropriate challenges and learning styles.',
  },
  {
    question: 'Are the courses available online or in-person?',
    answer:
      'We offer a rich blend of both online and in-person options for most of our courses. Our online platform provides interactive lessons, personalized feedback, and virtual coaching sessions. In-person classes are available in select locations administered by certified MindMiners instructors.',
  },
  {
    question: 'How can I enroll in a course or corporate training session?',
    answer:
      'Enrollment is simple through our website. Choose your desired course, select online or in-person format, and complete the registration process. For corporate training, click on Book a Demo to schedule a consultation with our corporate solutions team.',
  },
  {
    question: 'What makes MindMiners different from other learning platforms?',
    answer:
      'Unlike traditional educational platforms that focus primarily on content delivery. MindMiners addresses the cognitive and emotional aspects of learning. Our methodology is based on neuroscience research and designed to rewire negative thought patterns, reduce anxiety, and build lasting confidence in learning.',
  },
  {
    question: 'Can I get personalized training for my team or organization?',
    answer:
      'Absolutely! Our corporate training solutions are fully customizable to address the specific needs and goals of your organization. We offer needs assessment, tailored program development, and ongoing evaluation to ensure maximum effectiveness for your team.',
  },
];

interface FaqAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

// Custom Accordion implementation with proper animations
const FaqAccordionItem = ({ question, answer, isOpen, onToggle, index }: FaqAccordionItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`border border-gray-200 rounded-lg overflow-hidden mb-3 sm:mb-4 ${
        isOpen ? 'shadow-md' : 'shadow-sm hover:shadow-md'
      } transition-shadow duration-300`}
    >
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="w-full text-left font-medium text-gray-800 px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 flex justify-between items-center"
      >
        <span className="text-sm sm:text-base">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}>
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0 ml-2" />
        </motion.div>
      </button>

      {/* Accordion Content with AnimatePresence for proper exit animations */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.25, delay: 0.05 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm sm:text-base">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-container my-10 sm:my-20 mb-20 sm:mb-40 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-4 sm:mb-5">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="inline-block heading-pill mb-2 sm:mb-4"
        >
          <SectionHeader text="Got Questions? 🤔" />
        </motion.div>
      </div>

      <motion.div
        className="text-center mb-6 sm:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-base sm:text-lg text-brand-dark px-4">
          Find answers to the most common questions about our courses and learning methods
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqAccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleItem(index)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
