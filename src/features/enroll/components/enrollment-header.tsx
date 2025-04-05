import GradientBadge from '@/components/gradient-badge';

const EnrollmentHeader = () => {
  return (
    <div className="text-center mt-10 max-w-3xl mx-auto mb-12">
      <GradientBadge text="NEVER STOP LEARNING" className="mb-6" />

      <div className="md:w-3xl mx-auto  space-y-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 ">Take the first step towards smarter learning</h1>
        <p className="text-lg text-center mx-auto text-gray-600  w-5/6">
          Fill out the form below to secure your spot and take the first step towards a brighter future with Mind
          Miners.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-3">
            <div className="w-10 h-10  rounded-full border-2 border-[#0056D2] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10  rounded-full border-2 border-[#0056D2] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10  rounded-full border-2 border-[#0056D2] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className=" items-center gap-2">
            <div className="flex text-pink-400">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span className="text-gray-600 text-sm">(1.5k+ Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentHeader;
