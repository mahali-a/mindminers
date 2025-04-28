'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface CourseProps {
  course: {
    id: string;
    requirements?: {
      document: any;
    };
    whatYouWillLearn?: {
      document: any;
    };
    targetAudience?: {
      document: any;
    };
    learningTechniques?: {
      document: any;
    };
  } | null;
}

// Helper function to extract text content from a document
const extractTextItems = (document: any): string[] => {
  if (!document) return [];

  try {
    // Basic document parsing assuming document is an array of blocks with content
    if (Array.isArray(document)) {
      return document
        .filter((block: any) => {
          // Handle unordered-list type blocks
          if (block.type === 'unordered-list' && block.children) {
            return true;
          }
          // Handle paragraph blocks with text content
          if (block.type === 'paragraph' && block.children) {
            return block.children.some((child: any) => child.text && child.text.trim() !== '');
          }
          return block.content && Array.isArray(block.content);
        })
        .flatMap((block: any) => {
          // Process unordered-list type blocks
          if (block.type === 'unordered-list' && block.children) {
            return block.children
              .filter((item: any) => item.type === 'list-item' && item.children)
              .map((item: any) => {
                const content = item.children.find((child: any) => child.type === 'list-item-content');
                if (content && content.children) {
                  return content.children.map((textItem: any) => textItem.text).join(' ');
                }
                return '';
              })
              .filter((text: string) => text.trim() !== '');
          }

          // Process paragraph blocks
          if (block.type === 'paragraph' && block.children) {
            return block.children
              .filter((child: any) => child.text && child.text.trim() !== '')
              .map((child: any) => child.text);
          }

          // Process the original format if above conditions don't match
          return block.content?.filter((item: any) => item.text).map((item: any) => item.text) || [];
        });
    }

    // Check if document is a JSON string that needs parsing
    if (typeof document === 'string') {
      try {
        const parsedDoc = JSON.parse(document);
        if (Array.isArray(parsedDoc)) {
          return extractTextItems(parsedDoc);
        }
      } catch (e) {
        console.error('Error parsing document string:', e);
      }
    }

    // Fallback if structure is unknown
    return ['Content unavailable'];
  } catch (error) {
    console.error('Error parsing document:', error);
    return ['Error parsing content'];
  }
};

const CourseInfoSection: React.FC<CourseProps> = ({ course }) => {
  // Log course data for debugging
  useEffect(() => {
    console.log('CourseInfoSection received course data:', course);
  }, [course]);

  // Extract document content
  const whatYouWillLearn = course?.whatYouWillLearn?.document ? extractTextItems(course.whatYouWillLearn.document) : [];

  const requirements = course?.requirements?.document ? extractTextItems(course.requirements.document) : [];

  const targetAudience = course?.targetAudience?.document ? extractTextItems(course.targetAudience.document) : [];

  const learningTechniques = course?.learningTechniques?.document
    ? extractTextItems(course.learningTechniques.document)
    : [];

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-black bg-[#F9F6EF] rounded-xl shadow-none">
          <CardContent className="p-8 py-2">
            <h3 className="text-2xl font-bold mb-6">What you&apos;ll learn</h3>
            <ul className="space-y-3">
              {whatYouWillLearn.map((item, index) => (
                <li key={`learn-${index}`} className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-black bg-[#F9F6EF] rounded-xl shadow-none">
          <CardContent className="p-8 py-2">
            <h3 className="text-2xl font-bold mb-6">Requirements</h3>
            <ul className="space-y-3">
              {requirements.map((item, index) => (
                <li key={`req-${index}`} className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-black bg-[#F9F6EF] rounded-xl shadow-none">
          <CardContent className="p-8 py-2">
            <h3 className="text-2xl font-bold mb-6">Target audience</h3>
            <ul className="space-y-3">
              {targetAudience.map((item, index) => (
                <li key={`audience-${index}`} className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {learningTechniques.length > 0 && (
          <Card className="border-2 border-black bg-[#F9F6EF] rounded-xl shadow-none">
            <CardContent className="p-8 py-2">
              <h3 className="text-2xl font-bold mb-6">Learning techniques</h3>
              <ul className="space-y-3">
                {learningTechniques.map((item, index) => (
                  <li key={`technique-${index}`} className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href={`/enroll?courseId=${course?.id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md inline-flex items-center"
        >
          Enroll Now <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
};

export default CourseInfoSection;
