import { useSelector } from 'react-redux';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BlogList from './components/BlogList'

function App() {
  const { blogs, searchQuery, selectedCategory, sortBy } = useSelector((state) => state.blog);

  const filteredBlogs = blogs
    .filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.date) - new Date(a.date)
      } else if (sortBy === 'oldest') {
        return new Date(a.date) - new Date(b.date)
      } else if (sortBy === 'readTime') {
        return a.minuteRead - b.minuteRead
      }
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <BlogList 
        blogs={filteredBlogs}
      />
    </div>
  )
}

export default App
