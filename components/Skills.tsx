export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 72 },
        { name: 'Next.js', level: 68 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 79 },
        { name: 'JavaScript', level: 73 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 71 },
        { name: 'Python', level: 66 },
        { name: 'PostgreSQL', level: 64 },
        { name: 'MongoDB', level: 68 },
        { name: 'REST APIs', level: 77 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Docker', level: 63 },
        { name: 'AWS', level: 61 },
        { name: 'CI/CD', level: 70 },
        { name: 'Agile', level: 76 },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-espresso-200 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brown-900/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-beige-100 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-amber mx-auto shadow-amber-glow"></div>
          <p className="text-beige-300 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-brown-900/40 backdrop-blur-sm border border-amber-800/30 p-6 rounded-lg shadow-lg hover:shadow-warm-glow transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-amber-400 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-beige-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-amber-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-brown-800/50 rounded-full h-2">
                      <div
                        className="bg-gradient-amber h-2 rounded-full transition-all duration-500 shadow-amber-glow"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

