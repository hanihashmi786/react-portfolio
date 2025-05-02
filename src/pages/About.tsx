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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-6">
                {/* Profile image - takes 5 columns on md screens */}
                <div className="md:col-span-5 flex justify-center">
                  {/* Enhanced profile image container */}
                  <div className="relative group mx-auto">
                    {/* Decorative background elements - contained within the column */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-500"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-full opacity-50 blur-sm group-hover:blur-md transition duration-500 animate-pulse"></div>

                    {/* Main image container - slightly smaller to fit better */}
                    <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl transition-all duration-300 group-hover:scale-105 z-10">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-500/30 dark:to-teal-600/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src="/images/profile.png"
                        alt="Hani Mustafa Hashmi"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=300&width=300"
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Text content - takes 7 columns on md screens */}
                <div className="md:col-span-7">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who am I?</h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                      I'm a full‑stack (and MERN) developer who builds both web and mobile apps. On the web, I use React
                      and Flask with Python, and I store data in PostgreSQL. For mobile projects, I turn to React
                      Native. I design and build APIs, set up and secure databases, and keep servers running
                      smoothly—always aiming for clean, fast, and easy‑to‑use code.
                    </p>
                    <p>
                      When I'm not coding, you'll find me playing online games, hanging out with friends, exploring new
                      places, or simply catching up on some much‑needed sleep.
                    </p>
                  </div>
                </div>
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
