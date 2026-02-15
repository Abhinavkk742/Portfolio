import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [state, handleSubmit] = useForm("mqedqwbd");

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      value: "abhinavkk742@gmail.com",
      link: "mailto:abhinavkk742@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      value: "Bangalore, India",
      link: null
    },
    // Add Phone if you wish, or remove this block
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Social",
      value: "LinkedIn Profile",
      link: "https://linkedin.com/in/abhinavkk742"
    }
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Contact</span>
          <h2 className="section-heading">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 h-full">
              <h3 className="text-2xl font-bold mb-6">Let's talk about everything!</h3>
              <p className="text-muted-foreground mb-8">
                Don't like forms? Send me an email directly. I usually respond within 24 hours.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                          target={info.link.startsWith('http') ? "_blank" : undefined}
                          rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              {state.succeeded ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50"
                        placeholder="John Doe"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50"
                        placeholder="john@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50"
                      placeholder="Project Inquiry"
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none placeholder:text-muted-foreground/50"
                      placeholder="Tell me about your project..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;