export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: [
        'Led development of scalable web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality products',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client-facing applications',
        'Implemented responsive designs and improved user experience',
        'Built RESTful APIs and integrated third-party services',
        'Participated in agile development processes',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: [
        'Created interactive web applications using modern JavaScript frameworks',
        'Worked on various client projects from concept to deployment',
        'Learned best practices in software development',
        'Contributed to team knowledge sharing sessions',
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-espresso-300 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-beige-100 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-amber mx-auto shadow-amber-glow"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-4 border-amber-600"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-amber rounded-full shadow-amber-glow"></div>
              <div className="bg-brown-900/40 backdrop-blur-sm border border-amber-800/30 p-6 rounded-lg ml-4 shadow-lg hover:shadow-warm-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-amber-400">
                      {exp.title}
                    </h3>
                    <p className="text-gold-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-beige-400 text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-beige-200">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

