import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Layers, Brain, LayoutDashboard, Palette, Plug } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Full Stack Web Development',
    description: 'End-to-end web application development with modern technologies and best practices.',
  },
  {
    icon: Layers,
    title: 'MERN Stack Applications',
    description: 'Scalable applications using MongoDB, Express.js, React, and Node.js.',
  },
  {
    icon: Brain,
    title: 'AI Integration in Web Apps',
    description: 'Implementing machine learning and AI capabilities into web applications.',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard Systems',
    description: 'Custom admin panels with analytics, user management, and data visualization.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design with Figma',
    description: 'Creating intuitive and beautiful user interfaces with modern design principles.',
  },
  {
    icon: Plug,
    title: 'API Development & Deployment',
    description: 'RESTful API design, development, and cloud deployment with documentation.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">What I Offer</span>
          <h2 className="section-heading">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Professional services tailored to bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-[hsl(270,60%,55%)]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:from-primary group-hover:to-[hsl(270,60%,55%)] transition-all duration-300">
                <service.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
