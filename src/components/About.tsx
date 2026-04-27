'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: '01',
      title: 'Запись',
      description: 'Вы выбираете удобное время онлайн - я подтверждаю встречу и присылаю детали.',
    },
    {
      number: '02',
      title: 'Первые встречи',
      description: 'Знакомимся, проясняем запрос, формулируем цели и договариваемся о формате работы.',
    },
    {
      number: '03',
      title: 'Работа',
      description: 'Регулярные сессии в Zoom. Исследуем причины трудностей, находим новые способы справляться и выстраивать опору.',
    },
    {
      number: '04',
      title: 'Итоги',
      description: 'Отмечаем изменения, закрепляем результаты и обсуждаем дальнейший маршрут - продолжать, сделать паузу или завершать.',
    },
  ]

  const principles = [
    'Работаем в спокойной и безопасной обстановке. Я поддерживаю рамки и темп, чтобы у вас было пространство для открытого разговора и контакта с собой.',
    'В терапию можно приносить то, что трудно обсуждать с близкими - стыд, вину, злость, растерянность, уязвимость. Я не осуждаю и не стыжу.',
    'Серьезные и качественные изменения требуют времени. Длительность работы зависит от ваших целей, сложности запроса и того, что будет происходить в процессе.',
    'Частоту встреч и формат мы подбираем под ваш темп и возможности - это обсуждаем и пересматриваем по мере необходимости.',
    'Вы сами решаете, продолжать работу или завершать. Если вы хотите закончить, мы планируем заключительную встречу, чтобы подвести итоги и завершить процесс бережно.',
  ]

  return (
    <section
      id="about"
      className="section bg-background-light/30 pt-10 md:pt-12 lg:pt-14 pb-12 md:pb-14 lg:pb-16"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h2 className="section-title font-serif font-light text-center mb-6">
            Как будем работать
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="card p-7 md:p-8 h-full">
              <h3 className="text-2xl font-serif font-medium mb-6">Как проходит работа</h3>

              <ol className="space-y-5">
                {steps.map((step, index) => (
                  <motion.li
                    key={step.number}
                    initial={{ opacity: 0, y: 14 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="flex gap-4"
                  >
                    <span className="mt-0.5 w-7 h-7 rounded-full bg-accent/15 text-accent flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {step.number}
                    </span>
                    <div>
                      <p className="text-text-primary font-medium">{step.title}</p>
                      <p className="text-text-secondary text-sm mt-1 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>

            <div className="card p-7 md:p-8 h-full">
              <h3 className="text-2xl font-serif font-medium mb-6">Что важно в работе</h3>

              <ul className="space-y-4 text-text-secondary text-sm leading-relaxed">
                {principles.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
