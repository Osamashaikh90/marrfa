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
    <div className="relative bg-gradient-to-r from-[#08254c] to-[#10a4b0] h-[60vh]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <h1 className="mb-6 text-5xl font-bold text-center">
          Welcome to Marrfa Blog
        </h1>
        <p className="max-w-2xl mb-8 text-xl text-center">
          Discover the latest insights in technology, programming, and digital innovation
        </p>
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Search blogs..."
            value={inputValue}
            onChange={handleSearchChange}
            className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#10a4b0]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;