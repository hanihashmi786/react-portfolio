import SectionTitle from "../components/SectionTitle"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart, and checkout.",
      longDescription:
        "This project is a comprehensive e-commerce solution built with React, Node.js, and MongoDB. It features product listings, search functionality, user authentication, shopping cart, payment processing with Stripe, and an admin dashboard for product and order management. The frontend is built with React and Redux for state management, while the backend uses Express.js and MongoDB for data storage.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-platform-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality.",
      longDescription:
        "This task management application allows users to organize their tasks in a Kanban board style interface. Users can create boards, add lists, and create tasks with descriptions, due dates, and labels. The app features drag-and-drop functionality for moving tasks between lists, user authentication, and real-time updates using WebSockets. The frontend is built with React and the backend uses Node.js with Express and MongoDB.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "React DnD"],
      githubUrl: "https://github.com/yourusername/task-management-app",
      liveUrl: "https://task-management-app-demo.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather and forecasts for multiple locations.",
      longDescription:
        "This weather dashboard allows users to search for locations and view current weather conditions as well as 5-day forecasts. It features a clean, intuitive interface with weather icons, temperature, humidity, wind speed, and other relevant data. The app uses the OpenWeatherMap API for weather data and includes features like saving favorite locations, unit conversion (Celsius/Fahrenheit), and responsive design for all devices.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "JavaScript", "OpenWeatherMap API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      longDescription:
        "This portfolio website is designed to showcase my projects, skills, and experience in a clean and modern interface. It features a responsive design, dark/light mode toggle, project showcase with filtering options, contact form, and blog section. The website is built with React and styled with Tailwind CSS for a clean, minimal aesthetic.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/portfolio-website",
      liveUrl: "https://yourportfolio.com",
    },
    {
      id: 5,
      title: "Recipe Finder App",
      description: "A recipe search application with filtering options and saved favorites.",
      longDescription:
        "This recipe finder application allows users to search for recipes based on ingredients, cuisine type, dietary restrictions, and more. It features a clean interface for browsing recipes, detailed recipe pages with ingredients and instructions, the ability to save favorite recipes, and a meal planning feature. The app uses the Spoonacular API for recipe data and includes user authentication for saving preferences.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "JavaScript", "Firebase", "Spoonacular API", "CSS3"],
      githubUrl: "https://github.com/yourusername/recipe-finder-app",
      liveUrl: "https://recipe-finder-app-demo.com",
    },
    {
      id: 6,
      title: "Chat Application",
      description: "A real-time chat application with private messaging and group chats.",
      longDescription:
        "This real-time chat application allows users to communicate through private messages and group chats. It features user authentication, real-time message updates, read receipts, online status indicators, file sharing, and message search functionality. The frontend is built with React, while the backend uses Node.js with Express and Socket.io for real-time communication. User data and messages are stored in MongoDB.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
      githubUrl: "https://github.com/yourusername/chat-application",
      liveUrl: "https://chat-application-demo.com",
    },
  ]

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="My Projects" subtitle="Check out some of my recent work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              longDescription={project.longDescription}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
