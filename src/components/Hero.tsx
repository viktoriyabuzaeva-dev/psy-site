'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  const quickFacts = [
    {
      title: 'Онлайн в Zoom',
      description: 'Удобно из любой точки мира',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: '55 минут',
      description: 'Длительность одной консультации',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: '1-2 раза в неделю',
      description: 'Частоту подбираем индивидуально',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Конфиденциально',
      description: 'Все, что вы расскажете, остается между нами',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-10 md:pt-12 lg:pt-14 pb-10 md:pb-12"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-teal/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-background-light/30 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo (left like reference) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Photo frame with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-teal/20 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-accent/20 rounded-2xl transform -rotate-3" />
              
              {/* Photo */}
              <div className="relative bg-background-light rounded-2xl overflow-hidden h-full border border-white/10">
                <Image
                  src="/photo.png"
                  alt="Виктория Бузаева - психолог"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-full" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-teal/40 rounded-full" />
            </div>
          </motion.div>

          {/* Text Content (right like reference) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl"
          >
            <p className="text-text-muted uppercase tracking-wider text-sm mb-3">
              Психолог
            </p>

            <h1 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-6">
              Виктория <span className="italic">Бузаева</span>
            </h1>

            <div className="space-y-5 text-text-secondary leading-relaxed font-sans font-light">
              <p className="text-text-primary">
                Психолог в психодинамическом подходе. Работаю с женщинами, которым знакома жизнь в напряжении: когда в отношениях
                много "надо", контроля или спасательства, и мало опоры на себя.
              </p>
              <p>
                Если вы часто "держитесь", терпите, берете на себя чужое, в терапии можно постепенно возвращать границы,
                право на свои чувства и более устойчивое "я".
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {quickFacts.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-background/20 px-4 py-3"
                >
                  <div className="text-accent flex-shrink-0">{f.icon}</div>
                  <div>
                    <p className="text-text-primary font-medium text-sm">{f.title}</p>
                    <p className="text-text-muted text-xs mt-0.5">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <motion.button
                onClick={scrollToBooking}
                className="btn-primary w-full justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Записаться на консультацию
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}
