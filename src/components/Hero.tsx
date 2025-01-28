import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Brand Through
            <span className="text-blue-600"> Video Marketing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create compelling video content that engages your audience and drives results.
          </p>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">Get Started</Button>
            <Button variant="outline" className="text-lg px-8 py-6">Learn More</Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
            alt="Video Marketing Team" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;