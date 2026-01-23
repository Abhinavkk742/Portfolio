import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Sparkles, MapPin } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: 'Full Stack Developer', value: 'MERN Specialist' },
    { icon: Sparkles, label: 'AI Integration', value: 'ML & Computer Vision' },
    { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE (2022-2026)' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium mb-4 block">About Me</span>
            <h2 className="section-heading">
              Building Digital
              <br />
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm Abhinav KK, a Full Stack Developer specializing in MERN and AI-driven systems. 
              I build scalable web applications with secure admin suites, real-time inventory systems, 
              and emotion-aware interfaces.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Passionate about clean architecture, performance optimization, and user-centered design. 
              I thrive on transforming complex problems into elegant, efficient solutions that make a real impact.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 glow-effect-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[hsl(270,60%,55%)] flex items-center justify-center">
                  <GraduationCap size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h4 className="text-lg font-semibold">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-primary font-medium">Dayananda Sagar University, Bangalore</p>
                  <p className="text-muted-foreground text-sm mt-1">2022 – 2026</p>
                  <p className="text-muted-foreground mt-3">
                    Focus on Full Stack Web Development, Cloud Computing, and Software Engineering.
                    Active participation in hackathons and tech communities.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-border">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-primary" />
                  <h4 className="text-lg font-semibold">Higher Secondary Education</h4>
                  <p className="text-muted-foreground text-sm mt-1">Science Stream with Computer Science</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">3+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">2+</p>
                  <p className="text-sm text-muted-foreground">Years Exp</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">10+</p>
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
