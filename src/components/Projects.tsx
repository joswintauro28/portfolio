import { ExternalLink, Github, Globe, Terminal, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: 'Beauty Parlour Website',
    description: 'A complete full-stack beauty parlour website with admin panel, user authentication, service management, and Google Maps integration.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    icon: Globe,
    highlights: [
      'Admin panel for managing services and gallery',
      'User login and authentication system',
      'Dynamic service management',
      'Google Maps location integration',
    ],
  },
  {
    title: 'Second-Hand Car Marketplace',
    description: 'A web-based marketplace for buying and selling pre-owned vehicles with structured data handling and intuitive user interface.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    icon: ShoppingCart,
    highlights: [
      'Structured data handling for listings',
      'User-friendly interface design',
      'Search and filter functionality',
      'Responsive layout',
    ],
  },
  {
    title: 'Cricket Game (Python)',
    description: 'An interactive command-line cricket simulation game with comprehensive score tracking, player turns, and win/loss logic.',
    technologies: ['Python'],
    icon: Terminal,
    highlights: [
      'Score tracking system',
      'Player turn management',
      'Win/loss game logic',
      'Interactive CLI interface',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">04. Projects</p>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle mx-auto">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card group flex flex-col h-full"
            >
              {/* Icon */}
              <div className="icon-box mb-4">
                <project.icon size={24} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/joswintauro28"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
