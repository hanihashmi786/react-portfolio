"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, GitlabIcon as GitHub, Linkedin, Instagram, Mail } from "lucide-react"
import TypingAnimation from "../components/TypingAnimation"
import { ThemeContext } from "../context/ThemeContext"

const Home = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-teal-600 dark:text-teal-400">Hani Mustafa Hashmi</span>
        </h1>
        <div className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 h-12">
          I'm a{" "}
          <TypingAnimation texts={["Software Engineer", "Full Stack Developer", "React/DJango Developer", "Problem Solver"]} />
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          I build both the front end and back end of web and mobile apps. I make sure my code
          is clean, fast, and easy to use. Whether it’s a new feature or a big project, I handle it from start
          to finish.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/projects"
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md shadow-sm transition-colors duration-200 flex items-center"
          >
            View My Work
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 border border-teal-600 dark:border-teal-400 font-medium rounded-md shadow-sm hover:bg-teal-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/hanihashmi786"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/hanihashmi333"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://instagram.com/hanihashmii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="mailto:hanimhashmi121@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
          aria-label="Scroll down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Home
