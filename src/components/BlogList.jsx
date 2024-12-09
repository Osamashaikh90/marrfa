/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import { categories } from '../utils/blogData';
import { setCurrentPage } from '../utils/redux/blogSlice';
import { setSelectedCategory, setSortBy } from '../utils/redux/blogSlice';
import Blog from './Blog';

const BlogList = ({blogs}) => {
  const dispatch = useDispatch();
  const { currentPage, blogsPerPage , selectedCategory,  sortBy} = useSelector(state => state.blog);

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
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
        <div className="flex gap-4 mb-4 overflow-x-auto md:mb-0">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => dispatch(setSelectedCategory(category))}
              className={`px-4 py-2 cursor-pointer rounded-full ${
                selectedCategory === category
                  ? 'bg-[#10a4b0] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10a4b0]"
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
          <option value="readTime">Reading Time</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentBlogs.map(blog => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-[#10a4b0] text-white hover:bg-[#0d8a94]'
            }`}
          >
            Previous
          </button>
          
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-4 py-2 rounded-md ${
                currentPage === number
                  ? 'bg-[#10a4b0] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {number}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
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
