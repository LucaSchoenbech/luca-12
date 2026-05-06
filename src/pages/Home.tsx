import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from '../components/Logo';

export default function Home() {
  const { t } = useTranslation();

  const engagements = t('home.engagements', { returnObjects: true }) as Array<{ title: string, sector: string, description: string }>;
  const pillars = t('home.pillars', { returnObjects: true }) as Array<{ t: string, d: string }>;

  return (
    <div className="space-y-48 mb-48">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.2, opacity: 0, filter: "blur(10px) grayscale(100%)" }}
            animate={{ scale: 1, opacity: 0.35, filter: "blur(0px) grayscale(100%)" }}
            transition={{ 
              scale: { duration: 25, ease: "easeOut" },
              opacity: { duration: 2, ease: "easeOut" },
              filter: { duration: 2, ease: "easeOut" }
            }}
            src="https://image.pollinations.ai/prompt/Elegant%20modern%20corporate%20boardroom%2C%20executive%20office%20interior%2C%20high-end%20architecture%2C%20realistic%20photography%2C%20business%20leadership%2C%20no%20text?width=1920&height=1080&nologo=true" 
            alt="Corporate boardroom" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 z-20 w-full mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-10 items-start flex flex-col md:items-start lg:items-start text-left">
              {/* Force the internal Logo component to align left on home */}
              <div className="-ml-2 transform scale-75 origin-top-left md:scale-100">
                <Logo className="items-start" />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-500 font-light mb-14 leading-relaxed max-w-xl">
              {t('home.hero_desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Link 
                to="/contatti" 
                className="inline-flex items-center space-x-6 bg-ink text-paper px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all duration-300"
              >
                <span>{t('home.btn_contact')}</span>
                <ArrowRight size={16} />
              </Link>
              <Link 
                to="/metodo" 
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink hover:text-accent transition-colors flex items-center space-x-3 group"
              >
                <span>{t('home.btn_method')}</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Hook */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7">
            <h2 
              className="text-4xl md:text-5xl font-display font-light mb-12 leading-tight"
              dangerouslySetInnerHTML={{ __html: t('home.intro_title') }}
            />
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>{t('home.intro_p1')}</p>
              <p>{t('home.intro_p2')}</p>
            </div>
          </div>
          <div className="lg:col-span-5 aspect-square bg-accent-soft p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group border border-accent-soft">
            <motion.img 
              src="https://image.pollinations.ai/prompt/Timeless%20classic%20analog%20watch%20mechanics%20close-up%2C%20warm%20golden%20ambient%20light%2C%20high-end%20corporate%20heritage%2C%20minimalist%20macro%20photography%2C%20no%20text?width=800&height=800&nologo=true"
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-50 group-hover:scale-105 transition-transform duration-1000"
              alt="Experience detail"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-soft/80 via-transparent to-transparent mix-blend-multiply" />
            <div className="relative z-10 flex flex-col justify-end h-full">
              <p 
                className="text-3xl md:text-4xl lg:text-5xl font-display font-light italic leading-tight text-ink"
                dangerouslySetInnerHTML={{ __html: t('home.experience_quote') }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engagements Preview */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">{t('home.engagements_title')}</h2>
          <Link to="/aree-di-lavoro" className="text-xs uppercase tracking-widest font-bold border-b border-ink pb-2 hover:text-accent hover:border-accent transition-colors">{t('home.engagements_explore')}</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {engagements.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-default"
            >
              <div className="border-t border-accent-soft pt-12 space-y-8">
                <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-accent">
                  {item.sector}
                </span>
                <h3 className="text-3xl font-display font-medium group-hover:italic transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Method Pillars Preview */}
      <section className="bg-ink text-paper py-48">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-32">
            <h2 className="text-5xl md:text-6xl font-display font-light mb-12 italic">{t('home.pillars_title')}</h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              {t('home.pillars_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {pillars.map((pillar, i) => (
              <div key={i} className="space-y-12 group">
                <span className="text-xs font-mono text-accent">0{i+1}</span>
                <h3 className="text-2xl font-display font-medium leading-tight group-hover:text-accent transition-colors">{pillar.t}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{pillar.d}</p>
                <Link to="/metodo" className="inline-block pt-8">
                  <ArrowRight size={20} className="text-accent group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
