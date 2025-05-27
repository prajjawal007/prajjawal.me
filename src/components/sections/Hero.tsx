import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(59, 130, 246, 0.2), transparent 40%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="container-custom flex flex-col gap-8 md:gap-12"
        style={{ y, opacity }}
      >
        <div className="flex flex-col gap-2">
          <motion.p
            className="text-lg md:text-xl text-blue-500 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello! I'm
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="group inline">
              <span className="group-hover:text-blue-500">Prajjawal </span>
              <span className="text-blue-500 group-hover:text-yellow-500">
                Agrawal
              </span>
            </div>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-yellow-500 group-hover:text-yellow-500 pl-3">
                 Full Stack Developer
              </span>
          </motion.h2>
        </div>

        <motion.p
          className="max-w-xl text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed ">
            Building elegant solutions to complex problems with modern
            technologies. I specialize in creating responsive, user-friendly
            applications with clean, maintainable code.
          </p>
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>

          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="https://github.com/prajjawal007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/prajjawal-agrawal-925447289/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:prayank2742@gmail.com"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <ArrowDown size={24} className="text-blue-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
