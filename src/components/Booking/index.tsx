'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const paidSessionIncludes = [
    'Индивидуальная консультация',
    'Работа с вашим запросом',
    'Бережное исследование',
    'Конфиденциальность',
  ]

  const introConsultIncludes = [
    'Короткое знакомство и уточнение запроса',
    'Обсуждаем, смогу ли я помочь',
    'Договариваемся о формате и следующем шаге, если подходим друг другу',
  ]

  return (
    <section id="booking" className="section bg-background-light/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Записаться
          </h2>
          <p className="section-subtitle mx-auto">
            Выберите формат и забронируйте удобное время онлайн
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free intro consultation */}
            <div className="card p-8 md:p-10 flex flex-col">
              <div className="text-center">
                <h3 className="text-2xl font-medium mb-3">Первая бесплатная консультация</h3>
                <p className="text-text-secondary mb-6">
                  <span className="text-text-primary font-medium">0&nbsp;₽</span> · 15–30 минут · Zoom
                </p>
              </div>

              <div className="mt-2">
                <p className="font-medium mb-3">Что входит:</p>
                <ul className="space-y-2">
                  {introConsultIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl border border-white/10 bg-teal/10 px-4 py-3">
                  <p className="text-text-primary font-medium mb-1">Важно</p>
                  <p className="text-text-muted text-sm">
                    На бесплатной консультации мы не разбираем ваш случай и не ищем решения проблемы.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-medium mb-2">Кому подходит:</p>
                <p className="text-text-secondary">
                  Новым клиентам, или если мы работали более полугода назад и хочется заново свериться по запросу и формату.
                </p>
              </div>

              <div className="mt-6">
                <p className="font-medium mb-2">Как записаться:</p>
                <p className="text-text-muted text-sm mb-4">Нажмите "Онлайн-запись" и выберите удобное время.</p>
              </div>

              <div className="mt-auto pt-4">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button
                    data-planerka-embed="popup"
                    data-planerka-url="https://planerka.app/meet"
                    data-planerka-user="viktoriya-buzaeva-lp7m21"
                    data-planerka-event="besplatnaya-konsultaciya"
                    style={{
                      padding: '13px 22px',
                      fontSize: 15,
                      fontWeight: 600,
                      background: '#2D8FFE',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 48,
                      cursor: 'pointer',
                    }}
                  >
                    Онлайн-запись
                  </button>
                </div>
              </div>
            </div>

            {/* Paid session */}
            <div className="card p-8 md:p-10 flex flex-col">
              <div className="text-center">
                <h3 className="text-2xl font-medium mb-3">Психологическая консультация</h3>
                <p className="text-text-secondary mb-6">
                  <span className="text-text-primary font-medium">2&nbsp;500&nbsp;₽</span> · 55 минут · Zoom
                </p>
              </div>

              <div className="mt-2">
                <p className="font-medium mb-3">Что входит:</p>
                <ul className="space-y-2">
                  {paidSessionIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl border border-white/10 bg-teal/10 px-4 py-3">
                  <p className="text-text-primary font-medium mb-1">Важно</p>
                  <p className="text-text-muted text-sm">
                    Рекомендуемая частота: 1–2 раза в&nbsp;неделю (обсуждаем индивидуально).
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-medium mb-2">Кому подходит:</p>
                <p className="text-text-secondary">
                  Тем, кто уже работает со мной, или если не хочется тратить время на знакомство и вы готовы сразу перейти к работе.
                </p>
              </div>

              <div className="mt-6">
                <p className="font-medium mb-2">Как записаться:</p>
                <p className="text-text-muted text-sm mb-4">
                  Нажмите "Онлайн-запись", выберите время и оплатите. Ссылка на Zoom придет автоматически.
                </p>
              </div>

              <div className="mt-auto pt-4">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button
                    data-planerka-embed="popup"
                    data-planerka-url="https://planerka.app/meet"
                    data-planerka-user="viktoriya-buzaeva-lp7m21"
                    data-planerka-event="konsultaciya-u-buzaevoy-viktorii"
                    style={{
                      padding: '13px 22px',
                      fontSize: 15,
                      fontWeight: 600,
                      background: '#2D8FFE',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 48,
                      cursor: 'pointer',
                    }}
                  >
                    Онлайн-запись
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
