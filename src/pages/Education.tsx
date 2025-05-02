import SectionTitle from "../components/SectionTitle"
import EducationCard from "../components/EducationCard"
import CertificationCard from "../components/CertificationCard"

const Education = () => {
  const educations = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Capital University of Science and Technology",
      location: "Islamabad, PK",
      period: "2020 - 2024",
      description: "Specialized in Backend development and Web Technologies. Graduated with honors.",
      courses: [
        "Object Oriented Programming",
        "Data Structures",
        "Aritificial Intelligence",
        "Introduction to Data Science",
        "Internet of Things",
        "Blockchain Technology",
        "Computer Communication Networks",
      ],
    },
    {
      degree: "HSSC in Pre-Engineering",
      institution: "Punjab Group of Colleges, Quaid Campus",
      location: "Rawalpindi, PK",
      period: "2018 - 2020",
    },
  ]

  const certifications = [
    {
      title: "Introduction to DevOps",
      issuer: "International Business Machines Corporation",
      date: "Aug 2024",
      description: "Equipped with a strong foundation in DevOps practices.",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VHCZZVAWRYJ1?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      logo: "/images/IBM_LOGO.png",
    },
    {
      title: "What is Data Science?",
      issuer: "International Business Machines Corporation",
      date: "Aug 2023",
      description: "Hands-on experience building predictive models using scikit-learn, including classification, regression, clustering, and model evaluation techniques.",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/STFQPQJYUP3Y",
      logo: "/images/IBM_LOGO.png",
    },
    {
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      date: "Aug 2023",
      description: "Proficient in modern JavaScript (ES6+) with experience developing dynamic, responsive, and interactive web applications.",
      credentialUrl: "https://www.hackerrank.com/certificates/52f0c9f6cb85",
      logo: "/images/HackerRank.jpg",
    },
    {
      title: "Crash Course on Python",
      issuer: "Google",
      date: "Aug 2023",
      description: "Proficient in Python with hands-on experience in writing clean, efficient, and modular code.",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/92GHMDFMNXX5",
      logo: "/images/Google_LOGO.png",
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
