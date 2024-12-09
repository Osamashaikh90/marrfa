import { useEffect, useRef, useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = ['Home', 'Categories', 'About', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        navbarRef.current.classList.toggle("sticky", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="relative z-50 shadow-md bg-gradient-to-r from-[#08254c] to-[#10a4b0]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 px-4 py-1 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img href="/" className="object-contain w-16 h-16 md:w-20 md:h-20" src="/logo.png" alt="Logo" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item, i) => (
              <span key={i} className="cursor-pointer text-white hover:text-[#10a4b0]">{item}</span>
            ))}
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? (
                <IoMdClose className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {items.map((item, i) => (
                <span
                  key={i}
                  className="block px-3 py-2 text-white hover:text-[#10a4b0] cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
