import { Calendar, Award } from "lucide-react"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  description?: string
  credentialUrl?: string
  logo?: string
}

const CertificationCard = ({ title, issuer, date, description, credentialUrl, logo }: CertificationCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start">
        {logo ? (
          <div className="mr-4 flex-shrink-0">
            <img src={logo || "/placeholder.svg"} alt={`${issuer} logo`} className="w-12 h-12 object-contain" />
          </div>
        ) : (
          <div className="mr-4 flex-shrink-0 text-teal-500 dark:text-teal-400">
            <Award size={32} />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-teal-600 dark:text-teal-400 font-medium">{issuer}</p>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
            <Calendar size={16} className="mr-1" />
            <span>{date}</span>
          </div>
          {description && <p className="text-gray-600 dark:text-gray-300 mt-3">{description}</p>}
          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-sm transition-colors duration-200"
            >
              View Credential
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default CertificationCard
