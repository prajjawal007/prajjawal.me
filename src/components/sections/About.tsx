import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Coffee, Briefcase, GraduationCap } from "lucide-react";

const TimelineItem = ({
  year,
  title,
  description,
  icon: Icon,
}: {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-4 md:gap-6"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500">
          <Icon size={20} />
        </div>
        <div className="flex-grow w-0.5 bg-blue-200 dark:bg-blue-800 mt-2"></div>
      </div>

      <div className="pb-8">
        <span className="text-sm font-medium text-blue-500">{year}</span>
        <h3 className="text-lg md:text-xl font-semibold mt-1">{title}</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.1), transparent 30%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="container-custom">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I'm a passionate software engineer with a focus on creating elegant,
            efficient solutions to complex problems. With expertise in both
            frontend and backend technologies, I strive to build applications
            that are not only functional but also provide exceptional user
            experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-1">
              <TimelineItem
                year="2023 - Present"
                title="Software Developer Intern"
                description="Currently working as a Software Developer Intern at Faralpha Technology, contributing to real-world projects and enhancing development skills."
                icon={Briefcase}
              />

              <TimelineItem
                year="2023 - Present"
                title="Master's in Computer Science"
                description="Pursuing a Master's degree in Computer Science, continuing my focus on software development and advanced computing topics."
                icon={GraduationCap}
              />

              <TimelineItem
                year="2020 - 20123"
                title="Computer Science Degree"
                description="Graduated with a Bachelor's degree in Computer Science, specializing in software development."
                icon={GraduationCap}
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">What I Do</h3>

            <div className="space-y-8">
              <motion.div
                className="card hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="font-bold text-xl mb-2">Frontend Development</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Creating responsive, intuitive user interfaces using modern
                  frameworks like React, with a focus on performance and
                  accessibility.
                </p>
              </motion.div>

              <motion.div
                className="card hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="font-bold text-xl mb-2">Backend Development</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Building robust APIs and server-side applications with
                  Node.js, Express, and various databases to power web
                  applications.
                </p>
              </motion.div>

              <motion.div
                className="card hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h4 className="font-bold text-xl mb-2">Devops Solutions</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Automating development workflows, managing CI/CD pipelines,
                  and deploying scalable applications using tools like Docker,
                  Kubernetes, and cloud platforms to ensure reliability,
                  performance, and seamless delivery.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
