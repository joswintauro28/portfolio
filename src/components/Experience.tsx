import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Technical Support Engineer',
    company: 'UnifyCX',
    period: 'May 2025 – Present',
    type: 'Full-time',
    description: [
      'Supported hosting and server-related issues for customer websites',
      'Managed WordPress files, plugins, themes, and MySQL databases',
      'Performed basic Linux server operations using SSH',
      'Resolved website, database, and server performance issues',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Prodigy Infotech',
    period: 'Nov 2024 – Dec 2024',
    type: 'Internship',
    description: [
      'Built and maintained web pages using HTML, CSS, JavaScript',
      'Assisted with backend development using PHP and MySQL',
      'Gained hands-on experience with full-stack web development',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">03. Experience</p>
          <h2 className="section-title">Work History</h2>
          <p className="section-subtitle mx-auto">
            Professional experience in web development and technical support roles.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.title + exp.company} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[5px] top-3 bottom-0 w-0.5 bg-border" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 timeline-dot" />

              {/* Content Card */}
              <div className="glass-card p-6 ml-4">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
