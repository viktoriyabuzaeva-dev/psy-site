import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import Booking from '@/components/Booking'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Pricing />
      <Booking />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-xl mb-4">Виктория Бузаева</h3>
              <p className="text-text-secondary text-sm">
                Психолог, личностно-ориентированная реконструктивная психотерапия
              </p>
            </div>
            
            {/* Quick links */}
            <div>
              <h4 className="font-medium mb-4 text-text-secondary">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-text-muted hover:text-text-primary transition-colors">Обо мне</a></li>
                <li><a href="#services" className="text-text-muted hover:text-text-primary transition-colors">С чем работаю</a></li>
                <li><a href="#process" className="text-text-muted hover:text-text-primary transition-colors">Как проходят консультации</a></li>
                <li><a href="#pricing" className="text-text-muted hover:text-text-primary transition-colors">Стоимость</a></li>
                <li><a href="#booking" className="text-text-muted hover:text-text-primary transition-colors">Записаться</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4 text-text-secondary">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://t.me/BuzaTori" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.12.098.153.228.166.331.014.103.03.336.017.519z"/>
                    </svg>
                    Написать в Telegram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/buzaevapsy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.12.098.153.228.166.331.014.103.03.336.017.519z"/>
                    </svg>
                    Telegram-канал
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.b17.ru/id1251116/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    Профиль на B17.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} Виктория Бузаева
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
