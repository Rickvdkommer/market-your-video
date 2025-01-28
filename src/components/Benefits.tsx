const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Our team of video marketing specialists brings years of experience and creativity to every project.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
            <p className="text-gray-600">
              We've helped countless brands increase their engagement and ROI through strategic video marketing.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">End-to-End Service</h3>
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