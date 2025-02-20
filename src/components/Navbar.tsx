import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-purple-500">🧸</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Sobre</a>
              <a href="#products" className="text-gray-300 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Produtos</a>
              <a href="#influencers" className="text-gray-300 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Influencers</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Sobre</a>
            <a href="#products" className="text-gray-300 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Produtos</a>
            <a href="#influencers" className="text-gray-300 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Influencers</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;