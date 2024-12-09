/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import { categories } from '../utils/blogData';
import { setCurrentPage, setSelectedCategory, setSortBy } from '../utils/redux/blogSlice';
import Blog from './Blog';

const BlogList = ({blogs}) => {
  const dispatch = useDispatch();
  const { currentPage, blogsPerPage, selectedCategory, sortBy } = useSelector(state => state.blog);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="px-4 py-6 mx-auto md:py-8 lg:py-12 max-w-7xl">
      {/* Filters Section */}
      <div className="flex flex-col gap-4 mb-6 lg:flex-row md:mb-8">
        {/* Categories */}
        <div className="w-full pb-2 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2 md:gap-4 min-w-max">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => dispatch(setSelectedCategory(category))}
                className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-full whitespace-nowrap
                  ${selectedCategory === category
                    ? 'bg-[#10a4b0] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="w-full md:w-auto px-4 py-2 lg:py-1 text-sm md:text-base border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#10a4b0]"
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
          <option value="readTime">Reading Time</option>
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
        {currentBlogs.map(blog => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-8">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md
              ${currentPage === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-[#10a4b0] text-white hover:bg-[#0d8a94]'
              }`}
          >
            Prev
          </button>
          
          {/* Page Numbers */}
          <div className="flex flex-wrap gap-2">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md
                  ${currentPage === number
                    ? 'bg-[#10a4b0] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {number}
              </button>
            ))}
          </div>
          
          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md
              ${currentPage === totalPages
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-[#10a4b0] text-white hover:bg-[#0d8a94]'
              }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
