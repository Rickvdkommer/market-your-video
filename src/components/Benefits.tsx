import { useEffect } from "react";

const Benefits = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-green-50/50 via-white to-orange-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-reveal">
          Why Choose <span className="text-[#F97316]">CLIC</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="scroll-reveal bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#F97316]">Expert Team</h3>
            <p className="text-gray-600">
              Our team of video marketing specialists brings years of experience and creativity to every project.
            </p>
          </div>
          <div className="scroll-reveal bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-xl font-semibold mb-4 text-[#F97316]">Proven Results</h3>
            <p className="text-gray-600">
              We've helped countless brands increase their engagement and ROI through strategic video marketing.
            </p>
          </div>
          <div className="scroll-reveal bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-4 text-[#F97316]">End-to-End Service</h3>
            <p className="text-gray-600">
              From strategy to production to distribution, we handle every aspect of your video marketing needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;