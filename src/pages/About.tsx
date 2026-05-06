import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-48">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <aside className="lg:col-span-4 lg:sticky lg:top-48 h-fit">
          <div className="aspect-[3/4] bg-accent-soft overflow-hidden mb-12 border border-accent-soft">
            <img 
              src="/portrait.png" 
              alt="Luca Roberto Schoenbech" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1587";
              }}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-medium">Luca Roberto Schoenbech</h2>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">{t('about.role')}</p>
          </div>
        </aside>

        <article className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-20"
          >
            <header>
              <h1 
                className="text-5xl md:text-7xl font-display font-light mb-8"
                dangerouslySetInnerHTML={{ __html: t('about.title') }}
              />
            </header>
            
            <div className="space-y-12 text-xl text-gray-600 leading-relaxed font-light">
              <p>
                {t('about.p1')}
              </p>
              
              <div className="bg-ink text-paper p-12 md:p-16 border-l-8 border-accent">
                <p className="text-2xl md:text-3xl font-display font-light italic leading-relaxed">
                  {t('about.quote')}
                </p>
              </div>

              <p>
                {t('about.p2')}
              </p>

              <p>
                {t('about.p3')}
              </p>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
}
