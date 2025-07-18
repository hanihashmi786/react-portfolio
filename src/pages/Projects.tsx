import SectionTitle from "../components/SectionTitle"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Detection of Brain Tumor using MR Images",
      description: "This project focuses on the detection of brain tumors using magnetic resonance (MR) images, leveraging machine learning techniques for image analysis and classification.",
      longDescription:
        "For our final year project, we developed a responsive and fully functional website titled ‘Detection of Brain Tumor using Magnetic Resonance Images.’ The project integrates advanced machine learning algorithms with web technologies to provide an intuitive platform for detecting brain tumors. By analyzing MR images, the system can identify potential tumor areas with high accuracy, offering a valuable tool for medical professionals. The goal was to build a solution that is both user-friendly and precise in its analysis, catering to both medical practitioners and researchers.",
      image: "/images/BrainTumor.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Flask", "Tensorflow", "PyTorch","Firebase"],
      githubUrl: "https://github.com/hanihashmi786/Brain-Tumor-Detection",
      liveUrl: "https://ecommerce-platform-demo.com",
    },
    {
      id: 2,
      title: "Break Portal - Mars BPO",
      description: "A portal designed to track the number of breaks an employee takes during office hours, ensuring efficient break management.",
      longDescription:
        "The Break Portal is a tool designed to monitor and track the number of breaks an employee takes during office hours. This system allows managers to view the break patterns of each employee, helping to ensure breaks are taken at appropriate times without disrupting work. It enhances workflow management and employee productivity by providing clear insights into break times and enabling effective planning for task allocation and break schedules.",
      image: "/images/BreakPortal.jpg",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "React DnD"],
      githubUrl: "https://github.com/yourusername/task-management-app",
      liveUrl: "https://breakportal.marsbpo.team",
    },
    {
      id: 3,
      title: "Rajuh-el-Allah",
      description: "An Islamic app designed to provide various religious tools and resources such as Quran Pak, duas, and a Qibla direction finder.",
      longDescription:
        "Rajuh-el-Allah is an Islamic mobile app providing users with a collection of religious resources. Features include the Quran Pak, Durood Sharif, daily duas, a Qibla direction finder, Zakat calculator, and 99 names of Allah. The app also includes day-wise duas, weekly duas, and Islamic supplications like Istighasa. Developed to cater to the spiritual needs of Muslims, it helps them stay connected with their faith through an easy-to-use and comprehensive platform.",
      image: "/images/Islam.jpg",
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
      image: "/images/portfolio.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/portfolio-website",
      liveUrl: "https://yourportfolio.com",
    },
    {
      id: 5,
      title: "Data Scrubber - Mars BPO",
      description: " A data cleaning system utilizing the BLA API to differentiate between clean and bad numbers, with enhanced features to avoid re-scrubbing already processed numbers.",
      longDescription:
      "The Data Scrubber is a comprehensive tool that uses the BLA API to classify phone numbers into clean and bad categories. A key feature of this system is its ability to skip re-scrubbing numbers that have already been processed, fetching them directly from the database for efficiency. It also maintains a record of bad numbers to ensure that no further calls are made to them, preventing wasted resources and improving the overall call quality. This system is crucial for data accuracy and workflow optimization in call management.",
      image: "/images/DataScrubber.jpg",
      tags: ["React", "JavaScript", "Firebase", "Spoonacular API", "CSS3"],
      githubUrl: "https://github.com/yourusername/recipe-finder-app",
      liveUrl: "https://scrubber.marsbpo.team",
    },
    {
      id: 6,
      title: "Call Loom - Mars BPO",
      description: "A comprehensive inbound call tracking platform developed for Mars BPO, designed to monitor and optimize call campaigns, ensuring compliance and enhancing customer engagement.",
      longDescription:
      "Call Loom is an advanxced inbound call tracking system tailored for Mars BPO. The platform offers real-time analytics, enabling the monitoring of inbound calls to assess campaign performance and customer interactions. It integrates seamlessly with CRM systems, providing instant caller profiles and detailed call analytics. Key features include customizable Interactive Voice Response (IVR) systems, call recording, transcription services, and predictive analytics for forecasting call volumes. Additionally, Call Loom ensures compliance with industry standards by integrating with services like Jornaya for lead validation and DNC.com for Do Not Call compliance. This project provided hands-on experience in full-stack development, API integration, and campaign management, significantly enhancing technical skills and understanding of customer engagement in the telecommunications industry.​",      
      image: "/images/CallLoom.jpg",
      tags: ["React", "Django", "Socket.io", "Amazon", "Telnyx"],
      githubUrl: "https://github.com/yourusername/chat-application",
      liveUrl: "https://callloom.com",
    },
    {
      id: 7,
      title: "Call Loom - Mobile Version",
      description: "A comprehensive inbound call tracking platform developed for Mars BPO, designed to monitor and optimize call campaigns, ensuring compliance and enhancing customer engagement.",
      longDescription:
      "Call Loom is an advanced inbound call tracking system tailored for Mars BPO. The platform offers real-time analytics, enabling the monitoring of inbound calls to assess campaign performance and customer interactions. It integrates seamlessly with CRM systems, providing instant caller profiles and detailed call analytics. Key features include customizable Interactive Voice Response (IVR) systems, call recording, transcription services, and predictive analytics for forecasting call volumes. Additionally, Call Loom ensures compliance with industry standards by integrating with services like Jornaya for lead validation and DNC.com for Do Not Call compliance. This project provided hands-on experience in full-stack development, API integration, and campaign management, significantly enhancing technical skills and understanding of customer engagement in the telecommunications industry.​",      
      image: "/images/CallLoom.png",
      tags: ["React Native", "Django", "API Integrations", "Figma"],
      githubUrl: "https://github.com/yourusername/chat-application",
      liveUrl: "https://callloom.com",
    },
    {
      id: 8,
      title: "Task Pro - Mars BPO",
      description: "Taskpro is an easy-to-use web app for organizing tasks visually. You create boards with columns like “To Do,” “In Progress,” and “Done,” add cards for each task, and drag them between columns to track progress in real time.",
      longDescription: "TaskPro is a simple web-based app inspired by Trello that lets users organize tasks using boards, columns, and cards. I designed the interface in Figma and built the front end with React and Redux to manage state and enable smooth drag-and-drop interactions. On the backend, I implemented RESTful APIs with Vite+React and DJango, connecting to a PostgreSQL database for reliable data storage. To keep every user’s view in sync, I integrated Socket.io for real-time updates, and I secured the app with JWT-based authentication so only authorized users can access and modify their boards. I styled everything with Tailwind CSS to ensure a clean, responsive layout on both desktop and mobile devices. This project deepened my skills in full-stack development, real-time WebSocket communication, performance optimization under heavy interactions, and designing a polished, user-friendly interface.",
      image: "/images/Boardflow.png",
      tags: ["Vite + React", "Redux", "DJango", "Socket.io", "PostgreSQL", "Tailwind CSS", "Figma"],
      githubUrl: "https://github.com/yourusername/boardflow",
      liveUrl: "https://taskpro.marsbpo.co"
    }
    
    
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
