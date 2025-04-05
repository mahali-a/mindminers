import { Button } from '@/components/ui/button';

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
  return (
    <div className="course-card relative flex flex-col h-full bg-[#F9F6EF] rounded-xl animate-fade-in">
      <div className="relative p-2 sm:p-3">
        <img src={imageSrc} alt={title} className="w-full rounded-xl h-40 sm:h-48 object-cover" />
        <div className="absolute top-3 left-3"></div>
        {/* Avatar Row */}
        <div className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-[#F9F6EF] rounded-full py-1.5 sm:py-2 px-3 sm:px-4 flex items-center">
          <div className="flex -space-x-2 sm:-space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="ml-1 sm:ml-2 text-gray-600 font-medium text-xs sm:text-sm whitespace-nowrap">
            + 40 students
          </div>
        </div>
      </div>

      <div className="p-3 flex flex-col mt-5 flex-grow">
        <h3 className="font-bold text-base sm:text-lg text-brand-dark mb-1 sm:mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-3">{description}</p>

        <div className="w-full">
          <Button className="bg-blue-600 text-white text-xs sm:text-sm px-4 py-1.5 sm:py-2 h-auto w-full sm:w-auto rounded-lg sm:rounded-xl">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
