import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const projects = [
  {
    id: 1,
    title: "Banco De Cramo",
    image: "/banco.png",
    description:
      "Developed banking-related applications for academic purposes to manage customer accounts and transactions.Implemented core Java functionalities to improve system reliability and data management.",
    tech: ["Java", "JavaDB"],
  },
  {
    id: 2,
    title: "Probare",
    image: "/probare.png",
    description:
      "Designed and developed a school-based web and mobile platform for teachers to create quizzes for students.Enabled real-time grading and results reporting for improved learning feedback.Ensured responsive design and functionality across web and mobile devices.Responsive e-commerce interface with product filtering, cart system, and smooth UI interactions.",
    tech: ["HTML", "CSS", "JavaScript", "Android Studio Java", "Firebase"],
  },
  {
    id: 3,
    title: "JAHS Telecon Employee Web-Portal and Deployment Application",
    image: "/jahs.png",
    description:
      "Developed a private web and mobile application for JAHS Telecon to manage employees, team leaders, and admin operations.Implemented real-time tracking of salaries, inventories, attendance, and deployment locations using a map feature.     Ensured seamless user interface and experience for multiple roles within the application.",
    tech: ["Captone Project","HTML", "CSS", "JavaScript", "Android Studio Java", "Firebase"],
  },
  {
    id: 4,
    title: "BulSU PMES",
    image: "/pmes.png",
    description:
      "A system to assess and improve the performance of individual offices and departments within an organization. Developed a web application for the Performance Management and Evaluation System (PMES) to track and evaluate the performance of various offices and departments within an organization of Bulacan State University.",
    tech: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
  },
  {
    id: 5,
    title: "BulSU PIPS 2.0",
    image: "/pips.png",
    description:
      "PDO Investment Programming System. A centralized platform for planning and investment programming.",
    tech: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Tailwind CSS"],
  },
    {
    id: 6,
    title: "Portfolio Website",
    image: "/portfolio.png",
    description:
      "A personal portfolio website to showcase my skills, projects, and experience as a front-end developer. Built with React and Tailwind CSS, featuring a modern design and smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section className="pt-28 pb-20 px-6 md:px-12 lg:px-24 min-h-screen">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white">
          Projects
        </h1>

        {/* Custom Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer bg-white dark:bg-gray-800
                ${index < 3 ? "lg:col-span-2" : "lg:col-span-2 lg:col-start-" + (index === 3 ? "2" : "4")}
              `}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                  
                  {/* Title inside hover */}
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-primary text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Title below image (always visible) */}
              <div className="p-6">
                <h3 className="text-l font-semibold text-black dark:text-white text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </AnimatedSection>
    </section>
  );
}