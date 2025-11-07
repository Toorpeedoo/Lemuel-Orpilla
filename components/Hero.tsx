import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Hi, I&apos;m{' '}
              <span className="text-primary-600 dark:text-primary-400">
                Lemuel Orpilla
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8">
              Full Stack Developer | Problem Solver | Creative Thinker
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 md:mb-12">
              I build beautiful, functional, and user-friendly web applications that
              make a difference. Passionate about clean code and innovative
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-700 active:bg-primary-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 active:bg-primary-100 dark:active:bg-primary-900/30 transition-colors touch-manipulation"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <Image
                src="/profile.png"
                alt="Lemuel Orpilla"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

