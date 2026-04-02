'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-teal/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-background-light/30 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light leading-tight mb-6">
              Виктория
              <span className="block italic text-gradient">Бузаева</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-text-primary mb-4 font-serif font-light italic">
              Работаю с тем, о чём не принято говорить вслух
            </p>

            <p className="text-lg text-text-secondary mb-8 max-w-lg leading-relaxed font-sans font-light">
              Психолог для женщин
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={scrollToPricing}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Записаться на консультацию
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              
              <motion.a
                href="#about"
                className="btn-secondary text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Узнать больше
              </motion.a>
            </div>
            
            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-accent/20 flex gap-8">
              <div>
                <p className="text-3xl font-serif italic text-accent">100+</p>
                <p className="text-text-muted text-sm font-sans">часов личной терапии</p>
              </div>
              <div>
                <p className="text-3xl font-serif italic text-accent">регулярные</p>
                <p className="text-text-muted text-sm font-sans">супервизии</p>
              </div>
            </div>
          </motion.div>
          
          {/* Photo */}
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
                  alt="Виктория Бузаева — психолог"
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
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-text-muted/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
