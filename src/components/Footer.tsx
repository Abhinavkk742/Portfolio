import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import logo from '@/assets/kk_logo.svg';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-8 w-auto" 
            />
            <span className="text-muted-foreground">
              © {new Date().getFullYear()} Abhinav KK. All rights reserved.
            </span>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            Made with <Heart size={14} className="text-destructive fill-destructive" /> in Bangalore
          </div>

          {/* Social Links */}
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
      </div>
    </footer>
  );
};

export default Footer;