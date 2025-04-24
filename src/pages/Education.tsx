import SectionTitle from "../components/SectionTitle"
import EducationCard from "../components/EducationCard"
import CertificationCard from "../components/CertificationCard"

const Education = () => {
  const educations = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2015 - 2017",
      description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
      courses: [
        "Advanced Web Development",
        "User Interface Design",
        "Data Visualization",
        "Machine Learning",
        "Algorithms",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2011 - 2015",
      description: "Focused on software engineering and web development. Graduated with high distinction.",
      courses: ["Data Structures", "Web Programming", "Database Systems", "Software Engineering", "Computer Networks"],
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Dec 2022",
      description: "Validates expertise in designing and deploying scalable systems on AWS.",
      credentialUrl: "https://www.youraccredible.com/credentials/123456",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Meta Frontend Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      date: "Aug 2022",
      description: "Comprehensive program covering React, JavaScript, and modern frontend development practices.",
      credentialUrl: "https://www.youraccredible.com/credentials/789012",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      date: "Mar 2022",
      description: "In-depth training on user experience design principles and methodologies.",
      credentialUrl: "https://www.youraccredible.com/credentials/345678",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB",
      date: "Nov 2021",
      description: "Validates expertise in developing applications using MongoDB.",
      credentialUrl: "https://www.youraccredible.com/credentials/901234",
      logo: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Education & Certifications"
          subtitle="My academic background and professional certifications"
        />

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="space-y-8">
            {educations.map((education, index) => (
              <EducationCard
                key={index}
                degree={education.degree}
                institution={education.institution}
                location={education.location}
                period={education.period}
                description={education.description}
                courses={education.courses}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((certification, index) => (
              <CertificationCard
                key={index}
                title={certification.title}
                issuer={certification.issuer}
                date={certification.date}
                description={certification.description}
                credentialUrl={certification.credentialUrl}
                logo={certification.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
