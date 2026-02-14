import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[hsl(142,76%,36%)] animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Abhinav KK</span>
              <br />
              <span className="gradient-text text-glow">Full Stack Developer</span>
              <br />
              <span className="text-foreground">&amp; AI Engineer</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Final-year CSE student and Full Stack Developer specialized in MERN and AI integration. 
              Experienced in building scalable business platforms, intelligent interfaces, and cloud-deployed applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View Portfolio
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/abhinavkk742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/abhinavkk742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:abhinavkk742@gmail.com"
                  className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-[hsl(270,60%,55%)]/30 rounded-full blur-3xl scale-110" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 glow-effect animate-float">
                <img
                  src={profileImage}
                  alt="Abhinav KK"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2"
              >
                <span className="text-sm font-medium">🚀 MERN Stack</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2"
              >
                <span className="text-sm font-medium">🤖 AI Integration</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
