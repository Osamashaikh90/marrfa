import { useEffect,useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef(null);
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
    <nav ref={navbarRef} className="relative z-50  shadow-md bg-gradient-to-r from-[#08254c] to-[#10a4b0]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 px-4 py-1 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <img href="/" className="object-contain w-20 h-20" src="/logo.png" alt="Logo" />
          </div>
          <div className="items-center hidden space-x-8 md:flex">
            {items.map((item, i) => {
              return <span key={i} href="/" className="cursor-pointer text-white hover:text-[#10a4b0]">{item}</span>;
            })}
          </div>
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
