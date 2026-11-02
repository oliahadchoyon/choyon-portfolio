import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {/* BSc CSE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="/education-cs.jpg"
                alt="Computer Science studies"
                className="w-full h-auto grayscale"
                loading="lazy"
                width={1200}
                height={800}
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                DHAKA / BANGLADESH
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  B.Sc. in Computer Science & Engineering <br></br>
                  DAFFODIL INTERNATIONAL UNIVERSITY 
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Four years of algorithms, data structures, databases,
                  operating systems, and software engineering — capped with
                  a full-stack capstone project. This degree gave me the
                  engineering fundamentals I use every day, and it's where
                  my passion for building interfaces began.
                </p>
                <p className="text-sm text-gray-500 tracking-widest uppercase">
                  Completed 2026 — Open for opportunities
                </p>
              </div>
            </motion.div>
          </div>

          {/* UI/UX */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  UI/UX Design — Focused Self-Study
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Alongside my degree, I've pursued design through online
                  courses, hands-on Figma practice, and redesign case
                  studies. I study design systems, accessibility, and
                  interaction patterns — because good engineering without
                  good design is only half a product.
                </p>
                <p className="text-sm text-gray-500 tracking-widest uppercase">
                  Ongoing — Always learning
                </p>
              </div>

            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Design sketches and notes"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                DESIGN SYSTEMS & PROTOTYPING
              </p>
            </motion.div>
          </div>

          {/* CERTIFICATES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Foundations of Prompt Engineering | AWS Skill Builder (Amazon Web Services)
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Learned prompt engineering principles, zero-shot and few-shot prompting, advanced prompting techniques, and strategies for mitigating bias and preventing prompt misuse in foundation models.

                </p>
                <p className="text-sm text-gray-500 tracking-widest uppercase">
                  October 2026
                </p>
              </div>
              
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1763568258338-94886e7533ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Design sketches and notes"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                FOUNDATIONS OF PROMPT ENGINEERING
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  GenAI Powered Data Analytics | Tata iQ : Forage
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Completed the Tata Group Data Analytics Job Simulation on Forage, conducting exploratory data analysis (EDA) using GenAI tools, developing a no-code predictive modeling framework for customer delinquency risk assessment, and proposing an AI-driven collections strategy incorporating agentic AI, ethical AI, and regulatory compliance.

                </p>
                <p className="text-sm text-gray-500 tracking-widest uppercase">
                  October 2026
                </p>
              </div>
              
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                GENAI POWERED DATA ANALYTICS
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Introduction to Model Context Protocol (MCP) — Completion Badge | Claude Academy, Anthropic
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Learned MCP architecture and Python-based server/client development using tools, resources, and prompts.


                </p>
                <p className="text-sm text-gray-500 tracking-widest uppercase">
                   2026
                </p>
              </div>
              
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1664526936810-ec0856d31b92?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Design sketches and notes"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                INTRODUCTION TO MODEL CONTEXT PROTOCOL (MCP) 
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Basics of UI UX Strategy | UniAthena in partnership with Cambridge International Qualifications, UK
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Gained foundational knowledge of UI/UX strategy, user-centered design principles, and effective digital product planning.

                </p>
                <p className="text-sm text-gray-500 tracking-widest uppercase">
                   2026
                </p>
              </div>
              
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Design sketches and notes"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                BASICS OF UI UX STRATEGY
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
