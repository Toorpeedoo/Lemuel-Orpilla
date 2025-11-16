export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
    },
    {
      title: 'Learning Management System',
      description:
        'Platform for online courses with video streaming, progress tracking, and certification.',
      technologies: ['React', 'Node.js', 'AWS S3', 'MongoDB'],
      image: '🎓',
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio website showcasing projects, skills, and experience with modern design.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      image: '💼',
    },
    {
      title: 'Vento Inventory System',
      description:
        'Comprehensive inventory management system with real-time tracking, reporting, and automated stock control.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
      image: '📦',
      url: 'https://vento-system.vercel.app/',
    },
    {
      title: 'Food Generator Website',
      description:
        'Interactive meal planning and recipe generator that creates personalized meal suggestions based on preferences and dietary requirements.',
      technologies: ['React', 'Next.js', 'API Integration', 'Tailwind CSS'],
      image: '🍽️',
    },
    {
      title: 'FiveM (GTA) Projects',
      description:
        'Custom multiplayer scripts and resources for FiveM servers, including custom systems, UI elements, and gameplay enhancements.',
      technologies: ['Lua', 'JavaScript', 'FiveM', 'MySQL'],
      image: '🎮',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-espresso-200 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brown-900/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-beige-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-amber mx-auto shadow-amber-glow"></div>
          <p className="text-beige-300 mt-6 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and expertise
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const CardContent = () => (
              <div
                className={`bg-brown-900/40 backdrop-blur-sm border border-amber-800/30 rounded-lg shadow-lg overflow-hidden hover:shadow-gold-glow transition-all duration-300 ${
                  project.url ? 'cursor-pointer' : ''
                }`}
              >
                <div className="p-8 text-6xl text-center bg-gradient-amber/20">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-beige-200 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-amber-900/40 text-amber-300 border border-amber-700/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )

            return project.url ? (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CardContent />
              </a>
            ) : (
              <div key={index}>
                <CardContent />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

