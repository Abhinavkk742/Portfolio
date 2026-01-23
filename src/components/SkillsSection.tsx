import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layout, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages & Databases',
    skills: ['JavaScript (ES6+)', 'Python', 'SQL', 'MongoDB', 'HTML5', 'CSS3'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Layout,
    title: 'Frontend',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'Context API', 'Hooks', 'Figma'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Flask'],
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Wrench,
    title: 'Tools & AI',
    skills: ['Docker', 'Git', 'Azure', 'Jenkins', 'OpenCV', 'TensorFlow', 'Faster Whisper'],
    color: 'from-violet-500 to-purple-500',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">My Expertise</span>
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            A comprehensive toolkit for building modern, scalable applications from concept to deployment.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-card group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={28} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary/50 rounded-full text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card p-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            {['React', 'Node.js', 'MongoDB', 'Python', 'Docker', 'Azure', 'TensorFlow'].map((tech) => (
              <span key={tech} className="text-lg font-medium hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
