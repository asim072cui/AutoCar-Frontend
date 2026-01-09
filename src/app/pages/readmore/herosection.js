'use client';

import Image from 'next/image';
import React, { useState } from "react";
import { useEffect } from 'react';
import Landingpage from "../../constant/landingpage.text";
import axios from 'axios';
import { 
  FaRegUser, 
  FaRegCalendar, 
  FaRegComment, 
  FaSearch, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn 
} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import toast from 'react-hot-toast';

const Herosection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Auto World");
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    saveInfo: false,
  });
  const [ comments , setComments] = useState ([]);
  const [ loading , setLoading] = useState (false);

  const fetchComments = async () => {
    try{
      const res = await axios.get('http://localhost:5000/api/comments/getcomments');
      setComments(res.data.comments);

    }catch(error) {
      console.error("Error fetching comments:", error);
    }
  };
  useEffect(() => {
    fetchComments();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!formData.comment) {
//     toast.error("Please write a comment");
//     return;
//   }

//   try {
//     setLoading(true);

//     const token = localStorage.getItem("token") || JSON.parse(localStorage.getItem("user"))?.token;

//     const res = await axios.post(
//       "http://localhost:5000/api/comments/createcomment",
//       { comment: formData.comment },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     // Refresh comments after posting
//     fetchComments();

//     // Clear comment input
//     setFormData({
//       ...formData,
//       comment: "",
//     });

//   } catch (error) {
//     console.error("Comment error:", error);
//     toast.error(error.response?.data?.message || "Something went wrong");
//   } finally {
//     setLoading(false);
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  // 1. Check comment input
  if (!formData.comment.trim()) {
    toast.error("Please write a comment");
    return;
  }
  

  // 2. Safely get user token
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;

  if (!token) {
    toast.error("Please login first!");
    return;
  }

  try {
    setLoading(true);

    
    const response = await axios.post(
      "http://localhost:5000/api/comments/createcomment",
      { comment: formData.comment }, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
toast.success("Comment added!");

   
    fetchComments();

    setFormData({
      ...formData,
      comment: "",
    });

  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

const [sortby, setSortby] = useState("newest");
const sortedComments = [...comments].sort((a,b) => {
  if (sortby === "newest") {
    return new Date (b.createdAt) - new Date (a.createdAt);
  } else if (sortby === "oldest") {
    return new Date (a.createdAt) - new Date (b.createdAt);
  } else if (sortby === "mostpopular") {
    return b.likes - a.likes;
  }
  return 0;
})
  const blogData = Landingpage.blogCategories[selectedCategory];
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-5 sm:mb-12">
          {blogData?.breadcrumb?.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  index === blogData.breadcrumb.length - 1
                    ? "text-white"
                    : "hover:text-red-600 cursor-pointer"
                }
              >
                {/* {item} */}
              </span>
              {/* {index < blogData.breadcrumb.length - 1 && (
                <span className="text-gray-500">/</span>
              )} */}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Main Image with Fallback */}
            <div className="relative w-full h-[200px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
              <Image
                src={
                  blogData?.mainImage && blogData.mainImage.trim() !== ""
                    ? blogData.mainImage
                    : "/images/placeholder.jpg"
                }
                alt={blogData?.title || "Blog main image"}
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-xl md:text-5xl font-bold text-white mb-6">
              {blogData?.title}
            </h1>

            <div className="flex flex-wrap items-center  gap-6 mb-8 text-gray-400">
              <div className="flex items-center gap-2 text-xs sm:text-lg ">
                <FaRegUser className="text-red-600" />
                <span>{blogData?.author}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-lg">
                <FaRegCalendar className="text-red-600" />
                <span>{blogData?.date}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-lg">
                <FaRegComment className="text-red-600" />
                <span>{blogData?.comments} comments</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm  sm:text-lg leading-relaxed mb-8">
              {blogData?.introduction}
            </p>

            {blogData?.sections?.map((section) => (
              <div key={section.id} className="mb-8">
                <h2 className="text-lg md:text-3xl font-bold text-white mb-4">
                  {section.id}. {section.title}
                </h2>
                <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

        
            <div className="border-l-4 border-red-800 p-6 my-8">
              <p className="text-white text-sm sm:text-lg font-medium italic">
                {blogData?.conclusion?.quote}
              </p>
            </div>

            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-8">
              {blogData?.conclusion?.text}
            </p>

        
            <div className="mb-12">
              <h3 className=" text-md sm:text-xl font-semibold text-white mb-4">Related Posts</h3>
              <div className="grid grid-cols-2 h-[300px] sm:h-auto md:grid-cols-2 gap-6">
                {blogData?.relatedPosts?.map((post) => {
                  const imageSrc =
                    post?.image && post.image.trim() !== ""
                      ? post.image
                      : "/images/placeholder.jpg";
                  const altText = post?.title || "Related blog post image";

                  return (
                    <div
                      key={post.id}
                      className="bg-[#262626] rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="relative  h-30 sm:h-48 overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={altText}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className=" text-sm sm:text-lg font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                          {post.title}
                        </h4>
                        <div className="sm:flex-row flex-col items-center gap-4 text-[10px]  sm:text-sm text-gray-400">
                          <div className="flex items-center gap-1 whitespace-nowrap ">
                            <FaRegUser className="text-red-600" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1  sm:mt-0 mt-4">
                            <FaRegCalendar className="text-red-600" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          <div className="mb-12">
              <h3 className=" text-md sm:text-xl font-semibold text-white mb-4">Article Tags</h3>
              <div className="flex flex-wrap gap-3">
                {blogData?.articleTags?.map((tag, index) => (
                  <span
                    key={index}
                    className=" px-2 py-2 sm:px-4 sm:py-2 bg-[#262626] text-sm sm:text-lg text-gray-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
           <div className="mb-12">
              <h3 className="text-md sm:text-2xl font-bold text-white mb-6">
             Comments ({comments?.length || 0})
              </h3>
           <div className="flex justify-end mb-6">
                <select
                 className="bg-[#262626] text-gray-300 px-2 pt-1 sm:px-4 sm:py-2  text-sm  sm:text-lg rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                 value={sortby}
                 onChange={(e) => setSortby(e.target.value)}>
                  <option value='newest'>   Sort by: Newest ({comments?.length || 0}) </option>
                  <option value='oldest'>Sort by: Oldest ({comments?.length || 0})</option>
                  <option value='popular'>Sort by: Most Popular({comments?.length || 0})</option>
                </select>
              </div>

              <div className="space-y-3 sm:space-y-6 mb-8">
               {comments.map((comment) => (
  <div key={comment._id} className="flex gap-4 bg-[#262626] p-6 rounded-xl">
    <div className="flex-shrink-0">
      <img
         src={comment.profilePic || comment.user?.profilePic || "/user/user7.png"}
         className="w-10 h-10 rounded-full"
      />
    </div>

    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <h4 className="font-semibold text-white">{comment.name}</h4>
        <span className="text-gray-400 text-sm">
          {new Date(comment.createdAt).toLocaleDateString()}
        </span>
      </div>

      <p className="text-gray-300 mb-3">{comment.comment}</p>
    </div>
  </div>
              ))}
          </div>
            </div>
         <div className="bg-[#262626] rounded-xl p-8">
              <h3 className=" text-md sm:text-2xl font-bold text-white mb-2">
                {blogData?.commentForm?.title}
              </h3>
              <p className="text-gray-400 mb-6  text-sm sm:text-md">
                {blogData?.commentForm?.subtitle}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 md:grid-cols-2 w-[250px] sm:w-full gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-[#1a1a1a] text-gray-300 px-2 py-1 sm:px-4 sm:py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-[#1a1a1a] text-gray-300 px-2 py-1 sm:px-4 sm:py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>

                <textarea
                  name="comment"
                  placeholder="Your Comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-[#1a1a1a] text-gray-300 px-2 py-1 sm:px-4 sm:py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
                  required
                ></textarea>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    name="saveInfo"
                    id="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleInputChange}
                    className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 bg-[#1a1a1a] border-gray-700 rounded focus:ring-red-600"
                  />
                  <label htmlFor="saveInfo" className="ml-2 text-gray-400 sm:text-sm text-[11px]">
                    {blogData?.commentForm?.agreement}
                  </label>
                </div>

                <div className="flex items-center gap-4 ">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-[10px] whitespace-nowrap sm:text-base  text-white px-2 py-2  sm:px-8 sm:py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    {blogData?.commentForm?.buttonText}
                  </button>
                <div className="flex  gap-3 whitespace-nowrap">
                    <button type="button" className=" w-6 h-6 sm:w-10 sm:h-10 sm:text-lg text-sm bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-all">
                      <FaFacebookF />
                    </button>
                    <button type="button" className=" w-6 h-6 sm:w-10 sm:h-10 bg-sky-500 sm:text-lg text-sm hover:bg-sky-600 rounded-lg flex items-center justify-center text-white transition-all">
                      <FaTwitter />
                    </button>
                    <button type="button" className=" w-6 h-6 sm:w-10 sm:h-10 bg-blue-700 sm:text-lg text-sm hover:bg-blue-800 rounded-lg flex items-center justify-center text-white transition-all">
                      <FaLinkedinIn />
                    </button>
                    <button type="button" className=" w-6 h-6 sm:w-10 sm:h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center text-white transition-all">
                      <AiFillMessage />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

       
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
               <div className="bg-[#262626] rounded-xl p-6">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search"
                    className=" sm:w-full w-[70%]  bg-[#1a1a1a] text-gray-300 pl-2 pr-6 py-1  sm:pl-4 sm:pr-12 sm:py-3 rounded-lg focus:ring-2 focus:ring-red-600"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white w-6 h-6 text-sm sm:text-lg sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all">
                    <FaSearch />
                  </button>
                </div>
              </div>

              
         <div className="bg-[#262626] rounded-xl p-6">
                <h3 className="text-sm sm:text-xl font-bold text-white mb-4">Categories</h3>
                <div className="space-y-3">
                  {Object.keys(Landingpage.blogCategories).map((category) => (
                    <div
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center justify-between text-[11px] sm:text-lg px-2 py-1 sm:px-3 sm:py-2 rounded-lg cursor-pointer transition-colors ${
                        selectedCategory === category
                          ? "bg-red-600 text-white"
                          : "text-gray-300 hover:text-red-600"
                      }`}
                    >
                      <span>{category}</span>
                      <span className="text-sm text-gray-400">
                        {Landingpage.blogCategories[category].sidebar.categories.length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>



                 {/* Latest Posts */}
              <div className="bg-[#262626] rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Latest posts</h3>
                <div className="space-y-4">
                  {blogData.sidebar.latestPosts.map((post) => (
                    <div key={post.id} className="flex gap-4 cursor-pointer group">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <FaRegUser className="text-red-600" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                          <FaRegCalendar className="text-red-600" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-[#262626] rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogData.sidebar.popularTags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-[#1a1a1a] text-gray-300 text-sm rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
