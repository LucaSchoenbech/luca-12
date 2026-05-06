import { ReactNode } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Linkedin, Mail, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'it' ? 'en' : 'it');
  };

  const navItems = [
    { name: t('nav.chi-sono'), path: '/chi-sono' },
    { name: t('nav.metodo'), path: '/metodo' },
    { name: t('nav.aree-di-lavoro'), path: '/aree-di-lavoro' },
    { name: t('nav.insights'), path: '/insights' },
    { name: t('nav.contatti'), path: '/contatti' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-blur-header border-b border-accent-soft">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="group flex items-center space-x-3">
            <Logo iconOnly={true} />
            <Logo textOnly={true} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase tracking-widest transition-colors hover:text-accent ${
                    isActive ? 'text-ink' : 'text-gray-400'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button 
              onClick={toggleLanguage} 
              className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-accent transition-colors"
            >
              <Globe size={14} />
              <span>{i18n.language === 'en' ? 'IT' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-6">
            <button 
              onClick={toggleLanguage} 
              className="text-xs font-semibold uppercase tracking-widest text-ink hover:text-accent transition-colors"
            >
              {i18n.language === 'en' ? 'IT' : 'EN'}
            </button>
            <button
              className="p-2 text-ink"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-paper border-b border-accent-soft"
        >
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-display font-medium text-ink"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-ink text-paper py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center space-x-3 text-paper">
              <Logo iconOnly={true} className="text-paper w-8 h-8 opacity-50" />
              <Logo textOnly={true} className="!text-paper" />
            </div>
            <p className="text-gray-400 text-base max-w-sm leading-relaxed font-light">
              {i18n.language === 'it' 
                ? "Ricerca, selezione e valutazione di figure manageriali e direttive. Expertise consolidata in contesti post-acquisizione e transizioni industriali." 
                : "Search, selection and assessment of executive profiles. Consolidate expertise in post-acquisition contexts and industrial transitions."}
            </p>
            <div className="flex space-x-6 pt-4">
              <a href="https://linkedin.com/in/lucaroberto-schoenbech" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:luca@schoenbech.com" className="text-gray-500 hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Perimeter</h4>
            <div className="flex flex-col space-y-4">
              {navItems.map(item => (
                <Link key={item.path} to={item.path} className="text-sm text-gray-500 hover:text-paper transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">{t('footer.info')}</h4>
            <div className="text-sm text-gray-500 space-y-2">
              <p>{t('footer.city')}</p>
              <p>{t('footer.vat')}</p>
              <p className="pt-8">{t('footer.rights')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
