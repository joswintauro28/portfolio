import { Code, Server, Database, Terminal } from 'lucide-react';

const highlights = [
  { icon: Code, label: 'Web Development', description: 'Full-stack applications' },
  { icon: Server, label: 'Technical Support', description: 'Hosting & servers' },
  { icon: Database, label: 'Database Management', description: 'MySQL & optimization' },
  { icon: Terminal, label: 'Linux & SSH', description: 'Server operations' },
];

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-mono text-sm mb-2">01. About Me</p>
            <h2 className="section-title">
              Building Digital Solutions
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a motivated <span className="text-foreground font-medium">Computer Applications (BCA) graduate</span> with 
                hands-on experience in web development and technical support. I enjoy building clean, responsive 
                websites and solving real-world problems related to hosting, WordPress, databases, and Linux servers.
              </p>
              <p>
                With experience at <span className="text-primary font-medium">UnifyCX</span> as a Technical Support Engineer, 
                I've developed strong skills in troubleshooting website downtime, database issues, and server 
                performance problems using SSH and various hosting platforms.
              </p>
              <p>
                I'm passionate about creating efficient, user-friendly web applications and continuously 
                expanding my technical expertise to deliver better solutions.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group glass-card p-6 transition-all duration-300 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-box mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-foreground font-semibold mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
