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

  return (
    <section id="about" className="section bg-background-light/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.3 }}
        >
          <p className="text-accent uppercase tracking-widest text-sm mb-4">[ обо мне ]</p>
          <h2 className="section-title">
            Меня зовут Виктория
          </h2>
        </motion.div>

        {/* Education card - full width */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="card">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </span>
              Образование
            </h3>
            <div className="grid md:grid-cols-2 gap-6 pl-[52px]">
              <div className="relative">
                <div className="absolute -left-[52px] top-1 w-10 flex justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent/40"></div>
                </div>
                <p className="text-text-primary font-medium leading-relaxed">
                  Личностно-ориентированная (реконструктивная) психотерапия 
                  по Карвасарскому, Ташлыкову, Исуриной
                </p>
                <p className="text-text-muted text-sm mt-1">
                  Институт психотерапии и медицинской психологии им.&nbsp;Б.Д.&nbsp;Карвасарского
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[52px] top-1 w-10 flex justify-center md:hidden">
                  <div className="w-2 h-2 rounded-full bg-accent/40"></div>
                </div>
                <p className="text-text-primary font-medium leading-relaxed">
                  Практическая психология
                </p>
                <p className="text-text-muted text-sm mt-1">
                  Международная Академия Дополнительного Профессионального Образования
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two columns: Principles (left) + Approach (right) */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column - Principles */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="p-5 rounded-2xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h4 className="font-medium text-text-primary">Конфиденциальность</h4>
              </div>
              <p className="text-text-muted text-sm pl-[52px]">Всё сказанное остаётся между нами</p>
            </div>
            <div className="p-5 rounded-2xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-text-primary">Ваш темп</h4>
              </div>
              <p className="text-text-muted text-sm pl-[52px]">Двигаемся со скоростью, комфортной для вас</p>
            </div>
            <div className="p-5 rounded-2xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h4 className="font-medium text-text-primary">Безопасные границы</h4>
              </div>
              <p className="text-text-muted text-sm pl-[52px]">Чёткие рамки создают пространство доверия</p>
            </div>
          </motion.div>

          {/* Right column - Approach */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="card h-full">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </span>
                Подход в работе
              </h3>
              <ul className="space-y-4 pl-[52px]">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-6">→</span>
                  <span className="text-text-secondary">
                    Делаем видимым невидимое: исследуем мотивы и внутренние конфликты
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-6">→</span>
                  <span className="text-text-secondary">
                    Цель — устойчивые изменения, а не временное подавление проявлений
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-6">→</span>
                  <span className="text-text-secondary">
                    На старте согласуем цели и ритм встреч
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
