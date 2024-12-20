/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../utils/redux/blogSlice';

const HeroSection = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setSearchQuery(inputValue));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue, dispatch]);

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative bg-gradient-to-r from-[#08254c] to-[#10a4b0] h-[50vh] md:h-[60vh]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl font-bold text-center">
          Welcome to Marrfa Blog
        </h1>
        <p className="max-w-2xl mb-6 md:mb-8 text-lg md:text-xl text-center px-4">
          Discover the latest insights in technology, programming, and digital innovation
        </p>
        <div className="w-full max-w-xl px-4">
          <input
            type="text"
            placeholder="Search blogs..."
            value={inputValue}
            onChange={handleSearchChange}
            className="w-full px-4 md:px-6 py-2 md:py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#10a4b0]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;