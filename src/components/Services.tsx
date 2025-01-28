const Services = () => {
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;