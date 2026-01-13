const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    skills: ['PHP', 'MySQL', 'Python', 'Java'],
  },
  {
    title: 'CMS & Tools',
    skills: ['WordPress', 'GitHub', 'SQL'],
  },
  {
    title: 'DevOps & Systems',
    skills: ['Linux', 'SSH', 'Networking'],
  },
];

const networkingSkills = ['IP Addressing', 'Subnetting', 'IPv4/IPv6'];

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">02. Skills</p>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle mx-auto">
            A diverse skill set spanning web development, server management, and database administration.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="glass-card p-6">
              <h3 className="text-foreground font-semibold mb-4 pb-2 border-b border-border/50">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{ animationDelay: `${(catIndex * 3 + index) * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Networking Skills */}
        <div className="glass-card p-6 max-w-2xl mx-auto">
          <h3 className="text-foreground font-semibold mb-4 text-center">
            Networking Fundamentals
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {networkingSkills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
