import { createSlice } from '@reduxjs/toolkit';
import { blogs } from '../blogData';

const initialState = {
  blogs: blogs,
  searchQuery: '',
  selectedCategory: 'All',
  sortBy: 'latest',
  currentPage: 1,
  blogsPerPage: 9
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; 
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.currentPage = 1;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchQuery, setSelectedCategory, setSortBy, setCurrentPage } = blogSlice.actions;
export default blogSlice.reducer; 