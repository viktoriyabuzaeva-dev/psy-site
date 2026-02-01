'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Запись и оплата',
    description: 'Выбираете удобное время, оплачиваете онлайн — и сразу получаете ссылку на Zoom на почту.',
  },
  {
    number: '02',
    title: 'Диагностика',
    description: 'Первые 1-2 сессии — знакомство, прояснение запроса и формирование целей.',
  },
  {
    number: '03',
    title: 'Работа',
    description: 'Регулярные встречи в Zoom. Исследуем, что стоит за вашими трудностями, находим новые способы справляться.',
  },
  {
    number: '04',
    title: 'Результат',
    description: 'Устойчивые изменения в восприятии себя и отношениях с другими. Новые внутренние опоры.',
  },
]

const details = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Онлайн в Zoom',
    description: 'Работаем онлайн — удобно из любой точки мира',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '60 минут',
    description: 'Длительность одной консультации',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: '1-2 раза в неделю',
    description: 'Рекомендуемая частота для эффективной работы',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Конфиденциально',
    description: 'Всё, что вы расскажете, остаётся между нами',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="section bg-background-light/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-widest text-sm mb-4">[ процесс ]</p>
          <h2 className="section-title">
            Как проходят консультации
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              
              <div className="relative z-10">
                <span className="text-4xl font-serif text-accent/30 mb-2 block">
                  {step.number}
                </span>
                <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {details.map((detail, index) => (
            <div 
              key={detail.title}
              className="card flex items-start gap-4"
            >
              <div className="text-accent flex-shrink-0">
                {detail.icon}
              </div>
              <div>
                <h4 className="font-medium mb-1">{detail.title}</h4>
                <p className="text-text-muted text-sm">{detail.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-serif text-text-secondary italic leading-relaxed">
            «Задача терапии — сделать бессознательное сознательным 
            и тем самым вернуть человеку власть над собственной жизнью»
          </p>
          <cite className="block mt-4 text-accent text-sm not-italic">
            — Зигмунд Фрейд
          </cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
