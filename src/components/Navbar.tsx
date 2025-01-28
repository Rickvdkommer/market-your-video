import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">VideoMarketing</div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
          <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Why Us</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;