export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate developer with a love for creating elegant
              solutions to complex problems. With expertise in modern web
              technologies, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              My journey in software development has been driven by curiosity and
              a commitment to continuous learning. I enjoy working on projects
              that challenge me and allow me to grow both technically and
              creatively.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-primary-50 dark:bg-gray-700 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                Education
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Bachelor's Degree in Computer Science
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                University Name, Year
              </p>
            </div>
            <div className="p-6 bg-primary-50 dark:bg-gray-700 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                Location
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Available for remote work worldwide
              </p>
            </div>
            <div className="p-6 bg-primary-50 dark:bg-gray-700 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                Interests
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Web Development, UI/UX Design, Open Source, Tech Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

