import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

import projectTimber from '@/assets/project-timber.jpg';
import projectEmotion from '@/assets/project-emotion.jpg';
import projectVoice from '@/assets/project-voice.jpg';

const projects = [
  {
    title: 'Kalyani Timber – E-Commerce Platform',
    description: 'Full-stack MERN application for timber retail with comprehensive admin dashboard for product and order management.',
    image: projectTimber,
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    features: [
      'Admin dashboard for product and order management',
      'Multi-location inventory system (KTM & KD warehouses)',
      'Secure JWT authentication',
      'Dynamic filtering and cart using React Context API',
    ],
    category: 'Full Stack',
    github: 'https://github.com/suja-l/KalyaniTimber',
    demo: '#', // Button will be hidden automatically until you replace this with a real URL
  },
  {
    title: 'Emotion-Driven Web Player',
    description: 'Innovative web player using computer vision for real-time emotion detection and auto song selection.',
    image: projectEmotion,
    tags: ['React', 'OpenCV', 'Node.js', 'YouTube API', 'TensorFlow'],
    features: [
      'Real-time emotion detection using computer vision',
      'Auto song selection using YouTube API',
      'Node.js backend for real-time processing',
      'Reduced UI latency by 30%',
    ],
    category: 'AI/ML',
    github: 'https://github.com/Abhinavkk742/Emotion_based_music_recommendation_system',
    demo: '#',
  },
  {
    title: 'Voice-to-Image SaaS Tool',
    description: 'Converts voice prompts into stunning digital art using advanced AI and generative models.',
    image: projectVoice,
    tags: ['Python', 'Faster Whisper', 'Generative AI', 'Docker', 'Azure'],
    features: [
      'Voice prompt to digital art conversion',
      'Built using Faster Whisper and Generative AI APIs',
      'Docker deployment on Azure for scalability',
      'Real-time processing pipeline',
    ],
    category: 'AI/ML',
    github: 'https://github.com/Abhinavkk742/Real-Time-Voice-To-Image-Converter',
    demo: '#',
  },
];

const categories = ['All', 'Full Stack', 'AI/ML'];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">My Work</span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            A showcase of scalable applications, AI integrations, and creative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-[hsl(270,60%,55%)] text-primary-foreground'
                  : 'bg-secondary/50 text-muted-foreground hover:text-foreground border border-border/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="project-card group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  {/* Only render the demo button if a valid link exists */}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {project.features.slice(0, 2).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight size={14} className="text-primary shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;