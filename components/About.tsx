export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-espresso-300 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-beige-100 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-amber mx-auto shadow-amber-glow"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">
              Who I Am
            </h3>
            <p className="text-beige-200 mb-4 leading-relaxed">
              I&apos;m a passionate developer with a love for creating elegant
              solutions to complex problems. With expertise in modern web
              technologies, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-beige-200 mb-4 leading-relaxed">
              My journey in software development has been driven by curiosity and
              a commitment to continuous learning. I enjoy working on projects
              that challenge me and allow me to grow both technically and
              creatively.
            </p>
            <p className="text-beige-200 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-brown-900/40 backdrop-blur-sm border border-amber-800/30 rounded-lg shadow-lg hover:shadow-warm-glow transition-all duration-300">
              <h4 className="text-lg font-semibold text-amber-400 mb-2">
                Education
              </h4>
              <p className="text-beige-200">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-sm text-beige-400">
                Bulacan State University
              </p>
            </div>
            <div className="p-6 bg-brown-900/40 backdrop-blur-sm border border-amber-800/30 rounded-lg shadow-lg hover:shadow-warm-glow transition-all duration-300">
              <h4 className="text-lg font-semibold text-amber-400 mb-2">
                Location
              </h4>
              <p className="text-beige-200">
                Bulacan City, Philippines
              </p>
            </div>
            <div className="p-6 bg-brown-900/40 backdrop-blur-sm border border-amber-800/30 rounded-lg shadow-lg hover:shadow-warm-glow transition-all duration-300">
              <h4 className="text-lg font-semibold text-amber-400 mb-2">
                Interests
              </h4>
              <p className="text-beige-200">
                Web Development, UI/UX Design, Open Source, Tech Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

