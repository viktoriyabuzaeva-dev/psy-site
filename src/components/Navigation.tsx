'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { id: 'hero', label: 'Главная', icon: '○' },
  { id: 'about', label: 'Обо мне', icon: '○' },
  { id: 'services', label: 'С чем работаю', icon: '○' },
  { id: 'process', label: 'Как проходят консультации', icon: '○' },
  { id: 'pricing', label: 'Стоимость', icon: '○' },
  { id: 'booking', label: 'Записаться', icon: '○' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isBlogPage = pathname?.startsWith('/blog')

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
      {/* Desktop Navigation - Left Side */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-center z-50 bg-background/80 backdrop-blur-sm border-r border-white/5">
        <div className="flex flex-col gap-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex items-center justify-center w-10 h-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-accent w-3 h-3' 
                    : 'bg-text-secondary/50 group-hover:bg-text-primary'
                }`}
              />
              
              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-3 py-1.5 bg-background-light rounded-lg text-sm text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
                {item.label}
              </span>
            </motion.button>
          ))}
        
          {/* Blog Link */}
          <Link
            href="/blog"
            className="group relative flex items-center justify-center w-10 h-10 mt-4 pt-4 border-t border-white/10"
          >
            <span 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isBlogPage 
                  ? 'bg-accent w-3 h-3' 
                  : 'bg-text-secondary/50 group-hover:bg-text-primary'
              }`}
            />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-3 py-1.5 bg-background-light rounded-lg text-sm text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
              Блог
            </span>
          </Link>
        </div>
        
        {/* Vertical line indicator */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-48 bg-white/5 -z-10" />
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        {/* Mobile Header */}
        <div className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-white/5' : ''
        }`}>
          <span className="font-serif text-lg">ВБ</span>
          
          {/* Hamburger Button */}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-white/5"
            >
              <div className="px-6 py-8 flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 text-lg transition-colors ${
                      activeSection === item.id 
                        ? 'text-accent' 
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Blog Link */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-4 mt-2 border-t border-white/10"
                >
                  <Link
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-lg transition-colors ${
                      isBlogPage 
                        ? 'text-accent' 
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Блог
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
