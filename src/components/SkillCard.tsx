import type React from "react"
interface SkillCardProps {
  category: string
  skills: string[]
  icon: React.ReactNode
}

const SkillCard = ({ category, skills, icon }: SkillCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-teal-500 dark:text-teal-400">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
