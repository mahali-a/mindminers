import { useRouter } from 'next/navigation';

import { CustomButton } from '@/components/common';

interface CourseCardProps {
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: number;
  discountedPrice?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ imageSrc, title, description }) => {
  const router = useRouter();

  const handleEnrollClick = () => {
    router.push('/course-details');
  };

  return (
    <div className="course-card relative flex flex-col h-full bg-[#F9F6EF] rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
      <div className="relative p-3 sm:p-3">
        <img src={imageSrc} alt={title} className="w-full rounded-xl h-48 sm:h-48 object-cover" />
        <div className="absolute top-3 left-3"></div>
        {/* Avatar Row */}
        <div className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-[#F9F6EF] rounded-full py-2 sm:py-2 px-4 sm:px-4 flex items-center justify-center">
          <div className="flex -space-x-2 sm:-space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="/images/blink.png" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="/images/ander.png" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="/images/big-bird.png" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="/images/bartender.png" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="ml-2 sm:ml-2 text-gray-600 font-medium text-xs sm:text-sm whitespace-nowrap">
            + 40 students
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-4 flex flex-col mt-5 flex-grow">
        <h3 className="font-bold text-lg sm:text-lg text-brand-dark mb-2 sm:mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-sm mb-4 sm:mb-4 flex-grow line-clamp-3">{description}</p>

        <div className="w-full flex justify-start">
          <CustomButton variant="cta" size="md" onClick={handleEnrollClick}>
            Enroll Now
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
