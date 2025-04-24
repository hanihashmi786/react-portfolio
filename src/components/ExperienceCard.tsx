import { Calendar } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills?: string[]
}

const ExperienceCard = ({ title, company, location, period, description, skills }: ExperienceCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-teal-600 dark:text-teal-400 font-medium">{company}</p>
          <p className="text-gray-600 dark:text-gray-400">{location}</p>
        </div>
        <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
          <Calendar size={16} className="mr-1" />
          <span>{period}</span>
        </div>
      </div>
      <div className="mb-4">
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceCard
