"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Landingpage from "@/app/constant/landingpage.text";
import { FiSearch, FiFilter, FiGrid, FiList } from "react-icons/fi";
import { WiTime10 } from "react-icons/wi";
import { FaRegUserCircle, FaChevronDown } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const BlogPage = () => {
  const { posts, categories, tags } = Landingpage.blog;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [viewMode, setViewMode] = useState("grid");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const dropdownRef = useRef(null);
    const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSortDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter and sort posts
  let filteredPosts = posts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort posts
  filteredPosts = filteredPosts.sort((a, b) => {
    switch (sortBy) {
      case "latest":
        return new Date(b.date) - new Date(a.date);
      case "oldest":
        return new Date(a.date) - new Date(b.date);
      case "alphabetical":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <>
    <div className="bg-[#1f1b1b] min-h-screen text-white py-10">
    
      <div className="w-[94%] mx-auto px-4 md:px-6 lg:px-8">
        
    
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog Posts</h1>
            <p className="text-gray-400">Discover our latest automotive insights and tips</p>
          </div>
          
       
          <div className="flex items-center gap-4">
           
            <div className="flex items-center bg-[#2a2a2a] rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${
                  viewMode === "grid" 
                    ? "bg-red-600 text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded  ${
                  viewMode === "list" 
                    ? "bg-red-600 text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-lg hover:bg-[#353535] transition-colors"
              >
                <FiFilter className="w-4 h-4" />
                <span className="text-sm">Sort by</span>
                <FaChevronDown className="w-3 h-3" />
              </button>
              
              {showSortDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-lg border border-gray-600 z-10">
                  <button
                    onClick={() => {
                      setSortBy("latest");
                      setShowSortDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-[#353535] rounded-t-lg"
                  >
                    Latest First
                  </button>
                  <button
                    onClick={() => {
                      setSortBy("oldest");
                      setShowSortDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-[#353535]"
                  >
                    Oldest First
                  </button>
                  <button
                    onClick={() => {
                      setSortBy("alphabetical");
                      setShowSortDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-[#353535] rounded-b-lg"
                  >
                    Alphabetical
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Blog Cards */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400 text-sm">
                Showing {filteredPosts.length} of {posts.length} posts
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== "All" && ` in "${selectedCategory}"`}
              </p>
            </div>

            <div className={`${
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
                : "flex flex-col gap-6"
            }`}>
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                   onClick={ () => router.push('/readmore') }
                  className={`bg-[#2a2a2a] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                    viewMode === "grid" 
                      ? "hover:scale-[1.02]" 
                      :  "flex gap-4 items-start p-5 sm:p-0"
                  }`}
                >
                  <div className={`relative  ${
                    viewMode === "grid" 
                      ? "w-full h-48" 
                      : "w-48 h-32 flex-shrink-0 "
                  }`}>
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  
                  <div className={`${viewMode === "grid" ? "p-5" : "flex-1 py-4 pr-5"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <button className="bg-red-600 text-xs px-3 py-1 rounded-full font-semibold hover:bg-red-700 transition-colors">
                        {post.category}
                      </button>
                      {viewMode === "list" && (
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <WiTime10 /> 
                          <span>{post.date}</span>
                        </div>
                      )}
                    </div>
                    
                    <h2 className={`font-semibold group-hover:text-red-400 transition-colors ${
                      viewMode === "grid" ? "text-lg" : "text-xl"
                    }`}>
                      {post.title}
                    </h2>
                    
                    {viewMode === "list" && (
                      <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                        {post.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                      </p>
                    )}
                    
                    <div className={`flex items-center ${
                      viewMode === "grid" 
                        ? "justify-between text-gray-400 text-sm mt-3" 
                        : "gap-4 text-gray-400 text-sm mt-4"
                    }`}>
                      {viewMode === "grid" && (
                        <div className="flex items-center gap-2">
                          <WiTime10 /> 
                          <span>{post.date}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <FaRegUserCircle /> 
                        <span>{post.author}</span>
                      </div>
                      {viewMode === "list" && (
                        <button className="text-red-400 hover:text-red-300 font-medium text-sm"
                        onClick={ () => router.push('/readmore') }>
                          Read More →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
            {/* Search */}
            <div className="bg-[#262626] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full bg-[#1f1f1f] text-gray-300 pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border border-gray-600"
                />
                <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-[#262626] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all font-medium ${
                    selectedCategory === "All"
                      ? "bg-red-600 text-white shadow-lg"
                      : "hover:bg-red-600 hover:text-white text-gray-300 bg-[#1f1f1f]"
                  }`}
                >
                  All Posts
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-all font-medium ${
                      selectedCategory === cat
                        ? "bg-red-600 text-white shadow-lg"
                        : "hover:bg-red-600 hover:text-white text-gray-300 bg-[#1f1f1f]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Latest Posts */}
            <div className="bg-[#262626] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Latest Posts</h3>
              <div className="space-y-4">
                {posts.slice(0, 4).map((p) => (
                  <div key={p.id} className="flex items-start gap-3 group cursor-pointer">
                    <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image 
                        src={p.img} 
                        alt={p.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors line-clamp-2">
                        {p.title}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                        <WiTime10 className="w-3 h-3" />
                        <span>{p.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-[#262626] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#1f1f1f] hover:bg-red-600 text-gray-300 hover:text-white text-xs py-2 px-4 rounded-full cursor-pointer transition-all border border-gray-600 hover:border-red-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default BlogPage;
