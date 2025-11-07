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
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSockets'],
      image: '📋',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for social media metrics with data visualization, reporting, and insights.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      image: '📊',
    },
    {
      title: 'Weather Forecast App',
      description:
        'Real-time weather forecasting application with location-based services and interactive maps.',
      technologies: ['Next.js', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
      image: '🌤️',
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-brown-900/40 backdrop-blur-sm border border-amber-800/30 rounded-lg shadow-lg overflow-hidden hover:shadow-gold-glow transition-all duration-300"
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
          ))}
        </div>
      </div>
    </section>
  )
}

