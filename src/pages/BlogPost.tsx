"use client"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()

  // In a real application, you would fetch the blog post data from an API
  // This is just a mock example
  const blogPosts = {
    "1": {
      title: "Getting Started with React Hooks",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["React", "Hooks", "JavaScript"],
      content: `
        <p>React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. They allow you to "hook into" React state and lifecycle features from function components.</p>
        
        <h2>Why Hooks?</h2>
        <p>Hooks solve several problems in React:</p>
        <ul>
          <li>They let you extract stateful logic from a component so it can be tested and reused independently.</li>
          <li>They let you use state and other React features without writing classes.</li>
          <li>They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.</li>
        </ul>
        
        <h2>The useState Hook</h2>
        <p>The useState hook lets you add state to functional components. Here's a simple example:</p>
        <pre><code>
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
        </code></pre>
        
        <h2>The useEffect Hook</h2>
        <p>The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.</p>
        <pre><code>
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
    
    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Only re-run the effect if count changes
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
        </code></pre>
        
        <h2>Custom Hooks</h2>
        <p>You can also create your own Hooks to reuse stateful behavior between different components. Here's a simple custom Hook that manages form input state:</p>
        <pre><code>
import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  return {
    value,
    onChange: handleChange
  };
}

// Usage in a component
function Form() {
  const nameInput = useInput('');
  const emailInput = useInput('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        {...nameInput}
      />
      <input
        type="email"
        placeholder="Email"
        {...emailInput}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
        </code></pre>
        
        <h2>Conclusion</h2>
        <p>React Hooks provide a more direct way to work with React's features and can help simplify your components. They encourage code reuse and better organization of component logic.</p>
        <p>As you become more comfortable with Hooks, you'll find that they can replace most class component patterns while reducing code complexity.</p>
      `,
    },
    "2": {
      title: "Building Responsive UIs with Tailwind CSS",
      date: "Apr 22, 2023",
      readTime: "7 min read",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["CSS", "Tailwind", "Responsive Design"],
      content: `
        <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. It provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.</p>
        
        <h2>Why Tailwind CSS?</h2>
        <p>Tailwind offers several advantages over traditional CSS frameworks:</p>
        <ul>
          <li>No more naming CSS classes - you use pre-defined utility classes directly in your HTML</li>
          <li>Responsive design is built-in with simple prefixes like sm:, md:, lg:, etc.</li>
          <li>You can customize your design system (colors, spacing, fonts, etc.) through a config file</li>
          <li>The final production build only includes the CSS you actually use</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>To get started with Tailwind CSS, you can install it via npm:</p>
        <pre><code>
npm install tailwindcss
        </code></pre>
        
        <p>Then create a configuration file:</p>
        <pre><code>
npx tailwindcss init
        </code></pre>
        
        <h2>Building Responsive Layouts</h2>
        <p>Tailwind makes responsive design straightforward with its responsive prefixes. Here's an example of a responsive card layout:</p>
        <pre><code>
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Store front">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
        </code></pre>
        
        <p>In this example:</p>
        <ul>
          <li>The card is stacked vertically on small screens</li>
          <li>On medium screens (md:) and up, it switches to a horizontal layout</li>
          <li>The image takes full width on small screens but has a fixed width on larger screens</li>
        </ul>
        
        <h2>Dark Mode</h2>
        <p>Tailwind also makes it easy to implement dark mode with the dark: variant:</p>
        <pre><code>
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <h1 class="text-2xl font-bold">This text adapts to dark mode</h1>
  <p class="text-gray-600 dark:text-gray-300">This paragraph also changes color in dark mode</p>
</div>
        </code></pre>
        
        <h2>Customization</h2>
        <p>You can customize Tailwind through the tailwind.config.js file:</p>
        <pre><code>
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['visited'],
    }
  },
  plugins: [],
}
        </code></pre>
        
        <h2>Conclusion</h2>
        <p>Tailwind CSS provides a different approach to styling your applications. Instead of pre-designed components, it gives you the building blocks to create your own designs quickly and efficiently.</p>
        <p>While it has a steeper learning curve than component-based frameworks, the flexibility and productivity gains make it worth considering for your next project.</p>
      `,
    },
    // Add more blog posts as needed
  }

  const post = blogPosts[id as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Blog post not found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors duration-200"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium mb-6 transition-colors duration-200"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Blog
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center mr-6 mb-2">
            <Calendar size={16} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center mb-2">
            <Clock size={16} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              <Tag size={14} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-8">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto rounded-lg" />
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </div>
  )
}

export default BlogPost
