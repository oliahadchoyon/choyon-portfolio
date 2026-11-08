import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative h-screen h-[100dvh] w-full overflow-hidden">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-image.jpg"
          alt="Developer workspace at night"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-none tracking-[0.02em] text-[10vw] sm:text-[8vw] md:text-7xl">
              <span className="block text-white">OLI AHAD</span>
              <span className="block text-white">CHOYON</span>
              <span className="block text-[4vw] sm:text-[2vw] md:text-2xl text-white/50">AI/ML, Data Analytics, UI/UX Designer</span>
            </h1>

            {/* Open to work badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 inline-flex items-center gap-3 border border-white/25 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span className="text-xs sm:text-sm text-white tracking-widest uppercase">
                Open for work & new opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-sm md:max-w-md leading-relaxed"
            >
              Aspiring AI Engineer with a Computer Science background and a strong interest in Artificial Intelligence and Machine Learning. Skilled in Python, data analysis, and predictive modeling, with foundational knowledge of machine learning techniques and modern AI technologies. Experienced in academic and practical projects involving technology-driven problem-solving, with a strong eagerness to develop intelligent solutions and contribute to real-world AI applications.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
