import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Methodology() {
  const { t } = useTranslation();
  
  const pillars = t('methodology.pillars', { returnObjects: true }) as Array<{ id: string, title: string, subtitle: string, content: string }>;

  return (
    <div className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-4xl mb-32">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-8 block">{t('methodology.subtitle')}</span>
          <h1 
            className="text-6xl md:text-[7rem] font-display font-light mb-12 leading-[0.85] tracking-tighter"
            dangerouslySetInnerHTML={{ __html: t('methodology.title') }}
          />
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
            {t('methodology.desc')}
          </p>
        </header>

        <div className="w-full aspect-[21/9] bg-accent-soft mb-48 overflow-hidden relative border border-accent-soft">
          <motion.img 
            initial={{ scale: 1.1, filter: "blur(5px)" }}
            whileInView={{ scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://image.pollinations.ai/prompt/Abstract%20sophisticated%20architectural%20geometry%2C%20warm%20golden%20lighting%2C%20elegant%20business%20concept%2C%20minimalist%2C%20no%20text?width=1920&height=800&nologo=true" 
            alt="Methodology architecture"
            className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
          />
        </div>

        <div className="space-y-64">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              <div className="lg:col-span-1">
                <span className="text-6xl font-display font-light text-accent-soft italic">{pillar.id}</span>
              </div>
              <div className="lg:col-span-5">
                <h2 className="text-4xl font-display font-medium mb-6">{pillar.title}</h2>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8">{pillar.subtitle}</h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                  {pillar.content}
                </p>
                {pillar.id === "01" && (
                  <Link to="/metodo/headhunting-analitico" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-accent hover:text-ink transition-colors">
                    <span>Approfondisci il metodo di Mappatura</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-64 pt-48 border-t border-accent-soft">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-32">
            <div>
              <h2 className="text-4xl font-display font-medium mb-12">{t('methodology.cont_title')}</h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  {t('methodology.cont_p1')}
                </p>
                <p>
                  {t('methodology.cont_p2')}
                </p>
              </div>
            </div>
            <div className="aspect-square bg-accent-soft overflow-hidden border border-accent-soft">
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src="https://image.pollinations.ai/prompt/Two%20elegant%20professionals%20in%20a%20minimalist%20modern%20boardroom%20during%20a%20meeting%2C%20warm%20ambient%20light%2C%20high-end%20photography%2C%20no%20text?width=1000&height=1000&nologo=true" 
                alt="Professional discussion"
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <div></div>
            <div className="bg-ink text-paper p-16 relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 -z-10 group-hover:scale-110 transition-transform duration-700" />
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-12">{t('methodology.sem_title')}</h4>
              <p className="text-3xl font-display font-light italic leading-relaxed">
                {t('methodology.sem_quote')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
