import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Hero = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-green-50 pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Vision With
            <span className="text-[#F97316] block mt-2">CLIC</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl">
            Create compelling video content that captivates your audience and drives results. Let's bring your story to life.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#F97316] hover:bg-orange-600 text-lg px-8 py-6">Get Started</Button>
            <Button variant="outline" className="text-lg px-8 py-6 border-[#F97316] text-[#F97316] hover:bg-orange-50">
              Learn More
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 scroll-reveal">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#F97316]/10 rounded-lg blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Video Marketing Team" 
              className="rounded-lg shadow-2xl relative w-full object-cover aspect-video"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;