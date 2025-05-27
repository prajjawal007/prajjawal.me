  import { useRef } from 'react';
  import { motion, useInView } from 'framer-motion';
  import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "DormEase",
    description: "A student housing platform that helps users find PGs and flats near colleges with contact and rent details. Features include real-time chat and responsive UI for seamless communication.",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // dorm room setup
    tags: ["React.js", "Node.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
    github: "https://github.com/prajjawal007/DormEase",
    live: "https://dormease.onrender.com",
  },
  {
    title: "DataCove",
    description: "A secure file storage web application offering file upload with advanced integrity checks and robust security. Deployed with 99.95% uptime and supports 50+ active users.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // file handling / document uploads
    tags: ["Express.js", "MongoDB", "Tailwind CSS", "Render"],
    github: "https://github.com/prajjawal007/DataCove",
    live: "https://datacove.onrender.com/user/register",
  },
  {
    title: "ChatsApp",
    description: "A real-time chat application with JWT authentication for secure messaging, built using React, Node.js, and Socket.IO. Enables seamless communication with real-time updates.",
    image: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // chatting on screen
    tags: ["React.js", "Node.js", "Socket.IO", "JWT", "MongoDB"],
    github: "https://github.com/prajjawal007/ChatsApp",
    live: "https://chatsapp-4coj.onrender.com",
  },
];





  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div 
        ref={ref}
        className="card overflow-hidden group"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="overflow-hidden rounded-lg mb-4 h-48">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
          >
            <Github size={16} />
            Source
          </a>
          
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </motion.div>
    );
  };

  const Projects = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <section id="projects" className="py-20 md:py-32 bg-slate-100/50 dark:bg-slate-800/20">
        <div className="container-custom">
          <motion.div 
            ref={ref}
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Here are some of my recent projects that showcase my skills and experience
              in building modern web applications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View All Projects
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    );
  };

  export default Projects;