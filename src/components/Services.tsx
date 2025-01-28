import { useEffect } from "react";

const Services = () => {
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

  const services = [
    {
      title: "Content Strategy",
      description: "Strategic planning and creative direction for your video content.",
      icon: "📋"
    },
    {
      title: "Video Production",
      description: "High-quality video creation from concept to final edit.",
      icon: "🎥"
    },
    {
      title: "Social Media",
      description: "Optimized video content for all social platforms.",
      icon: "📱"
    },
    {
      title: "Analytics",
      description: "Detailed performance tracking and optimization.",
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-green-50/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-reveal">
          Our <span className="text-[#F97316]">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="scroll-reveal p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-xl transition-all duration-300 border border-orange-100 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;