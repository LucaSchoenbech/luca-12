import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from '../components/Logo';
import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  "https://image.pollinations.ai/prompt/Elegant%20modern%20corporate%20boardroom%2C%20executive%20office%20interior%2C%20high-end%20architecture%2C%20realistic%20photography%2C%20business%20leadership%2C%20no%20text?width=1920&height=1080&nologo=true",
  "https://image.pollinations.ai/prompt/Abstract%20modern%20architecture%2C%20clean%20lines%2C%20glass%20and%20steel%2C%20warm%20sunlight%2C%20corporate%20elegance%2C%20minimalist%20photography%2C%20no%20text?width=1920&height=1080&nologo=true",
  "https://image.pollinations.ai/prompt/Close-up%20suit%20fabric%2C%20high-end%20tailoring%2C%20executive%20corporate%20leadership%2C%20texture%20and%20detail%2C%20minimalist%20photography%2C%20no%20text?width=1920&height=1080&nologo=true"
];

export default function Home() {
  const { t } = useTranslation();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const engagements = t('home.engagements', { returnObjects: true }) as Array<{ title: string, sector: string, description: string }>;
  const pillars = t('home.pillars', { returnObjects: true }) as Array<{ t: string, d: string }>;

  return (
    <div className="space-y-32 mb-48 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-transparent z-10" />
          {HERO_IMAGES.map((src, idx) => (
            <motion.img 
              key={src}
              initial={{ scale: 1.1, opacity: 0, filter: "blur(10px) grayscale(100%)" }}
              animate={{ 
                scale: currentImageIdx === idx ? 1 : 1.1, 
                opacity: currentImageIdx === idx ? 0.35 : 0, 
                filter: currentImageIdx === idx ? "blur(0px) grayscale(100%)" : "blur(10px) grayscale(100%)" 
              }}
              transition={{ 
                scale: { duration: 15, ease: "linear" },
                opacity: { duration: 2, ease: "easeOut" },
                filter: { duration: 2, ease: "easeOut" }
              }}
              src={src} 
              alt="Corporate background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 z-20 w-full mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8"
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

            {/* Quick Metrics / Decorative elements for the right side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex lg:col-span-4 flex-col gap-12 pl-12 border-l border-accent-soft"
            >
              <div>
                <span className="block text-accent font-display text-4xl mb-2">~20</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Anni di esperienza</span>
              </div>
              <div>
                <span className="block text-accent font-display text-4xl mb-2">+500</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Posizioni gestite</span>
              </div>
              <div>
                <span className="block text-accent font-display text-4xl mb-2">8+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Settori di mercato studiati</span>
              </div>
            </motion.div>
          </div>
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
              src="https://image.pollinations.ai/prompt/Architectural%20connection%20spaces%20minimalist%20elegant%20staircase%20bridge%20gallery%20or%20bright%20atrium%20Metaphors%20of%20passage%20and%20meeting%20Neutral%20elegant%20premium%20without%20people%20Minimalist%20architectural%20photography%20clean%20lines%20warm%20natural%20lighting%20high-end%20corporate?width=800&height=800&nologo=true"
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-50 group-hover:scale-105 transition-transform duration-1000"
              alt="Architecture connection space"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-soft/80 via-transparent to-transparent mix-blend-multiply" />
            <div className="relative z-10 flex flex-col justify-end h-full">
              <p 
                className="text-xl md:text-2xl lg:text-3xl font-display font-light italic leading-relaxed text-ink"
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

      {/* Insights Preview */}
      <section className="bg-paper py-32 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4 block">
                {t('home.insights_subtitle')}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-light">
                {t('home.insights_title')}
              </h2>
            </div>
            <Link to="/insights" className="text-xs uppercase tracking-widest font-bold border-b border-ink pb-2 hover:text-accent hover:border-accent transition-colors shrink-0">
              {t('home.insights_explore')}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Taking first two items from insights articles (with slugs/published) */}
            {((t('insights.articles', { returnObjects: true }) as Array<any>)
               .filter(a => a.slug)
               .slice(0, 2)
               .map((article, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <Link to={article.slug} className="flex-grow flex flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-accent">
                      {article.tag}
                    </span>
                    <span className="text-xs text-gray-400 font-light italic">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-6 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-3 text-xs uppercase tracking-widest font-bold text-ink group-hover:text-accent transition-colors mt-auto">
                    <span>{t('insights.read_article')}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )))}
          </div>
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

          {/* Digital Search Report Banner */}
          <div className="mt-48 pt-32 border-t border-gray-800">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl md:text-5xl font-display font-light leading-tight mb-8"
                      dangerouslySetInnerHTML={{ __html: t('home.report_title') }}
                  />
                  <Link 
                    to="/metodo" 
                    className="inline-flex items-center space-x-6 bg-paper text-ink px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-paper transition-all duration-300"
                  >
                    <span>{t('home.report_cta')}</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-paper rounded py-12 px-8 lg:px-16 shadow-2xl relative overflow-hidden"
              >
                {/* Subtle paper grain / noise texture could go here if needed */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
                
                <div className="flex flex-col relative z-10 w-full h-full justify-center">
                  {(t('home.report_bands', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((band, idx) => (
                    <div 
                      key={idx} 
                      className="border-t border-accent-soft pt-4 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group hover:border-accent transition-colors duration-300"
                    >
                      <h4 className="font-display text-ink font-medium text-lg lg:text-xl tracking-wide group-hover:text-accent transition-colors">
                        {band.title}
                      </h4>
                      <p className="font-sans text-gray-500 text-sm tracking-wide">
                        {band.desc}
                      </p>
                    </div>
                  ))}
                  {/* Final border to close the stack */}
                  <div className="border-t border-accent-soft"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
