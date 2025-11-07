import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-warm relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-brown-900/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-beige-100 mb-4 sm:mb-6 leading-tight">
              Hi, I&apos;m<br />
              <span className="text-transparent bg-clip-text bg-gradient-amber drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                Lemuel Orpilla
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gold-300 mb-4 sm:mb-6 md:mb-8 font-medium">
              Full Stack Developer | Problem Solver | Creative Thinker
            </p>
            <p className="text-sm sm:text-base md:text-lg text-beige-300 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
              I build beautiful, functional, and user-friendly web applications that
              make a difference. Passionate about clean code and innovative
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-amber text-espresso-900 rounded-lg text-sm sm:text-base font-semibold hover:shadow-gold-glow transition-all duration-300 shadow-warm-glow transform hover:-translate-y-1 touch-manipulation"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-amber-400 border-2 border-amber-500 rounded-lg text-sm sm:text-base font-semibold hover:bg-amber-500/10 hover:shadow-amber-glow active:bg-amber-500/20 transition-all duration-300 touch-manipulation"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0">
            <div className="relative inline-block max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px]">
              <div className="absolute inset-0 bg-gradient-amber opacity-20 blur-3xl rounded-lg"></div>
              <Image
                src="/profile.png"
                alt="Lemuel Orpilla"
                width={600}
                height={800}
                className="w-full h-auto rounded-none shadow-2xl border-4 border-amber-800/50 ring-2 ring-amber-600/30 relative z-10"
                style={{ borderRadius: 0 }}
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

