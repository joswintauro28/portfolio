import { Mail, Github, Download, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-2">05. Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, 
            a project idea, or just want to say hi — feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="glass-card p-8 mb-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:joswintauro2884@gmail.com"
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/30 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">joswintauro2884@gmail.com</p>
                </div>
              </a>

              <div className="hidden sm:block w-px h-12 bg-border" />

              <a
                href="https://github.com/joswintauro28"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/30 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Github size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-foreground font-medium">joswintauro28</p>
                </div>
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:joswintauro2884@gmail.com"
              className="btn-primary"
            >
              <Send size={18} />
              Send Message
            </a>
            <a
              href="#"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                alert('Add your resume PDF link here to enable download!');
              }}
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
