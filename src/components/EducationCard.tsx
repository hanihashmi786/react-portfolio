import { Calendar, MapPin } from "lucide-react"

interface EducationCardProps {
  degree: string
  institution: string
  location: string
  period: string
  description?: string
  courses?: string[]
}

const EducationCard = ({ degree, institution, location, period, description, courses }: EducationCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{degree}</h3>
          <p className="text-teal-600 dark:text-teal-400 font-medium">{institution}</p>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
            <MapPin size={16} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
          <Calendar size={16} className="mr-1" />
          <span>{period}</span>
        </div>
      </div>
      {description && <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>}
      {courses && courses.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Relevant Courses:</h4>
          <div className="flex flex-wrap gap-2">
            {courses.map((course) => (
              <span
                key={course}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default EducationCard
