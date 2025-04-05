import { SectionHeader } from '@/components/section-header';

const OurStory = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-8 inline-block">
          <SectionHeader text="Our story 🧠" />
        </div>

        <div className="max-w-3xl text-center">
          <p className="text-lg text-gray-600 mb-6">
            At Mind Miners, we believe that effective learning goes beyond memorization—it&apos;s about transforming how
            you think and approach problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
