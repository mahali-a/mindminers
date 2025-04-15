import Link from 'next/link';

const JoinTeam = () => {
  return (
    <section className="py-16 px-4 bg-[#0056D2] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Join our team</h2>
            <p className="text-lg mb-6">
              Are you passionate about empowering minds and transforming learning? We&apos;re always looking for
              innovative thinkers to join our team and help us make a difference. Become a part of Mind Miners and
              inspire others to learn, grow, and thrive.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Link
              href="mailto:info@mindminers.com"
              className="bg-white text-[#0056D2] hover:bg-gray-100 text-lg px-8 py-4 border-2 border-[#F480D5] rounded-full h-auto"
            >
              Join the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
