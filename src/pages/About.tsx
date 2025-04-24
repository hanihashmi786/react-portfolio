import { Code, Briefcase, GraduationCap, User } from "lucide-react"
import SectionTitle from "../components/SectionTitle"
import SkillCard from "../components/SkillCard"

const About = () => {
  const frontendSkills = ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Next.js"]

  const backendSkills = ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs", "GraphQL", "Firebase"]

  const toolsSkills = ["Git", "GitHub", "VS Code", "Figma", "Jest", "Webpack", "Docker", "CI/CD"]

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get to know more about me and my background" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-500 dark:border-teal-400 shadow-lg">
                    <img
                      src="/images/profile.jpg"
                      alt="Hani Mustafa Hashmi"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=200&width=200"
                      }}
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who am I?</h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                    I’m a full‑stack (and MERN) developer who builds both web and mobile apps. On the web, I use React and Flask with Python, and I store data in PostgreSQL. For mobile projects, I turn to React Native. I design and build APIs, set up and secure databases, and keep servers running smoothly—always aiming for clean, fast, and easy‑to‑use code.

                    When I’m not coding, you’ll find me playing online games, hanging out with friends, exploring new places, or simply catching up on some much‑needed sleep.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  
                </p>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Personal Info</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Name:</span>
                  <span>Hani Mustafa Hashmi</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Email:</span>
                  <a
                    href="mailto:hanimhashmi121@gmail.com"
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    hanimhashmi121@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Location:</span>
                  <span>Islamabad, Pakistan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Languages:</span>
                  <span>English (Fluent), Urdu (Native)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Availability:</span>
                  <span>Full-time, Freelance</span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md shadow-sm transition-colors duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard category="Frontend Development" skills={frontendSkills} icon={<Code size={24} />} />
            <SkillCard category="Backend Development" skills={backendSkills} icon={<Briefcase size={24} />} />
            <SkillCard category="Tools & Technologies" skills={toolsSkills} icon={<GraduationCap size={24} />} />
          </div>
        </div>

        {/* WHAT I DO */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Full Stack Development */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="text-teal-500 dark:text-teal-400 mb-4">
                <Code size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Full Stack Development</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                I build web apps using React, HTML, CSS and JavaScript. Also, I build cross‑platform apps with React
                Native.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I write server code in Flask and store data in PostgreSQL.
              </p>
            </div>

            {/* API & Backend */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="text-teal-500 dark:text-teal-400 mb-4">
                <Briefcase size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">API & Backend</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">I create APIs with Django, Node.js and Express.</p>
              <p className="text-gray-600 dark:text-gray-300">I connect them to PostgreSQL for data storage.</p>
            </div>

            {/* Database Management */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="text-teal-500 dark:text-teal-400 mb-4">
                <User size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Database Management</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">I work with MongoDB, PostgreSQL, and MySQL.</p>
              <p className="text-gray-600 dark:text-gray-300">I design schemas and keep data safe and easy to query.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
