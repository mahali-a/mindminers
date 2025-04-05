import { Card, CardContent } from '@/components/ui/card';

const MissionVision = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <Card className="border-2 border-black bg-[#F9F6EF] rounded-xl shadow-none">
          <CardContent className="p-8 py-2">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <div className="mb-4">
              <p className="font-semibold text-lg">Innovation, Excellence, Empowerment.</p>
            </div>
            <p className="text-gray-700">
              At Mind Miners, we believe that effective learning goes beyond memorization—it&apos;s about transforming
              how you think and approach problems. Founded with a passion for education and cognitive development, we
              are dedicated to empowering minds and unlocking human potential.
            </p>
          </CardContent>
        </Card>

        {/* Vision Card */}
        <Card className="border-2 border-black bg-[#F9F6EF] rounded-xl shadow-none">
          <CardContent className="p-8 py-2">
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p className="text-gray-700">
              We envision a world where every mind is empowered to learn, grow, and thrive. We embrace innovation by
              continuously evolving our teaching methods, pursue excellence through high-quality educational
              experiences, and inspire empowerment by encouraging individuals to take control of their learning journey.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MissionVision;
