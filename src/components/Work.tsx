import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Castle Black',
    type: 'Password Manager | 2026',
    description: 'Developed a secure Flutter-based password manager with PIN/biometric authentication, password generation, vault management, credit card storage, multi-source password import, and Android AutoFill integration. Implemented a secure and user-friendly interface for managing digital credentials.',
    tech: ['Flutter', 'Dart', 'Android Kotlin', 'Secure Storage', 'Biometric Authentication'],
    github: 'https://github.com/oliahadchoyon/Castle-Black',
    live: '#',
  },
  {
    title: 'TeleDoc',
    type: 'Telemedicine Platform | 2024',
    description: 'Developed a web-based telemedicine platform designed to facilitate digital healthcare services and doctor-patient interactions. Implemented structured modules, routing, database integration, and doctor management features to support an organized, accessible healthcare system. ',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/oliahadchoyon/CSE_316_project_TeleDoc',
    live: '#',
  },
  {
    title: 'A Classical Pattern Recognition Framework with Explainable Artificial Intelligence (XAI) for Multi-Class Lung Cancer Classification Using Medical Images',
    type: 'Academic Project (Thesis) | 2026',
    description: 'Developed a hybrid deep learning framework combining EfficientNetV2-S and Vision Transformer (ViT-B/16) for multi-class lung CT image classification. Integrated feature fusion, dynamic ensemble learning, and Grad-CAM for explainable predictions, achieving 96.13% test accuracy and 0.9914 ROC-AUC across Benign, Malignant, and Normal classes.',
    tech: ["Python", 'TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'XGBoost', 'CatBoost', 'Flutter'],
    github: '#',
  },
  {
    title: 'Student Performance Prediction Using Machine Learning',
    type: 'Academic Project | 2025',
    description: 'Developed a machine learning-based system to predict student academic performance using lifestyle and academic-related factors. Applied data preprocessing, exploratory data analysis, and predictive modeling to identify patterns influencing student performance.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    github: '#',
  },
   {
    title: 'Spam SMS Detection Using Machine Learning',
    type: 'Academic Project | 2025',
    description: 'Developed a machine learning-based system to classify SMS messages as spam or legitimate (ham). Applied text preprocessing, feature extraction, and classification techniques to identify spam patterns and improve message detection.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NLTK', 'TF-IDF'],
    github: '#',
  },
  {
    title: 'UI/UX Case Studies',
    type: 'Design Portfolio',
    description: 'A collection of end-to-end design case studies — research, wireframes, prototypes, and final interfaces — exploring usability problems in everyday apps and redesigning them.',
    tech: ['Figma', 'Prototyping', 'User Research'],
    live: '#',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Selected Projects</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          PROJECTS
        </motion.h2>

        {/* Projects */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Type */}
                <div className="lg:col-span-5">
                  <p className="text-xs text-gray-600 tracking-widest uppercase mb-2">
                    {project.type}
                  </p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column - Description & Tech */}
                <div className="lg:col-span-7">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs text-gray-400 border border-gray-700 rounded-full hover:border-gray-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* GitHub CTA */}
        <motion.div
          {...fadeInUp}
          className="mt-12 lg:mt-16"
        >
          <a
            href="https://github.com/oliahadchoyon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gray-700 rounded-full px-6 py-3 text-sm text-gray-300 tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors"
          >
            More on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
