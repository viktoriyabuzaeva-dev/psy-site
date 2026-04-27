'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="booking" className="section bg-background-light/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent uppercase tracking-widest text-sm mb-4">[ запись ]</p>
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
          <div className="card p-8 md:p-12">
            <div className="grid gap-8 md:gap-10">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-medium mb-3">Запись на первую бесплатную консультацию</h3>
                <p className="text-text-secondary max-w-2xl mb-6 leading-relaxed">
                  Длительность: 15–30 минут. На ней мы не разбираем ваш случай и не ищем решения проблемы — знакомимся,
                  обсуждаем, смогу ли я помочь, и планируем дальнейшую работу, если подходим друг другу.
                </p>
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

              <div className="border-t border-white/10 pt-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-medium mb-6">Запись на психологическую сессию</h3>
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

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-text-muted text-sm">
            Консультации проходят онлайн через Zoom
          </p>
        </motion.div>
      </div>
    </section>
  )
}
