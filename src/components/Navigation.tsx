'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navItems = [
  { id: 'services', label: 'С чем работаю', icon: '○' },
  { id: 'about', label: 'Как будем работать', icon: '○' },
  { id: 'education', label: 'Образование', icon: '○' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (!isHomePage) return
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Определяем активную секцию
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      // Если не на главной - перенаправляем на главную с якорем
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Top Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-background/60 backdrop-blur-sm'
      }`}>
        {/* Top bar */}
        <div className="hidden lg:block border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 h-10 flex items-center justify-between gap-6">
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="text-xs uppercase tracking-wider text-text-muted whitespace-nowrap hover:text-text-primary transition-colors"
              aria-label="На главную"
            >
              Психолог Виктория Бузаева
            </button>

            <div className="flex items-center gap-5">
              <div className="text-xs text-text-secondary whitespace-nowrap">
                Часы работы 10:00 - 22:00 (по мск)
              </div>
              <a
                href="https://t.me/BuzaTori"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать в Telegram"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.12.098.153.228.166.331.014.103.03.336.017.519z"/>
                </svg>
              </a>
              <a
                href="tel:+79055315473"
                className="text-xs text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
              >
                +7&nbsp;905&nbsp;531-54-73
              </a>
            </div>
          </div>
        </div>

        {/* Main row */}
        <div className="border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 h-14 flex items-center gap-6">
            {/* Desktop nav + CTA */}
            <div className="hidden lg:flex items-center justify-between gap-6 w-full">
              <nav className="flex items-center gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm transition-colors ${
                      activeSection === item.id ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => scrollToSection('booking')}
                className="bg-accent hover:bg-accent-hover text-background px-5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Записаться на консультацию
              </button>
            </div>

            {/* Mobile actions */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="https://t.me/BuzaTori"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать в Telegram"
                className="px-3 py-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.12.098.153.228.166.331.014.103.03.336.017.519z"/>
                </svg>
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label="Меню"
              >
                <motion.span
                  className="w-6 h-0.5 bg-text-primary block"
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-text-primary block"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-text-primary block"
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden border-t border-white/5 bg-background/98 backdrop-blur-md"
            >
              <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('booking')}
                  className="w-full bg-accent hover:bg-accent-hover text-background px-5 py-3 rounded-lg text-base font-semibold transition-colors"
                >
                  Записаться на консультацию
                </button>

                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 text-lg transition-colors ${
                      activeSection === item.id ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href="https://t.me/BuzaTori"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Написать в Telegram
                  </a>
                  <a
                    href="tel:+79055315473"
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    +7 905 531-54-73
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
