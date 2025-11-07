export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mx-auto flex items-center justify-center text-5xl font-bold text-white shadow-xl">
              LO
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm{' '}
          <span className="text-primary-600 dark:text-primary-400">
            Lemuel Orpilla
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Full Stack Developer | Problem Solver | Creative Thinker
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          I build beautiful, functional, and user-friendly web applications that
          make a difference. Passionate about clean code and innovative
          solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}

