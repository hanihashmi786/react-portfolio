import SectionTitle from "../components/SectionTitle"
import ExperienceCard from "../components/ExperienceCard"

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "Jan 2021 - Present",
      description: [
        "Lead a team of 5 frontend developers in building and maintaining multiple web applications",
        "Implemented a new component library that reduced development time by 30%",
        "Optimized application performance, resulting in a 40% improvement in load times",
        "Collaborated with UX/UI designers to implement responsive designs and improve user experience",
        "Mentored junior developers and conducted code reviews to ensure code quality",
      ],
      skills: ["React", "TypeScript", "Redux", "Next.js", "GraphQL", "Jest"],
    },
    {
      title: "Frontend Developer",
      company: "Web Innovations",
      location: "New York, NY",
      period: "Mar 2018 - Dec 2020",
      description: [
        "Developed and maintained multiple client websites and web applications",
        "Collaborated with backend developers to integrate RESTful APIs",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Participated in agile development processes, including daily stand-ups and sprint planning",
        "Contributed to the company's internal component library",
      ],
      skills: ["React", "JavaScript", "CSS3", "SASS", "RESTful APIs", "Webpack"],
    },
    {
      title: "Web Developer Intern",
      company: "Digital Creations",
      location: "Boston, MA",
      period: "Jun 2017 - Feb 2018",
      description: [
        "Assisted in the development of client websites using HTML, CSS, and JavaScript",
        "Implemented responsive designs based on mockups provided by designers",
        "Fixed bugs and improved website performance",
        "Participated in client meetings and contributed to project planning",
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
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
