'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useMemo, useState } from 'react'

type EducationImage = {
  src: string
  alt: string
}

const images: EducationImage[] = [
  {
    src: '/education/edu-07.png',
    alt: 'Удостоверение (7)',
  },
  {
    src: '/education/edu-05.png',
    alt: 'Диплом (5)',
  },
  {
    src: '/education/edu-03.png',
    alt: 'Сертификат (3)',
  },
  {
    src: '/education/edu-01.png',
    alt: 'Сертификат (1)',
  },
  {
    src: '/education/edu-02.png',
    alt: 'Сертификат (2)',
  },
  {
    src: '/education/edu-04.png',
    alt: 'Диплом (4)',
  },
  {
    src: '/education/edu-06.png',
    alt: 'Сертификат (6)',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const items = useMemo(
    () => [
      'Личностно-ориентированная (реконструктивная) психотерапия по Карвасарскому, Ташлыкову, Исуриной',
      'Практическая психология',
      'Супервизии (индивидуальные и групповые)',
      'Повышение квалификации и тематические программы',
    ],
    []
  )

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setActiveIndex((i) => (i + 1) % images.length)

  return (
    <section id="education" className="section" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Образование</h2>
          <p className="section-subtitle mx-auto">Дипломы и сертификаты</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: list */}
            <div className="text-text-secondary">
              <div className="rounded-2xl border border-white/10 bg-teal/10 p-6 md:p-7">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-text-primary mb-4">Образование</h3>

                    <div className="space-y-6">
                      <div>
                        <p className="text-text-primary font-medium leading-relaxed">
                          Личностно-ориентированная (реконструктивная) психотерапия по Карвасарскому, Ташлыкову, Исуриной
                        </p>
                        <p className="text-text-muted text-sm mt-1">
                          Институт психотерапии и медицинской психологии им.&nbsp;Б.Д.&nbsp;Карвасарского
                        </p>
                      </div>

                      <div>
                        <p className="text-text-primary font-medium leading-relaxed">Практическая психология</p>
                        <p className="text-text-muted text-sm mt-1">
                          Международная Академия Дополнительного Профессионального Образования
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <ul className="space-y-3 leading-relaxed">
                        {items.slice(2).map((t) => (
                          <li key={t} className="flex gap-3">
                            <span className="text-accent mt-1">•</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: slider */}
            <div className="relative">
              <a href={images[activeIndex]?.src || images[0].src} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full aspect-[16/10] bg-transparent overflow-hidden">
                  <Image
                    src={images[activeIndex]?.src || images[0].src}
                    alt={images[activeIndex]?.alt || images[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                    priority={activeIndex === 0}
                  />
                </div>
              </a>

              {/* arrows */}
              <button
                type="button"
                onClick={prev}
                aria-label="Предыдущий документ"
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-text-muted hover:text-text-primary transition-colors"
              >
                <span className="text-2xl leading-none">‹</span>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Следующий документ"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-text-muted hover:text-text-primary transition-colors"
              >
                <span className="text-2xl leading-none">›</span>
              </button>

              {/* dots */}
              <div className="mt-5 flex justify-center gap-2">
                {images.map((img, idx) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Документ ${idx + 1}`}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      idx === activeIndex ? 'bg-accent' : 'bg-text-secondary/40 hover:bg-text-secondary/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

