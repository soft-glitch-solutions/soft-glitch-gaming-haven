import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 nav-blur bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-pixel text-primary text-xl">SOFT GLITCH</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-primary px-3 py-2 transition-colors">Home</a>
              <a href="#games" className="text-white hover:text-primary px-3 py-2 transition-colors">Games</a>
              <a href="#about" className="text-white hover:text-primary px-3 py-2 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-primary px-3 py-2 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a href="#home" className="text-white hover:text-primary block px-3 py-2">Home</a>
            <a href="#games" className="text-white hover:text-primary block px-3 py-2">Games</a>
            <a href="#about" className="text-white hover:text-primary block px-3 py-2">About</a>
            <a href="#contact" className="text-white hover:text-primary block px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;