'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    category: 'Отношения и границы',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.21L6 21l4.5-2.25A10.5 10.5 0 0012 19c4.97 0 9-3.185 9-7.115C21 7.954 16.97 3 12 3z" />
      </svg>
    ),
    items: [
      '"Я все время подстраиваюсь и не понимаю, чего хочу сама"',
      'Трудно говорить "нет", страшно разочаровать',
      'Берусь "спасать" и устаю от этого',
      'Чувство вины, если выбираю себя',
      'Сложно выдерживать конфликт и близость без контроля',
    ]
  },
  {
    category: 'Самооценка и самореализация',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: [
      '"Кто я без достижений?"',
      'Сравнение себя с другими',
      'Прокрастинация',
      'Страх перемен и успеха',
    ]
  },
  {
    category: 'Отношения',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    items: [
      'Повторяющиеся сценарии',
      'Привязанность и доверие',
      'Одиночество',
      'Измены, развод',
      'Хронические конфликты',
    ]
  },
  {
    category: 'Повседневные трудности',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: [
      'Нелюбимая работа',
      'Навязчивые мысли',
      'Депрессивные состояния',
      'Сложности в принятии решений',
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
          <h2 className="section-title">
            С чем ко мне приходят
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.category}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="card group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-serif font-medium mb-4">
                {service.category}
              </h3>
              
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-text-secondary text-sm flex items-baseline gap-2 py-0.5"
                  >
                    <span className="text-accent/60 flex-shrink-0 leading-5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional note moved to Hero */}
      </div>
    </section>
  )
}
