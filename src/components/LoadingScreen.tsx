"use client"

import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const LoadingScreen = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-teal-500 border-gray-200 rounded-full animate-spin"></div>
        <p className={`mt-4 text-lg font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>Loading...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
