import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-100 dark:bg-slate-800/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-blue-500">
              Prajjawal Agrawal
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Full-Stack Developer & Software Engineer
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a 
              href="mailto:contact@example.com"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
          <p>© {currentYear} Prajjawal Agrawal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;