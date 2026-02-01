'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    category: 'Самооценка и самореализация',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: [
      '«Кто я без достижений?»',
      'Сравнение себя с другими',
      'Прокрастинация',
      'Страх перемен и успеха',
    ]
  },
  {
    category: 'Отношения',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    items: [
      'Повторяющиеся сценарии',
      'Границы и привязанность',
      'Одиночество',
      'Измены, развод',
      'Хронические конфликты',
    ]
  },
  {
    category: 'Повседневные трудности',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: [
      'Нелюбимая работа',
      'Навязчивые мысли',
      'Депрессивные состояния',
      'Сложности в принятии решений',
      'Хроническая усталость и стресс',
    ]
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="section" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-widest text-sm mb-4">[ с чем работаю ]</p>
          <h2 className="section-title">
            С чем ко мне приходят
          </h2>
          <p className="section-subtitle">
            Это не полный список — если узнали себя хотя бы в одном пункте, 
            стоит поговорить.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="card group"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-medium mb-4">{service.category}</h3>
              
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-text-secondary text-sm flex items-start gap-2"
                  >
                    <span className="text-accent/60 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 border border-accent/20 rounded-2xl bg-accent/5"
        >
          <h3 className="text-lg font-medium mb-2">Кому я подхожу</h3>
          <p className="text-text-secondary">
            Для тех, кто нацелен на устойчивые изменения через осознание, а не на «быстрые лайфхаки». 
            Для тех, кто замечает хронические эмоциональные трудности и готов к бережной, но глубокой работе.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
