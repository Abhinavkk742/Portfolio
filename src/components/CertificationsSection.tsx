import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Figma for Designers',
    issuer: 'Figma',
    year: '2025',
    description: 'Comprehensive design certification covering UI/UX principles, prototyping, and design systems.',
  },
  {
    title: 'Linux Programming Foundation',
    issuer: 'Linux Foundation',
    year: '2018',
    description: 'Foundational certification in Linux system administration and programming.',
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Achievements</span>
          <h2 className="section-heading">
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-6 flex items-start gap-6 hover:glow-effect-sm transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[hsl(270,60%,55%)] flex items-center justify-center shrink-0">
                <Award size={28} className="text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <span className="text-sm text-primary font-medium">{cert.year}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>

              {/* Link */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shrink-0"
              >
                <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
