'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="section" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent uppercase tracking-widest text-sm mb-4">[ стоимость ]</p>
          <h2 className="section-title">
            Инвестиция в себя
          </h2>
        </motion.div>

        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-teal/10 rounded-3xl blur-xl" />
          
          <div className="relative bg-background-light border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Price */}
              <div className="text-center md:text-left">
                <p className="text-text-muted uppercase tracking-wider text-sm mb-2">
                  Консультация онлайн
                </p>
                <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                  <span className="text-5xl md:text-6xl font-serif text-accent">2 500</span>
                  <span className="text-text-secondary">₽</span>
                </div>
                <p className="text-text-secondary">
                  60 минут в Zoom
                </p>
              </div>

              {/* Right side - What's included */}
              <div className="space-y-4">
                <h3 className="font-medium mb-4">Что входит:</h3>
                <ul className="space-y-3">
                  {[
                    'Индивидуальная консультация',
                    'Работа с вашим запросом',
                    'Бережное исследование',
                    'Конфиденциальность',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Planerka booking widget */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-center text-text-muted text-sm mb-6">Выберите время, оплатите — ссылка на Zoom придёт автоматически</p>
              <div
                className="app-planerka-embed"
                data-planerka-embed="default"
                data-planerka-url="https://planerka.app/meet"
                data-planerka-user="viktoriya-buzaeva-lp7m21"
                data-planerka-event="konsultaciya-u-buzaevoy-viktorii"
                data-planerka-bg="#0D3422"
                data-planerka-border="#0D3422"
                data-planerka-shadow-color="#1A5C38"
                style={{ width: '100%', minHeight: '600px' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid sm:grid-cols-2 gap-6"
        >
          <div className="card">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Рекомендуемая частота
            </h3>
            <p className="text-text-secondary text-sm">
              1-2 раза в неделю для достижения устойчивых результатов. 
              Частоту обсуждаем индивидуально.
            </p>
          </div>

          <div className="card">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Как записаться
            </h3>
            <p className="text-text-secondary text-sm">
              Выберите время в виджете, оплатите онлайн — ссылка на Zoom создаётся автоматически, без ожидания.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
