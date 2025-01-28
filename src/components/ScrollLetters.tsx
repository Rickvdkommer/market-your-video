import { useEffect, useState } from 'react';

const ScrollLetters = () => {
  const [visibleLetters, setVisibleLetters] = useState(['C', 'L', 'I', 'C']);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.3; // Start fading after 30% of viewport height scroll

      if (scrollPosition > threshold) {
        const lettersToShow = 4 - Math.floor((scrollPosition - threshold) / 100);
        setVisibleLetters(['C', 'L', 'I', 'C'].slice(0, Math.max(0, lettersToShow)));
      } else {
        setVisibleLetters(['C', 'L', 'I', 'C']);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className="flex space-x-4 md:space-x-8">
        {['C', 'L', 'I', 'C'].map((letter, index) => (
          <span
            key={letter}
            className={`text-7xl md:text-9xl font-bold transition-all duration-500
              ${visibleLetters.includes(letter) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              ${index === 0 ? 'text-[#F97316]' : index === 3 ? 'text-green-500' : 'text-gray-800'}`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollLetters;