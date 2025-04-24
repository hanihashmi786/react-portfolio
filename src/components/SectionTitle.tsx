interface SectionTitleProps {
    title: string
    subtitle?: string
  }
  
  const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
    return (
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
      </div>
    )
  }
  
  export default SectionTitle
  