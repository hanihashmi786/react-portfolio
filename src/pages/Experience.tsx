import SectionTitle from "../components/SectionTitle"
import ExperienceCard from "../components/ExperienceCard"

const Experience = () => {
  const experiences = [
    {
      title: "Python Developer",
      company: "MARS BPO Pvt. Ltd.",
      location: "Rawalpindi, Pakistan",
      period: "Oct 2024 - Present",
      description: [
        "Developed and maintained 5+ web and mobile apps using React Native and Python (Flask/Django), improving deployment time by 30%.",
        "Collaborated with cross-functional teams to build scalable solutions, resulting in a 25% increase in system reliability.",
        "Optimized application performance, resulting in a 40% improvement in load times",
        "Optimized backend codebase and debugging processes, reducing issue resolution time by 40%.",
      ],
      skills: ["React", "TypeScript", "Flask", "Django", "Python" , "HTML/CSS" , "JavaScript" , "React Native", "PostgreSQL", "Bash", "Git" , "MongoDB"] ,
    },
    {
      title: "JavaScript Developer - Internship",
      company: "SOFTOO Pvt. Ltd.",
      location: "Islamabad, Pakistan",
      period: "Jul 2023 - Sep 2023",
      description: [
        "Completed intensive Node.js training and built RESTful APIs for 3 internal projects during the internship.",
        "Enhanced logical thinking and problem-solving by independently tackling coding challenges and debugging exercises.",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Participated in agile development processes, including daily stand-ups and sprint planning",
        "Contributed to a collaborative team culture by sharing solutions and improving peer review quality",
      ],
      skills: ["React", "JavaScript", "CSS3", "SASS", "RESTful APIs", "Webpack"],
    },
  ]

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Work Experience" subtitle="My professional journey and career highlights" />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              location={experience.location}
              period={experience.period}
              description={experience.description}
              skills={experience.skills}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
