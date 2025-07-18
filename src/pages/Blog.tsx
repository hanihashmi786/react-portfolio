"use client"

import { useState } from "react"
import SectionTitle from "../components/SectionTitle"
import BlogCard from "../components/BlogCard"

const Blog = () => {
  const allPosts = [
    {
      id: "1",
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your components and manage state more effectively.",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "/images/ReactHooks.png",
      tags: ["React", "Hooks", "JavaScript"],
    },
    {
      id: "2",
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Discover how to create beautiful, responsive user interfaces using Tailwind CSS.",
      date: "Apr 22, 2023",
      readTime: "7 min read",
      image: "/images/Mockup.png",
      tags: ["CSS", "Tailwind", "Responsive Design"],
    },
    {
      id: "3",
      title: "State Management in React: Context API vs. Redux",
      excerpt: "Compare different state management approaches in React and learn when to use each one.",
      date: "Mar 10, 2023",
      readTime: "8 min read",
      image: "/images/RvC.png",
      tags: ["React", "Redux", "Context API"],
    },
    {
      id: "4",
      title: "Optimizing React Performance",
      excerpt: "Learn techniques to improve the performance of your React applications.",
      date: "Feb 28, 2023",
      readTime: "6 min read",
      image: "/images/ReactPerformance.png",
      tags: ["React", "Performance", "Optimization"],
    },
    {
      id: "5",
      title: "Introduction to TypeScript for React Developers",
      excerpt: "Discover how TypeScript can improve your React development experience with static typing.",
      date: "Jan 15, 2023",
      readTime: "9 min read",
      image: "/images/Code.png",
      tags: ["TypeScript", "React", "JavaScript"],
    },
    {
      id: "6",
      title: "Building Accessible Web Applications",
      excerpt: "Learn how to make your web applications accessible to all users, including those with disabilities.",
      date: "Dec 5, 2022",
      readTime: "7 min read",
      image: "/images/ARIA.png",
      tags: ["Accessibility", "HTML", "ARIA"],
    },
  ]

  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(allPosts.flatMap((post) => post.tags))).sort()

  const filteredPosts = activeTag ? allPosts.filter((post) => post.tags.includes(activeTag)) : allPosts

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Blog" subtitle="Thoughts, tutorials, and insights on web development" />

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTag === null
                ? "bg-teal-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTag === tag
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              image={post.image}
              tags={post.tags}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No posts found for the selected tag.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
