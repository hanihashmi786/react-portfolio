import { Quote } from "lucide-react"

interface TestimonialCardProps {
  content: string
  author: string
  position: string
  company: string
  avatar?: string
}

const TestimonialCard = ({ content, author, position, company, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="text-teal-500 dark:text-teal-400 mb-4">
        <Quote size={32} />
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        {avatar ? (
          <img src={avatar || "/placeholder.svg"} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mr-4">
            <span className="text-teal-700 dark:text-teal-300 font-bold text-lg">{author.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">{author}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
