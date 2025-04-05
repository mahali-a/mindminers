import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

const CourseInfoSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-black bg-[#F9F6EF] rounded-xl shadow-none">
          <CardContent className="p-8 py-2">
            <h3 className="text-2xl font-bold mb-6">What you&apos;ll learn</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Build a strong foundation in fundamental math concepts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Develop problem-solving skills with practical exercises.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Gain confidence in tackling math challenges.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Learn effective strategies to overcome math anxiety.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-black bg-[#F9F6EF] rounded-xl shadow-none">
          <CardContent className="p-8 py-2">
            <h3 className="text-2xl font-bold mb-6">Requirements</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>No prior math knowledge required.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Willingness to learn and practice.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Access to a notebook and calculator for exercises.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Commitment to overcoming math anxiety with guided techniques.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Ability to dedicate time for regular practice and self-assessment.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-black bg-[#F9F6EF] rounded-xl shadow-none">
          <CardContent className="p-8 py-2">
            <h3 className="text-2xl font-bold mb-6">Target audience</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Students struggling with basic math concepts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Individuals looking to refresh their math skills.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Anyone experiencing math anxiety and seeking confidence.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Parents who want to support their children&apos;s math learning.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-black bg-[#F9F6EF] rounded-xl shadow-none">
          <CardContent className="p-8 py-2">
            <h3 className="text-2xl font-bold mb-6">Learning techniques</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Interleaving, visualization, retrieval practice, feyman technique, leitner system, et al.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-blue-600  hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md">
          Enroll Now <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
};

export default CourseInfoSection;
