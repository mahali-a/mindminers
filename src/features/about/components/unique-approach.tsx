const UniqueApproach = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our unique approach</h2>
          <p className="text-gray-700">
            We combine neuroscience-based techniques with engaging educational practices. Our programs are designed to
            enhance cognitive abilities, improve problem-solving skills, and foster lifelong learning. Through
            interactive sessions, real-world applications, and personalized learning paths, we ensure every participant
            reaches their full potential.
          </p>
        </div>

        <div className="rounded-xl p-6 relative">
          <img src="/images/approach.png" alt="Student thinking" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default UniqueApproach;
