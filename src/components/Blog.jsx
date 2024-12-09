/* eslint-disable react/prop-types */
const Blog = ({blog}) => {
  return (
    <>
       <div key={blog.id} className="overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-48"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-gray-100 rounded-full text-[#10a4b0] text-sm font-medium">
                {blog.category}
              </span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-2">
                <p className="text-[#10a4b0] text-sm font-medium">
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-600">{blog.minuteRead} min read</span>
              </div>
              <h2 className="mb-2 text-xl font-bold text-gray-800">{blog.title}</h2>
              <p className="mb-4 text-gray-600 line-clamp-2">{blog.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{blog.author}</p>
                  </div>
                </div>
                <button className="text-[#10a4b0] hover:text-[#2c8683] font-medium">
                  Read More →
                </button>
              </div>
            </div>
          </div>  
    </>
  )
}

export default Blog