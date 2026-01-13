import { ArrowDown, Github, Mail, FileText } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="section-container relative z-10 text-center">
        {/* Profile Photo Placeholder */}
        <div className="mb-8 opacity-0 animate-fade-up">
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/50 overflow-hidden shadow-[var(--glow-primary)]">
            <img 
              src={profileImage} 
              alt="Joswin Tauro" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <div className="opacity-0 animate-fade-up stagger-1">
          <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Joswin Tauro
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            <span className="text-gradient font-semibold">Web Developer</span>
            <span className="mx-3 text-border">|</span>
            <span>Technical Support Engineer</span>
          </p>
        </div>

        {/* Description */}
        <p className="opacity-0 animate-fade-up stagger-2 max-w-2xl mx-auto text-muted-foreground mt-6 mb-10 text-base md:text-lg leading-relaxed">
          BCA graduate passionate about building responsive websites and solving real-world 
          technical challenges in hosting, WordPress, and Linux servers.
        </p>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-up stagger-3 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="btn-primary">
            <FileText size={18} />
            View Projects
          </a>
          <a 
            href="https://github.com/joswintauro28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={18} />
            GitHub
          </a>
          <a href="#contact" className="btn-outline">
            <Mail size={18} />
            Contact
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
