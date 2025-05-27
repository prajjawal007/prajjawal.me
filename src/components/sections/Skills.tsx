import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Skill = {
  name: string;
  level: number;
  color: string;
};

const frontendSkills: Skill[] = [
  { name: "React", level: 90, color: "blue" },
  { name: "JavaScript", level: 85, color: "yellow" },
  { name: "TypeScript", level: 80, color: "blue" },
  { name: "HTML/CSS", level: 90, color: "orange" },
  { name: "Tailwind CSS", level: 85, color: "sky" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: 85, color: "green" },
  { name: "Express", level: 80, color: "slate" },
  { name: "MongoDB", level: 75, color: "green" },
  { name: "SQL", level: 70, color: "blue" },
];

const otherSkills: Skill[] = [
  { name: "Git/GitHub", level: 85, color: "slate" },
  { name: "Docker", level: 70, color: "blue" },
  { name: "AWS", level: 65, color: "orange" },
  { name: "Testing", level: 75, color: "red" },
  { name: "UI/UX Design", level: 80, color: "purple" },
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClass = (color: string) => {
    const baseClasses = "h-full rounded-r-lg";
    const colorMap: Record<string, string> = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      red: "bg-red-500",
      yellow: "bg-yellow-500",
      orange: "bg-orange-500",
      purple: "bg-purple-500",
      pink: "bg-pink-500",
      slate: "bg-slate-600",
      sky: "bg-sky-500",
    };
    
    return `${baseClasses} ${colorMap[color] || 'bg-blue-500'}`;
  };

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden">
        <motion.div 
          className={getColorClass(skill.color)}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="card h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-6 text-blue-500">{title}</h3>
      <div>
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at center right, rgba(14, 165, 233, 0.1), transparent 40%)",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I've worked with a variety of technologies and tools throughout my career.
            Here's an overview of my technical expertise.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Other Skills" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;